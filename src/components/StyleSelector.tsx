import { cn } from '../lib/utils';
import { predefinedStyles } from '../data/styles';

interface StyleSelectorProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function StyleSelector({ selectedId, onSelect }: StyleSelectorProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm font-medium text-text-primary px-1">Visual Style</label>
      <div className="grid grid-cols-3 gap-3">
        {predefinedStyles.map((style) => {
          const isSelected = selectedId === style.id;
          return (
            <div
              key={style.id}
              onClick={() => onSelect(style.id)}
              className={cn(
                "group relative rounded-card overflow-hidden cursor-pointer border p-1 transition-all duration-150 ease-ease",
                isSelected 
                  ? "border-accent-primary bg-accent-light" 
                  : "border-border-default hover:border-border-subtle hover:bg-app-sub"
              )}
            >
              <div 
                className="w-full aspect-video rounded-[8px] bg-cover bg-center"
                style={{ background: style.thumbnail }}
              />
              <div className="pt-2 pb-1 px-1">
                <p className={cn(
                  "text-xs truncate font-medium transition-colors duration-150", 
                  isSelected ? "text-accent-primary" : "text-text-primary"
                )}>
                  {style.name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
