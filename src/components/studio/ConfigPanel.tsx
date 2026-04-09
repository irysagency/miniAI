import { useRef } from 'react';
import { cn } from '../../lib/utils';
import type { GeneratorConfig } from '../../types';

interface Props {
  config: GeneratorConfig;
  onChange: (updates: Partial<GeneratorConfig>) => void;
}

const COLOR_PRESETS = [
  { key: 'preset1' as const, hex: '#4F46E5' },
  { key: 'preset2' as const, hex: '#10B981' },
  { key: 'preset3' as const, hex: '#F43F5E' },
];

export function ConfigPanel({ config, onChange }: Props) {
  const colorInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <div>
        <label className="block text-sm font-semibold text-[#111827] mb-1.5">
          Titre de la vidéo
        </label>
        <input
          type="text"
          value={config.title}
          onChange={e => onChange({ title: e.target.value })}
          placeholder="ex: Mon $100M SaaS Journey"
          className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
        />
      </div>

      {/* Subtitle */}
      <div>
        <label className="block text-sm font-semibold text-[#111827] mb-1.5">
          Sous-titre{' '}
          <span className="font-normal text-[#9CA3AF]">(optionnel)</span>
        </label>
        <input
          type="text"
          value={config.subtitle}
          onChange={e => onChange({ subtitle: e.target.value })}
          placeholder="ex: Year 1 Recap"
          className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
        />
      </div>

      {/* Background mode */}
      <div>
        <label className="block text-sm font-semibold text-[#111827] mb-2">Fond</label>
        <div className="flex gap-2">
          {(['ai', 'upload'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => onChange({ backgroundMode: mode })}
              className={cn(
                'flex-1 py-2 rounded-xl text-sm font-medium border transition-all',
                config.backgroundMode === mode
                  ? 'bg-[#4F46E5] text-white border-[#4F46E5]'
                  : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#4F46E5]/40'
              )}
            >
              {mode === 'ai' ? '✦ IA généré' : '⬆ Importer'}
            </button>
          ))}
        </div>
      </div>

      {/* Color palette */}
      <div>
        <label className="block text-sm font-semibold text-[#111827] mb-2">Palette couleur</label>
        <div className="flex items-center gap-2">
          {COLOR_PRESETS.map(({ key, hex }) => (
            <button
              key={key}
              onClick={() => onChange({ colorPreset: key })}
              title={hex}
              className={cn(
                'w-8 h-8 rounded-full border-2 transition-all',
                config.colorPreset === key
                  ? 'border-[#111827] scale-110'
                  : 'border-transparent hover:scale-105'
              )}
              style={{ backgroundColor: hex }}
            />
          ))}

          {/* Custom color picker */}
          <button
            onClick={() => colorInputRef.current?.click()}
            className={cn(
              'w-8 h-8 rounded-full border-2 flex items-center justify-center overflow-hidden transition-all',
              config.colorPreset === 'custom'
                ? 'border-[#111827] scale-110'
                : 'border-[#E5E7EB] hover:scale-105'
            )}
            style={{
              backgroundColor:
                config.colorPreset === 'custom' ? config.customColorHex : 'white',
            }}
          >
            {config.colorPreset !== 'custom' && (
              <span className="text-[10px] text-[#9CA3AF] font-bold">+</span>
            )}
            <input
              ref={colorInputRef}
              type="color"
              value={config.customColorHex}
              onChange={e => onChange({ colorPreset: 'custom', customColorHex: e.target.value })}
              className="sr-only"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
