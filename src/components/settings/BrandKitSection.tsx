import { useState, useRef } from 'react';
import { UploadCloud } from 'lucide-react';

const FONTS = ['Inter', 'Roboto', 'Montserrat', 'Playfair Display', 'Space Grotesk', 'Raleway'];

export function BrandKitSection() {
  const [primaryColor, setPrimaryColor] = useState('#4F46E5');
  const [secondaryColor, setSecondaryColor] = useState('#10B981');
  const [font1, setFont1] = useState('Inter');
  const [font2, setFont2] = useState('Roboto');
  const primaryRef = useRef<HTMLInputElement>(null);
  const secondaryRef = useRef<HTMLInputElement>(null);

  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6">
      <h2 className="text-base font-bold text-[#111827] mb-5">Brand Kit</h2>

      <div className="flex flex-col gap-5">
        {/* Colors */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">
              Couleur principale
            </label>
            <button
              onClick={() => primaryRef.current?.click()}
              className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl px-3 py-2 w-full hover:border-[#4F46E5]/40 transition-colors"
            >
              <div
                className="w-5 h-5 rounded-full border border-gray-200 shrink-0"
                style={{ backgroundColor: primaryColor }}
              />
              <span className="text-sm font-mono text-[#6B7280]">{primaryColor}</span>
              <input
                ref={primaryRef}
                type="color"
                value={primaryColor}
                onChange={e => setPrimaryColor(e.target.value)}
                className="sr-only"
              />
            </button>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">
              Couleur secondaire
            </label>
            <button
              onClick={() => secondaryRef.current?.click()}
              className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl px-3 py-2 w-full hover:border-[#4F46E5]/40 transition-colors"
            >
              <div
                className="w-5 h-5 rounded-full border border-gray-200 shrink-0"
                style={{ backgroundColor: secondaryColor }}
              />
              <span className="text-sm font-mono text-[#6B7280]">{secondaryColor}</span>
              <input
                ref={secondaryRef}
                type="color"
                value={secondaryColor}
                onChange={e => setSecondaryColor(e.target.value)}
                className="sr-only"
              />
            </button>
          </div>
        </div>

        {/* Fonts */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">
              Police principale
            </label>
            <select
              value={font1}
              onChange={e => setFont1(e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2 text-sm text-[#111827] focus:outline-none focus:border-[#4F46E5]"
            >
              {FONTS.map(f => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">
              Police secondaire
            </label>
            <select
              value={font2}
              onChange={e => setFont2(e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2 text-sm text-[#111827] focus:outline-none focus:border-[#4F46E5]"
            >
              {FONTS.map(f => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Logo upload */}
        <div>
          <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">Logo</label>
          <div className="border-2 border-dashed border-[#E5E7EB] rounded-2xl p-6 flex flex-col items-center gap-2 hover:border-[#4F46E5]/40 cursor-pointer transition-colors">
            <UploadCloud size={22} className="text-[#9CA3AF]" />
            <span className="text-sm text-[#6B7280]">Glisse ton logo ici</span>
            <span className="text-xs text-[#9CA3AF]">PNG, SVG jusqu'à 2MB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
