import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeProvider';

export function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="relative z-10 flex w-full items-center justify-between px-6 py-6 sm:px-8">
      <Link
        to="/"
        className="text-lg font-extrabold tracking-wide text-zinc-900 transition-colors dark:text-white"
      >
        KRAMPUS
      </Link>
      <nav className="flex items-center gap-4 sm:gap-6">
        <Link
          to="/dashboard"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
        >
          Dashboard
        </Link>
        <motion.button
          type="button"
          onClick={toggleTheme}
          className="rounded-lg border border-zinc-300 bg-white/80 px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm backdrop-blur transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-800"
          whileTap={{ scale: 0.97 }}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </motion.button>
      </nav>
    </header>
  );
}
