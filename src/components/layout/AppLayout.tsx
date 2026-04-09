import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <main className="ml-[215px] flex-1 min-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
