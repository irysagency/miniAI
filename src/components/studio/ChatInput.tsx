import { useState } from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

interface Props {
  onSubmit: (prompt: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSubmit, disabled }: Props) {
  const [value, setValue] = useState('');
  const canSubmit = value.trim().length > 0 && !disabled;

  return (
    <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2.5 shadow-sm w-full max-w-[520px]">
      <Sparkles size={15} className="text-[#4F46E5] shrink-0" />
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && canSubmit) {
            onSubmit(value.trim());
            setValue('');
          }
        }}
        placeholder="Modifier avec l'IA… ex: rends le fond plus sombre"
        className="flex-1 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none bg-transparent"
        disabled={disabled}
      />
      <button
        onClick={() => {
          if (canSubmit) {
            onSubmit(value.trim());
            setValue('');
          }
        }}
        disabled={!canSubmit}
        className="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center hover:bg-[#4338CA] disabled:opacity-30 transition-all shrink-0"
      >
        <ArrowUp size={13} />
      </button>
    </div>
  );
}
