interface FormInputsProps {
  title: string;
  subtitle: string;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export function FormInputs({ title, subtitle, onTitleChange, onSubtitleChange }: FormInputsProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-text-primary px-1">Video Title</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="e.g. My $100M SaaS Journey"
          className="input-field"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-text-primary px-1">Subtitle (Optional)</label>
        <input 
          type="text" 
          value={subtitle}
          onChange={(e) => onSubtitleChange(e.target.value)}
          placeholder="e.g. Year 1 Recap"
          className="input-field"
        />
      </div>
    </div>
  );
}
