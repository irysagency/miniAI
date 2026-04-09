import { useEffect, useRef, useState } from 'react';
import { useGenerator } from '../../hooks/useGenerator';
import { VariantCard } from './VariantCard';
import { ThumbnailEditor } from './ThumbnailEditor';
import { ActionBar } from './ActionBar';
import { ChatInput } from './ChatInput';
import { buildThumbnailPrompt } from '../../lib/geminiClient';
import { newStyles } from '../../data/styles';
import type { GeneratorConfig } from '../../types';

interface Props {
  config: GeneratorConfig;
  onEdit: () => void;
}

export function ResultsPanel({ config, onEdit }: Props) {
  const { isGenerating, variants, selectedVariantId, selectedVariant, generate, selectVariant } =
    useGenerator();
  const [isAiEditing, setIsAiEditing] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const thumbnailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    generate(config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleAiEdit(prompt: string) {
    setIsAiEditing(true);
    setAiMessage('');
    try {
      const style = newStyles.find(s => s.id === config.selectedStyleId);
      const colorMap: Record<string, string> = {
        preset1: '#4F46E5',
        preset2: '#10B981',
        preset3: '#F43F5E',
        custom: config.customColorHex,
      };
      const color = colorMap[config.colorPreset];
      const geminiPrompt = await buildThumbnailPrompt(
        `${style?.name ?? 'YouTube'} — instruction: ${prompt}`,
        config.title,
        config.subtitle,
        [color]
      );
      setAiMessage(`✦ Idée IA : ${geminiPrompt.slice(0, 120)}…`);
      await generate(config);
    } catch {
      setAiMessage('Erreur Gemini — vérifiez VITE_GEMINI_KEY dans .env');
    } finally {
      setIsAiEditing(false);
    }
  }

  function handleDownload() {
    const el = thumbnailRef.current;
    if (!el) return;
    // Build a data URL from the gradient background via canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, 1280, 720);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1280, 720);
    // Draw title
    ctx.fillStyle = 'white';
    ctx.font = 'bold 72px Inter, sans-serif';
    ctx.fillText(config.title || 'MiniAI', 60, 620);
    if (config.subtitle) {
      ctx.font = '400 40px Inter, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.fillText(config.subtitle, 60, 674);
    }
    const link = document.createElement('a');
    link.download = `${config.title || 'miniature'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6 items-start">
        {/* Left: variant strip */}
        <div className="flex flex-col gap-2.5 w-[112px] shrink-0 pt-0.5">
          {isGenerating
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full rounded-lg bg-gray-100 animate-pulse"
                  style={{ aspectRatio: '16/9' }}
                />
              ))
            : variants.map(v => (
                <VariantCard
                  key={v.id}
                  variant={v}
                  isSelected={selectedVariantId === v.id}
                  onClick={() => selectVariant(v.id)}
                />
              ))}
        </div>

        {/* Center: main thumbnail + controls */}
        <div className="flex flex-col items-center gap-4">
          <div ref={thumbnailRef}>
            <ThumbnailEditor
              variant={selectedVariant}
              isGenerating={isGenerating}
              title={config.title}
              subtitle={config.subtitle}
            />
          </div>
          <ActionBar
            onDownload={handleDownload}
            onRegenerate={() => generate(config)}
            onEdit={onEdit}
            onExpression={() => generate(config)}
            onShare={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
            isGenerating={isGenerating || isAiEditing}
          />
          <ChatInput
            onSubmit={handleAiEdit}
            disabled={isGenerating || isAiEditing}
          />
        </div>
      </div>

      {/* AI feedback message */}
      {aiMessage && (
        <div className="ml-[136px] max-w-[560px] bg-[#EEF2FF] border border-[#4F46E5]/20 rounded-xl px-4 py-3 text-xs text-[#4F46E5] leading-relaxed">
          {aiMessage}
        </div>
      )}
    </div>
  );
}
