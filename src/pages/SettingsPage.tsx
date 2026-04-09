import { AccountSection } from '../components/settings/AccountSection';
import { BrandKitSection } from '../components/settings/BrandKitSection';
import { ApiKeysSection } from '../components/settings/ApiKeysSection';

export function SettingsPage() {
  return (
    <div className="px-12 pt-10 pb-24 max-w-[800px]">
      <h1 className="text-4xl font-bold text-[#111827] mb-2 tracking-tight">Paramètres</h1>
      <p className="text-sm text-[#6B7280] mb-8">
        Gère ton compte, ta charte graphique et tes clés API.
      </p>
      <div className="flex flex-col gap-5">
        <AccountSection />
        <BrandKitSection />
        <ApiKeysSection />
      </div>
    </div>
  );
}
