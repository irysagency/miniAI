import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function AIChatInput() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md bg-white p-2 rounded-pill border border-border-default flex items-center shadow-[0px_4px_24px_rgba(15,15,20,0.04)] z-20 transition-all duration-150">
      <div className="pl-3 pr-2 flex items-center justify-center">
        <Sparkles className="w-5 h-5 text-accent-primary" />
      </div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Make the background darker..."
        className="flex-1 bg-transparent border-none outline-none text-sm text-text-primary placeholder:text-text-muted px-2"
      />
      <button 
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150",
          prompt.length > 0 ? "bg-accent-primary text-white" : "bg-app-sub text-text-muted cursor-default"
        )}
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
