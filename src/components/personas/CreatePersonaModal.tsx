import { useState } from 'react';
import { X, UploadCloud } from 'lucide-react';

interface Props {
  onClose: () => void;
  onCreate: (name: string) => void;
}

export function CreatePersonaModal({ onClose, onCreate }: Props) {
  const [name, setName] = useState('');

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-full max-w-md mx-4 p-7 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-[#111827]">Créer un persona</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-gray-50 text-[#9CA3AF]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drop zone */}
        <div className="border-2 border-dashed border-[#E5E7EB] rounded-2xl p-8 flex flex-col items-center gap-2.5 mb-5 hover:border-[#4F46E5]/40 cursor-pointer transition-colors">
          <UploadCloud size={28} className="text-[#9CA3AF]" />
          <span className="text-sm font-medium text-[#6B7280]">Glisse 5–10 photos ici</span>
          <span className="text-xs text-[#9CA3AF]">PNG, JPG jusqu'à 10MB</span>
        </div>

        {/* Name input */}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nom du persona (ex: Léa - High Energy)"
          className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 mb-5"
        />

        <button
          onClick={() => {
            if (name.trim()) {
              onCreate(name.trim());
              onClose();
            }
          }}
          disabled={!name.trim()}
          className="w-full bg-[#4F46E5] text-white font-semibold py-3 rounded-full hover:bg-[#4338CA] disabled:opacity-40 transition-colors"
        >
          Créer
        </button>
      </div>
    </div>
  );
}
