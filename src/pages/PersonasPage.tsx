import { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { mockPersonas } from '../data/mockPersonas';
import type { Persona } from '../types';
import { PersonaGrid } from '../components/personas/PersonaGrid';
import { CreatePersonaModal } from '../components/personas/CreatePersonaModal';

export function PersonasPage() {
  const [personas, setPersonas] = useState<Persona[]>(mockPersonas);
  const [showModal, setShowModal] = useState(false);

  function handleDelete(id: string) {
    setPersonas(prev => prev.filter(p => p.id !== id));
  }

  function handleCreate(name: string) {
    const newPersona: Persona = {
      id: `p${Date.now()}`,
      name,
      avatarUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      photoCount: 0,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    setPersonas(prev => [...prev, newPersona]);
  }

  return (
    <div className="px-12 pt-10 pb-24">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#111827] tracking-tight">Mes Personas</h1>
          <p className="text-sm text-[#6B7280] mt-1.5">
            Gérez vos modèles d'IA entraînés pour des générations cohérentes.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#4F46E5] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#4338CA] transition-colors text-sm shrink-0"
        >
          <UserPlus size={16} />
          Ajouter un profil
        </button>
      </div>

      <PersonaGrid
        personas={personas}
        onDelete={handleDelete}
        onEdit={_id => {
          /* TODO: edit modal */
        }}
        onCreateNew={() => setShowModal(true)}
      />

      {showModal && (
        <CreatePersonaModal onClose={() => setShowModal(false)} onCreate={handleCreate} />
      )}
    </div>
  );
}
