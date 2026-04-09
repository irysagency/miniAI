import { Plus, UserPlus, Image as ImageIcon, Edit2, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface PersonaData {
  id: string;
  name: string;
  tag: string;
  photos: number;
  avatar: string;
}

const mockPersonas: PersonaData[] = [
  { id: '1', name: 'Léa - High Energy', tag: 'PROT', photos: 12, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  { id: '2', name: 'Thomas - Tech Review', tag: 'PROT', photos: 18, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: '3', name: 'Sarah - Lifestyle', tag: 'PROT', photos: 25, avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d' },
  { id: '4', name: 'Marc - CEO Style', tag: 'PROT', photos: 15, avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d' },
  { id: '5', name: 'Julie - Fashion', tag: 'PROT', photos: 20, avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026704d' },
];

export function PersonasScreen() {
  return (
    <div className="w-full h-full flex flex-col pt-[72px] pb-24 px-16 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-12">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-text-dark mb-2 tracking-tight">Mes Personas</h1>
          <p className="text-base text-text-gray">Gérez vos modèles d'IA entraînés pour des générations cohérentes.</p>
        </div>
        <button className="bg-primary text-white px-5 py-3 rounded-pill font-medium text-sm flex items-center gap-2 hover:bg-indigo-700 transition-colors">
          <UserPlus className="w-4 h-4" />
          Ajouter un profil
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Nouveau Modèle Card */}
        <div className="flex flex-col items-center justify-center p-8 rounded-card-lg border-2 border-dashed border-border-default hover:border-text-muted transition-colors cursor-pointer min-h-[220px]">
          <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <Plus className="w-6 h-6 text-text-muted" />
          </div>
          <h3 className="text-base font-bold text-text-dark mb-1">Nouveau Modèle</h3>
          <p className="text-[13px] text-text-gray text-center px-4">Entraînez une nouvelle identité</p>
        </div>

        {/* Existing Personas */}
        {mockPersonas.map((persona) => (
          <div key={persona.id} className="relative bg-white rounded-card-lg border border-border-default p-8 flex flex-col min-h-[220px] transition-all hover:border-border-primary hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            
            {/* Action Icons */}
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <button className="text-text-muted hover:text-text-dark transition-colors">
                <Edit2 className="w-[14px] h-[14px]" />
              </button>
              <button className="text-text-muted hover:text-red-500 transition-colors">
                <Trash2 className="w-[14px] h-[14px]" />
              </button>
            </div>

            {/* Avatar */}
            <div 
              className="w-[84px] h-[84px] rounded-full bg-cover bg-center mb-5 shrink-0"
              style={{ backgroundImage: `url(${persona.avatar})` }}
            />

            {/* Details */}
            <div className="flex flex-col gap-1.5 mb-auto">
              <h3 className="font-bold text-lg text-text-dark">{persona.name}</h3>
              <div className="flex items-center gap-2">
                <div className="w-[6px] h-[6px] rounded-full bg-primary" />
                <span className="text-[11px] font-bold text-primary tracking-widest">{persona.tag}</span>
              </div>
            </div>

            {/* Bottom Actions/Info */}
            <div className="flex items-center gap-2 text-text-gray mt-6">
              <ImageIcon className="w-4 h-4 text-text-muted" />
              <span className="text-[13px] font-medium uppercase tracking-wide">{persona.photos} PHOTOS</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
