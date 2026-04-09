import { Home, PlusSquare, Users, Image as ImageIcon, History, Settings } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

function NavItem({ icon: Icon, label, active }: NavItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-card cursor-pointer transition-colors duration-150 ease-ease",
        active 
          ? "bg-accent-light text-accent-primary font-medium" 
          : "text-text-secondary hover:bg-white hover:text-text-primary"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm">{label}</span>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-app-sub border-r border-border-default flex flex-col pt-6 pb-6 px-4">
      <div className="flex items-center gap-2 px-4 mb-10">
        <div className="w-8 h-8 rounded-card bg-accent-primary flex items-center justify-center">
          <ImageIcon className="w-4 h-4 text-white" />
        </div>
        <span className="font-semibold text-lg text-text-primary tracking-tight">MiniAI</span>
      </div>

      <nav className="flex-1 space-y-1">
        <NavItem icon={Home} label="Home" />
        <NavItem icon={PlusSquare} label="New Thumbnail" active />
        <NavItem icon={Users} label="Personas" />
        <NavItem icon={ImageIcon} label="Styles" />
        <NavItem icon={History} label="History" />
      </nav>

      <div className="mt-auto">
        <NavItem icon={Settings} label="Settings" />
      </div>
    </aside>
  );
}
