import { cn } from '../lib/utils';
import { Plus, LayoutGrid, Users, History, HelpCircle, LogOut, Bot } from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-5 py-3 rounded-pill cursor-pointer font-medium text-[15px] transition-colors",
        active 
          ? "bg-primary-light text-primary" 
          : "text-text-gray hover:bg-white hover:text-text-dark"
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </div>
  );
}

interface SidebarProps {
  activeTab: 'studio' | 'personas' | 'history';
  onTabChange: (tab: 'studio' | 'personas' | 'history') => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="w-[260px] h-screen bg-bg-sidebar border-r border-border-default flex flex-col py-8 px-6 flex-shrink-0">
      
      {/* Logo & Version */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl text-text-dark leading-none">MiniAI Pro</span>
          <span className="text-[10px] text-text-muted mt-1 font-medium tracking-wider">V 1.2.0</span>
        </div>
      </div>

      {/* Main CTA */}
      <button className="w-full bg-primary text-white rounded-pill py-3 px-4 flex items-center justify-center gap-2 font-medium text-sm hover:bg-indigo-700 transition-colors mb-10">
        <Plus className="w-4 h-4" />
        Create New
      </button>

      {/* Nav Section */}
      <span className="text-[11px] font-bold text-text-muted tracking-wider uppercase mb-3 px-2">
        Workspace
      </span>
      <nav className="flex-col flex gap-1">
        <NavItem 
          icon={LayoutGrid} 
          label="Studio" 
          active={activeTab === 'studio'} 
          onClick={() => onTabChange('studio')}
        />
        <NavItem 
          icon={Users} 
          label="Personas" 
          active={activeTab === 'personas'} 
          onClick={() => onTabChange('personas')}
        />
        <NavItem 
          icon={History} 
          label="Historique" 
          active={activeTab === 'history'} 
          onClick={() => onTabChange('history')}
        />
      </nav>

      {/* Bottom Footer */}
      <div className="mt-auto flex flex-col gap-1">
        <NavItem icon={HelpCircle} label="Help" onClick={() => {}} />
        <NavItem icon={LogOut} label="Logout" onClick={() => {}} />
      </div>
    </aside>
  );
}
