import { Download, RefreshCcw } from 'lucide-react';
import type { HistoryItem } from '../../types';

interface Props {
  item: HistoryItem;
  onDownload: (id: string) => void;
  onRecreate: (id: string) => void;
}

export function HistoryCard({ item, onDownload, onRecreate }: Props) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-full aspect-video" style={{ background: item.thumbnailUrl }} />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
        <button
          onClick={() => onDownload(item.id)}
          className="flex items-center gap-1.5 bg-white text-[#111827] px-3 py-2 rounded-full text-xs font-semibold hover:bg-[#4F46E5] hover:text-white transition-colors"
        >
          <Download size={12} /> Télécharger
        </button>
        <button
          onClick={() => onRecreate(item.id)}
          className="flex items-center gap-1.5 bg-white text-[#111827] px-3 py-2 rounded-full text-xs font-semibold hover:bg-[#4F46E5] hover:text-white transition-colors"
        >
          <RefreshCcw size={12} /> Recréer
        </button>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-semibold text-sm text-[#111827] truncate">{item.title}</h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-[#9CA3AF]">{item.styleName}</span>
          <span className="text-xs text-[#9CA3AF]">
            {new Date(item.createdAt).toLocaleDateString('fr-FR')}
          </span>
        </div>
      </div>
    </div>
  );
}
