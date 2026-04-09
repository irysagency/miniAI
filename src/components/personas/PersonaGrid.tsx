import { Plus, Users } from 'lucide-react';
import type { Persona } from '../../types';
import { PersonaCard } from './PersonaCard';

interface Props {
  personas: Persona[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onCreateNew: () => void;
}

export function PersonaGrid({ personas, onDelete, onEdit, onCreateNew }: Props) {
  if (personas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center">
          <Users size={28} className="text-[#4F46E5]" />
        </div>
        <h3 className="text-lg font-semibold text-[#111827]">Aucun persona</h3>
        <p className="text-sm text-[#6B7280]">Crée ton premier persona pour commencer.</p>
        <button
          onClick={onCreateNew}
          className="bg-[#4F46E5] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#4338CA] transition-colors text-sm"
        >
          + Créer un persona
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {/* Nouveau Modèle card */}
      <button
        onClick={onCreateNew}
        className="rounded-2xl border-2 border-dashed border-[#E5E7EB] bg-gray-50/50 p-5 flex flex-col items-center justify-center gap-3 hover:border-[#4F46E5]/40 hover:bg-[#EEF2FF]/30 transition-all min-h-[180px]"
      >
        <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#E5E7EB] flex items-center justify-center">
          <Plus size={20} className="text-[#9CA3AF]" />
        </div>
        <div className="text-center">
          <p className="font-semibold text-sm text-[#111827]">Nouveau Modèle</p>
          <p className="text-xs text-[#9CA3AF] mt-0.5">Entrainez une nouvelle identité</p>
        </div>
      </button>

      {personas.map(p => (
        <PersonaCard key={p.id} persona={p} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
