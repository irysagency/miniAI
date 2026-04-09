import { useEffect } from 'react';
import { useGenerator } from '../../hooks/useGenerator';
import { VariantCard } from './VariantCard';
import { ThumbnailEditor } from './ThumbnailEditor';
import { ActionBar } from './ActionBar';
import { ChatInput } from './ChatInput';
import type { GeneratorConfig } from '../../types';

interface Props {
  config: GeneratorConfig;
  onEdit: () => void;
}

export function ResultsPanel({ config, onEdit }: Props) {
  const { isGenerating, variants, selectedVariantId, selectedVariant, generate, selectVariant } =
    useGenerator();

  useEffect(() => {
    generate(config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
        <ThumbnailEditor
          variant={selectedVariant}
          isGenerating={isGenerating}
          title={config.title}
          subtitle={config.subtitle}
        />
        <ActionBar
          onDownload={() => {
            /* TODO: download */
          }}
          onRegenerate={() => generate(config)}
          onEdit={onEdit}
          onExpression={() => {
            /* TODO: expression */
          }}
          onShare={() => {
            /* TODO: share */
          }}
          isGenerating={isGenerating}
        />
        <ChatInput
          onSubmit={_p => {
            /* TODO: AI edit via Gemini */
          }}
          disabled={isGenerating}
        />
      </div>
    </div>
  );
}
