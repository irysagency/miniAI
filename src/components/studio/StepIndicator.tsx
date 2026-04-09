import { cn } from '../../lib/utils';
import type { StudioStep } from '../../types';

interface Props {
  currentStep: StudioStep;
}

const STEP_LABELS = ['Style', 'Configurer', 'Résultats'];

export function StepIndicator({ currentStep }: Props) {
  const active = currentStep === 'editor' ? 3 : (currentStep as number);
  return (
    <div className="flex items-center gap-1.5 mb-5">
      {STEP_LABELS.map((label, i) => {
        const num = i + 1;
        const isActive = active === num;
        const isPast = active > num;
        return (
          <div key={num} className="flex items-center gap-1.5">
            <span
              className={cn(
                'text-[11px] font-bold uppercase tracking-widest',
                isActive ? 'text-[#4F46E5]' : 'text-[#9CA3AF]'
              )}
            >
              {isPast ? `STEP ${num}` : `STEP ${num}: ${label.toUpperCase()}`}
            </span>
            {i < STEP_LABELS.length - 1 && (
              <span className="text-[#E5E7EB] text-[11px] font-light">/</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
