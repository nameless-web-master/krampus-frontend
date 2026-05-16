import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cards = [
  { title: 'Scripts', value: '12', hint: 'Active projects' },
  { title: 'Community', value: '2.4k', hint: 'Members' },
  { title: 'Uptime', value: '99.9%', hint: 'Last 30 days' },
];

export function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col px-6 pb-16 pt-2 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        className="mx-auto w-full max-w-4xl"
      >
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Overview</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-2 max-w-xl text-zinc-600 dark:text-zinc-400">
          Welcome back. Here is a quick snapshot — wire this page to your backend when
          you are ready.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08 * i,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {c.title}
              </p>
              <p className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-white">
                {c.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">{c.hint}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-10"
        >
          <Link
            to="/"
            className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white"
          >
            ← Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
