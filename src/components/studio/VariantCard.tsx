import { cn } from '../../lib/utils';
import type { ThumbnailVariant } from '../../types';

interface Props {
  variant: ThumbnailVariant;
  isSelected: boolean;
  onClick: () => void;
}

export function VariantCard({ variant, isSelected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full rounded-lg overflow-hidden border-2 transition-all',
        isSelected
          ? 'border-[#4F46E5] shadow-[0_0_0_2px_rgba(79,70,229,0.2)]'
          : 'border-transparent hover:border-[#4F46E5]/30'
      )}
      style={{ aspectRatio: '16/9' }}
    >
      <div className="w-full h-full" style={{ background: variant.url }} />
    </button>
  );
}
