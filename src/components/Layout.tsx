import { useState } from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'studio' | 'personas' | 'history';
  onTabChange: (tab: 'studio' | 'personas' | 'history') => void;
}

export function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  return (
    <div className="flex w-full h-screen bg-bg-main overflow-hidden font-sans text-text-dark">
      <Sidebar activeTab={activeTab} onTabChange={onTabChange} />
      <main className="flex-1 h-full overflow-y-auto w-full relative pt-12 pb-24 px-16">
        {children}
      </main>
    </div>
  );
}
