import { cn } from '../../lib/utils';
import { newStyles } from '../../data/styles';

interface Props {
  selectedStyle: string;
  onStyleChange: (id: string) => void;
}

export function HistoryFilters({ selectedStyle, onStyleChange }: Props) {
  return (
    <div className="flex items-center gap-2 mb-6 flex-wrap">
      <button
        onClick={() => onStyleChange('')}
        className={cn(
          'px-4 py-1.5 rounded-full text-xs font-semibold border transition-all',
          selectedStyle === ''
            ? 'bg-[#4F46E5] text-white border-[#4F46E5]'
            : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#4F46E5]/40'
        )}
      >
        Tous
      </button>
      {newStyles.map(s => (
        <button
          key={s.id}
          onClick={() => onStyleChange(s.id)}
          className={cn(
            'px-4 py-1.5 rounded-full text-xs font-semibold border transition-all',
            selectedStyle === s.id
              ? 'bg-[#4F46E5] text-white border-[#4F46E5]'
              : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#4F46E5]/40'
          )}
        >
          {s.name}
        </button>
      ))}
    </div>
  );
}
