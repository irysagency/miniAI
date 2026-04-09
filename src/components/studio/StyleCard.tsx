import { CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { StylePreset } from '../../types';

interface Props {
  style: StylePreset;
  isSelected: boolean;
  onClick: () => void;
}

export function StyleCard({ style, isSelected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative bg-white rounded-xl overflow-hidden border cursor-pointer select-none transition-all duration-150',
        isSelected
          ? 'border-2 border-[#4F46E5] shadow-[0_4px_16px_rgba(79,70,229,0.15)]'
          : 'border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
      )}
    >
      {/* Thumbnail image */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={style.thumbnail}
          alt={style.name}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Selected checkmark */}
      {isSelected && (
        <div className="absolute top-2.5 right-2.5 bg-white rounded-full shadow-sm p-0.5">
          <div className="bg-[#4F46E5] rounded-full w-5 h-5 flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
        </div>
      )}

      {/* Info */}
      <div className="px-4 py-3">
        <h3 className="font-semibold text-sm text-[#111827]">{style.name}</h3>
        <p className="text-xs text-[#6B7280] line-clamp-1 mt-0.5">{style.description}</p>
      </div>
    </div>
  );
}
