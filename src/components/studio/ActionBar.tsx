import { Download, RefreshCcw, Pencil, Smile, Share2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Props {
  onDownload: () => void;
  onRegenerate: () => void;
  onEdit: () => void;
  onExpression: () => void;
  onShare: () => void;
  isGenerating: boolean;
}

export function ActionBar({
  onDownload,
  onRegenerate,
  onEdit,
  onExpression,
  onShare,
  isGenerating,
}: Props) {
  const actions = [
    { icon: <Download size={15} />, label: 'Télécharger', onClick: onDownload, primary: true },
    { icon: <RefreshCcw size={15} />, label: 'Régénérer', onClick: onRegenerate, primary: false },
    { icon: <Pencil size={15} />, label: 'Éditer', onClick: onEdit, primary: false },
    { icon: <Smile size={15} />, label: 'Expression', onClick: onExpression, primary: false },
    { icon: <Share2 size={15} />, label: 'Partager', onClick: onShare, primary: false },
  ];

  return (
    <div className="flex items-center gap-0.5 bg-white border border-[#E5E7EB] rounded-full px-2 py-1.5 shadow-sm">
      {actions.map((a, i) => (
        <button
          key={i}
          onClick={a.onClick}
          disabled={isGenerating}
          title={a.label}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all disabled:opacity-40',
            a.primary
              ? 'text-[#4F46E5] hover:bg-[#EEF2FF]'
              : 'text-[#6B7280] hover:bg-gray-50 hover:text-[#111827]'
          )}
        >
          {a.icon}
          <span>{a.label}</span>
        </button>
      ))}
    </div>
  );
}
