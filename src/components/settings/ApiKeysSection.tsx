import { CheckCircle2, XCircle } from 'lucide-react';

export function ApiKeysSection() {
  const geminiKey = import.meta.env.VITE_GEMINI_KEY as string | undefined;
  const falKey = import.meta.env.VITE_FAL_KEY as string | undefined;

  const apis = [
    {
      name: 'Gemini API (Google)',
      desc: 'Génération de prompts IA',
      connected: Boolean(geminiKey),
    },
    {
      name: 'fal.ai (Flux Kontext)',
      desc: "Génération d'images",
      connected: Boolean(falKey),
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6">
      <h2 className="text-base font-bold text-[#111827] mb-5">Clés API</h2>

      <div className="flex flex-col mb-5">
        {apis.map(api => (
          <div
            key={api.name}
            className="flex items-center justify-between py-4 border-b border-[#E5E7EB] last:border-0"
          >
            <div>
              <p className="font-semibold text-sm text-[#111827]">{api.name}</p>
              <p className="text-xs text-[#9CA3AF] mt-0.5">{api.desc}</p>
            </div>
            {api.connected ? (
              <div className="flex items-center gap-1.5 text-[#10B981] text-sm font-medium">
                <CheckCircle2 size={16} /> Connecté
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-red-400 text-sm font-medium">
                <XCircle size={16} /> Non configuré
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <p className="text-xs font-semibold text-[#111827] mb-2">Comment configurer</p>
        <p className="text-xs text-[#6B7280] leading-relaxed mb-2">
          Ajoute tes clés dans le fichier{' '}
          <code className="bg-[#E5E7EB] px-1 py-0.5 rounded text-xs">.env</code> à la racine du
          projet :
        </p>
        <pre className="bg-[#111827] text-white text-xs rounded-xl p-3 overflow-x-auto">
          {`VITE_GEMINI_KEY=your_gemini_key\nVITE_FAL_KEY=your_fal_key`}
        </pre>
      </div>
    </section>
  );
}
