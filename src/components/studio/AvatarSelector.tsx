import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { Persona } from '../../types';

interface Props {
  personas: Persona[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onCreateNew: () => void;
}

export function AvatarSelector({ personas, selectedId, onSelect, onCreateNew }: Props) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#111827] mb-3">Ton persona</h3>
      <div className="flex items-center gap-3 flex-wrap">
        {personas.map(p => (
          <button key={p.id} onClick={() => onSelect(p.id)} className="flex flex-col items-center gap-1.5">
            <div
              className={cn(
                'w-14 h-14 rounded-full overflow-hidden border-2 transition-all',
                selectedId === p.id
                  ? 'border-[#4F46E5] shadow-[0_0_0_3px_rgba(79,70,229,0.15)]'
                  : 'border-transparent hover:border-[#4F46E5]/40'
              )}
            >
              <img src={p.avatarUrl} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <span
              className={cn(
                'text-[11px] font-medium max-w-[56px] truncate',
                selectedId === p.id ? 'text-[#4F46E5]' : 'text-[#6B7280]'
              )}
            >
              {p.name.split(' - ')[0]}
            </span>
          </button>
        ))}

        {/* Create new */}
        <button onClick={onCreateNew} className="flex flex-col items-center gap-1.5">
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#E5E7EB] flex items-center justify-center hover:border-[#4F46E5]/40 transition-colors">
            <Plus size={18} className="text-[#9CA3AF]" />
          </div>
          <span className="text-[11px] text-[#9CA3AF]">Nouveau</span>
        </button>
      </div>
    </div>
  );
}
