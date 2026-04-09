import { cn } from '../lib/utils';
import type { GeneratorState } from '../types';
import { Plus } from 'lucide-react';

interface ColorPickerProps {
  selectedPreset: GeneratorState['selectedColorRef'];
  customHex: string;
  onPresetSelect: (preset: GeneratorState['selectedColorRef']) => void;
  onCustomColorChange: (hex: string) => void;
}

const PRESETS = [
  { id: 'preset1' as const, bg: 'bg-[#6366F1]' }, /* Primary Indigo */
  { id: 'preset2' as const, bg: 'bg-[#10B981]' }, /* Emerald */
  { id: 'preset3' as const, bg: 'bg-[#F43F5E]' }, /* Rose */
];

export function ColorPicker({ selectedPreset, customHex, onPresetSelect, onCustomColorChange }: ColorPickerProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm font-medium text-text-primary px-1">Brand Color</label>
      <div className="flex items-center gap-3">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onPresetSelect(preset.id)}
            className={cn(
              "w-8 h-8 rounded-full border-2 transition-all duration-150 ease-ease outline-none",
              preset.bg,
              selectedPreset === preset.id ? "border-text-primary scale-110" : "border-transparent hover:scale-105"
            )}
            aria-label={`Select color preset ${preset.id}`}
          />
        ))}
        
        <div className="w-px h-6 bg-border-default mx-1" />
        
        <button
          onClick={() => onPresetSelect('custom')}
          className={cn(
            "relative w-8 h-8 rounded-full border-2 bg-app-sub flex items-center justify-center transition-all duration-150 ease-ease overflow-hidden",
            selectedPreset === 'custom' ? "border-text-primary scale-110" : "border-border-default hover:border-border-subtle hover:scale-105"
          )}
        >
          {selectedPreset === 'custom' && (
             <div 
               className="absolute inset-0"
               style={{ backgroundColor: customHex }} 
             />
          )}
          <Plus className={cn("w-4 h-4 z-10", selectedPreset === 'custom' ? "text-white" : "text-text-secondary")} />
          <input 
            type="color" 
            value={customHex}
            onChange={(e) => onCustomColorChange(e.target.value)}
            className="absolute opacity-0 inset-0 w-full h-full cursor-pointer z-20"
          />
        </button>
      </div>
    </div>
  );
}
