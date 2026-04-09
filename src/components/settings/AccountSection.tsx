export function AccountSection() {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6">
      <h2 className="text-base font-bold text-[#111827] mb-5">Compte</h2>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100">
          <img src="https://i.pravatar.cc/64?img=1" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-[#111827]">Jean Dupont</p>
          <p className="text-sm text-[#9CA3AF]">jean@example.com</p>
          <span className="inline-block mt-1.5 bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
            Plan Free
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">Nom</label>
          <input
            defaultValue="Jean Dupont"
            className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2 text-sm text-[#111827] focus:outline-none focus:border-[#4F46E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#6B7280] mb-1.5">Email</label>
          <input
            defaultValue="jean@example.com"
            className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2 text-sm text-[#111827] focus:outline-none focus:border-[#4F46E5]"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-[#E5E7EB]">
        <p className="text-sm text-[#6B7280]">
          Crédits utilisés ce mois :{' '}
          <span className="font-semibold text-[#111827]">52 / 100</span>
        </p>
        <div className="w-full bg-[#E5E7EB] rounded-full h-1.5 mt-2">
          <div className="bg-[#4F46E5] h-1.5 rounded-full" style={{ width: '52%' }} />
        </div>
      </div>
    </section>
  );
}
