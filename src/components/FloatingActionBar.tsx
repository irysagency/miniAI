import { Download, Edit2, RefreshCcw, Smile, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface FloatingActionBarProps {
  onRegenerate: () => void;
  isGenerating: boolean;
}

export function FloatingActionBar({ onRegenerate, isGenerating }: FloatingActionBarProps) {
  return (
    <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-pill border border-border-default z-20">
      <button 
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-pill font-medium text-sm transition-all duration-150 ease-ease",
          isGenerating 
            ? "bg-accent-light text-accent-primary cursor-not-allowed opacity-70" 
            : "bg-accent-primary text-white hover:bg-accent-hover"
        )}
        onClick={onRegenerate}
        disabled={isGenerating}
      >
        <RefreshCcw className={cn("w-4 h-4", isGenerating && "animate-spin")} />
        {isGenerating ? 'Generating...' : 'Regenerate'}
      </button>

      <div className="w-px h-6 bg-border-default mx-1" />

      <button className="btn-icon" aria-label="Edit">
        <Edit2 className="w-4 h-4" />
      </button>
      <button className="btn-icon" aria-label="Change Expression">
        <Smile className="w-4 h-4" />
      </button>
      
      <div className="w-px h-6 bg-border-default mx-1" />

      <button className="btn-icon" aria-label="Share">
        <Share2 className="w-4 h-4" />
      </button>
      <button className="flex items-center gap-2 pr-4 pl-3 py-2 rounded-pill text-text-primary hover:bg-app-sub transition-colors duration-150 ease-ease text-sm font-medium">
        <Download className="w-4 h-4" />
        Export
      </button>
    </div>
  );
}
