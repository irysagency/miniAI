import { cn } from '../lib/utils';
import type { GeneratorState } from '../types';

interface PreviewCanvasProps {
  state: GeneratorState;
  onVariantSelect: (id: string) => void;
}

export function PreviewCanvas({ state, onVariantSelect }: PreviewCanvasProps) {
  const activeVariant = state.variants.find(v => v.selected) || state.variants[0];

  return (
    <div className="relative w-full h-full bg-app-canvas flex flex-col p-8 items-center justify-center">
      
      {/* Main Preview */}
      <div className="relative w-full max-w-4xl aspect-video rounded-[16px] overflow-hidden border border-border-default bg-white flex items-center justify-center transition-all duration-300">
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{ background: activeVariant.url }}
        />
        
        {state.isGenerating ? (
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="w-10 h-10 border-4 border-accent-light border-t-accent-primary rounded-full animate-spin" />
          </div>
        ) : (
          <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2 z-10 drop-shadow-md">
             <h1 className="text-4xl font-extrabold text-white tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
               {state.title || 'Start Typing Title...'}
             </h1>
             {state.subtitle && (
               <p className="text-xl font-medium text-white/90" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                 {state.subtitle}
               </p>
             )}
          </div>
        )}
      </div>

      {/* Grid of Variants */}
      <div className="absolute bottom-28 right-8 flex gap-3">
        {state.variants.map((v) => (
          <button
            key={v.id}
            onClick={() => onVariantSelect(v.id)}
            className={cn(
              "w-24 aspect-video rounded-card overflow-hidden border-2 transition-all duration-150 ease-ease relative group outline-none",
              v.selected ? "border-accent-primary scale-105" : "border-border-default hover:border-border-subtle hover:scale-105 opacity-80 hover:opacity-100"
            )}
            style={{ background: v.url }}
          >
             {state.isGenerating && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
             )}
          </button>
        ))}
      </div>

    </div>
  );
}
