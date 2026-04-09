import { UploadCloud } from 'lucide-react';

export function UploadZone() {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm font-medium text-text-primary px-1">Source Photo</label>
      <div className="panel flex flex-col items-center justify-center py-8 border-dashed border-2 bg-app-sub cursor-pointer hover:bg-white transition-colors duration-150 ease-ease group">
        <div className="w-10 h-10 rounded-pill bg-white flex items-center justify-center border border-border-default mb-3 group-hover:border-accent-primary transition-colors duration-150">
          <UploadCloud className="w-5 h-5 text-accent-primary" />
        </div>
        <p className="text-sm font-medium text-text-primary">Click or drag a photo</p>
        <p className="text-xs text-text-muted mt-1">PNG, JPG up to 10MB</p>
      </div>
    </div>
  );
}
