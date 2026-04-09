import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockHistory } from '../data/mockHistory';
import type { HistoryItem } from '../types';
import { HistoryFilters } from '../components/history/HistoryFilters';
import { HistoryGrid } from '../components/history/HistoryGrid';

export function HistoryPage() {
  const navigate = useNavigate();
  const [items] = useState<HistoryItem[]>(mockHistory);
  const [selectedStyle, setSelectedStyle] = useState('');

  const filtered = selectedStyle ? items.filter(i => i.styleId === selectedStyle) : items;

  return (
    <div className="px-12 pt-10 pb-24">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold text-[#111827] tracking-tight">Historique</h1>
          <p className="text-sm text-[#6B7280] mt-1.5">{items.length} miniatures générées</p>
        </div>
      </div>

      <HistoryFilters selectedStyle={selectedStyle} onStyleChange={setSelectedStyle} />

      <HistoryGrid
        items={filtered}
        onDownload={_id => {
          /* TODO: download */
        }}
        onRecreate={_id => navigate('/studio')}
        onCreateFirst={() => navigate('/studio')}
      />
    </div>
  );
}
