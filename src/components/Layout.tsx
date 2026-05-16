import type { ReactNode } from 'react';
import { NavBar } from './NavBar';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-zinc-100">
      <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col">
        <NavBar />
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
