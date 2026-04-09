import { History } from 'lucide-react';
import type { HistoryItem } from '../../types';
import { HistoryCard } from './HistoryCard';

interface Props {
  items: HistoryItem[];
  onDownload: (id: string) => void;
  onRecreate: (id: string) => void;
  onCreateFirst: () => void;
}

export function HistoryGrid({ items, onDownload, onRecreate, onCreateFirst }: Props) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center">
          <History size={28} className="text-[#4F46E5]" />
        </div>
        <h3 className="text-lg font-semibold text-[#111827]">Aucune miniature</h3>
        <p className="text-sm text-[#6B7280]">Crée ta première miniature pour la voir ici.</p>
        <button
          onClick={onCreateFirst}
          className="bg-[#4F46E5] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#4338CA] transition-colors text-sm"
        >
          Créer ma première miniature
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {items.map(item => (
        <HistoryCard
          key={item.id}
          item={item}
          onDownload={onDownload}
          onRecreate={onRecreate}
        />
      ))}
    </div>
  );
}
