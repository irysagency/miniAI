import { NavLink } from 'react-router-dom';
import { LayoutGrid, Users, History, HelpCircle, LogOut, Plus, Bot } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors w-full',
          isActive
            ? 'bg-[#EEF2FF] text-[#4F46E5]'
            : 'text-[#6B7280] hover:bg-gray-50 hover:text-[#111827]'
        )
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[215px] bg-white border-r border-[#E5E7EB] flex flex-col py-5 px-4 z-40">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-5 px-1">
        <div className="w-9 h-9 rounded-xl bg-[#4F46E5] flex items-center justify-center shrink-0">
          <Bot size={18} className="text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-[15px] text-[#111827]">MiniAI Pro</span>
          <span className="text-[11px] text-[#9CA3AF]">V1.2.0</span>
        </div>
      </div>

      {/* Create New button */}
      <button className="flex items-center justify-center gap-2 bg-[#4F46E5] text-white text-sm font-semibold rounded-full py-2.5 px-4 w-full hover:bg-[#4338CA] transition-colors mb-5">
        <Plus size={16} />
        Create New
      </button>

      {/* Workspace section */}
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9CA3AF] px-1 mb-2">
        Workspace
      </p>
      <nav className="flex flex-col gap-0.5">
        <NavItem to="/studio" icon={<LayoutGrid size={17} />} label="Studio" />
        <NavItem to="/personas" icon={<Users size={17} />} label="Personas" />
        <NavItem to="/history" icon={<History size={17} />} label="Historique" />
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom actions */}
      <div className="flex flex-col gap-0.5">
        <button className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#6B7280] hover:bg-gray-50 hover:text-[#111827] transition-colors w-full">
          <HelpCircle size={17} />
          <span>Help</span>
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-[#6B7280] hover:bg-gray-50 hover:text-[#111827] transition-colors w-full">
          <LogOut size={17} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
