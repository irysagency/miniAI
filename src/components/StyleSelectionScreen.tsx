import { CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { newStyles } from '../data/styles';

export function StyleSelectionScreen() {
  const activeStyleId = 'vlog';

  return (
    <div className="w-full h-full flex flex-col pt-12 pb-24 px-16 max-w-[1280px] mx-auto">
      {/* Breadcrumb Eyebrow */}
      <h4 className="text-[12px] font-bold tracking-wider uppercase text-text-muted mb-4 z-10 flex items-center gap-2">
        STEP 2 
        <span className="text-border-default font-normal flex items-center justify-center"> › </span>
        <span className="text-primary">STEP 3: STYLE SELECTION</span>
      </h4>

      {/* Main Title */}
      <h1 className="text-3xl font-bold text-text-dark mb-2 tracking-tight">Choose your visual direction</h1>
      <p className="text-base text-text-gray mb-10">Select a style template to apply to your project assets.</p>

      {/* Styles Grid */}
      <div className="grid grid-cols-4 gap-6">
        {newStyles.map((style) => {
          const isSelected = activeStyleId === style.id;
          return (
            <div
              key={style.id}
              className={cn(
                "group relative bg-white rounded-card-sm overflow-hidden border cursor-pointer select-none transition-all duration-150 ease-out",
                isSelected 
                  ? "border-primary border-2 shadow-[0_4px_12px_rgba(79,70,229,0.1)]" 
                  : "border-border-default hover:border-text-muted hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              )}
            >
              <div 
                className={cn(
                  "w-full aspect-[16/10] bg-cover bg-center rounded-t-[10px]", 
                  isSelected ? "rounded-t-[8px] m-[2px] w-[calc(100%-4px)] aspect-[16/10.2]" : ""
                )}
                style={{ background: style.thumbnail }}
              />
              
              {isSelected && (
                <div className="absolute top-3 right-3 bg-white rounded-full p-[2px] flex items-center justify-center">
                   <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center">
                     <CheckCircle2 className="w-4 h-4 text-white" />
                   </div>
                </div>
              )}

              <div className="p-4 flex flex-col gap-1">
                <h3 className="font-bold text-base text-text-dark">{style.name}</h3>
                <p className="text-sm font-normal text-text-gray line-clamp-1">{style.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
