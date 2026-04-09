import { Pencil, Trash2, Image } from 'lucide-react';
import type { Persona } from '../../types';

interface Props {
  persona: Persona;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export function PersonaCard({ persona, onDelete, onEdit }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3 relative hover:shadow-md transition-shadow">
      {/* Edit + Delete — always visible */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <button
          onClick={() => onEdit(persona.id)}
          className="p-1 text-[#9CA3AF] hover:text-[#4F46E5] transition-colors"
        >
          <Pencil size={14} />
        </button>
        <button
          onClick={() => onDelete(persona.id)}
          className="p-1 text-[#9CA3AF] hover:text-red-500 transition-colors"
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Avatar — rounded-2xl square */}
      <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
        <img src={persona.avatarUrl} alt={persona.name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <div>
        <h3 className="font-semibold text-[15px] text-[#111827] pr-14 leading-snug">
          {persona.name}
        </h3>
        {/* PROT badge */}
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#065F46]">
            PROT
          </span>
        </div>
      </div>

      {/* Photo count */}
      <div className="flex items-center gap-1.5 mt-auto">
        <Image size={12} className="text-[#9CA3AF]" />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
          {persona.photoCount} photos
        </span>
      </div>
    </div>
  );
}
