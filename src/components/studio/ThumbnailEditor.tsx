import { Loader2 } from 'lucide-react';
import type { ThumbnailVariant } from '../../types';

interface Props {
  variant: ThumbnailVariant | null;
  isGenerating: boolean;
  title: string;
  subtitle: string;
}

export function ThumbnailEditor({ variant, isGenerating, title, subtitle }: Props) {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg shrink-0"
      style={{ width: 560, height: 315, background: variant?.url ?? '#F1F5F9' }}
    >
      {isGenerating && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
          <Loader2 size={32} className="text-[#4F46E5] animate-spin" />
          <span className="text-sm text-[#6B7280] font-medium">Génération en cours…</span>
        </div>
      )}
      {!isGenerating && variant && (
        <div className="absolute bottom-5 left-5 right-5">
          {title && (
            <h2 className="text-white font-bold text-xl drop-shadow-lg leading-tight">{title}</h2>
          )}
          {subtitle && (
            <p className="text-white/80 text-sm drop-shadow mt-1">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}
