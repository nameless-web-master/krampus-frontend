import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function LandingPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-4 sm:px-8">
      <motion.div
        className="flex w-full max-w-5xl flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <a
            href="https://gitbook.com"
            target="_blank"
            rel="noreferrer"
            className="doc-pill-shimmer group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-zinc-300 bg-zinc-100/80 px-4 py-1.5 text-xs font-normal text-zinc-600 transition-colors hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:border-zinc-500"
          >
            <span className="relative z-10">
              Our documentation{' '}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Gitbook
              </span>
            </span>
            <span className="relative z-10 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 w-full text-6xl font-extrabold tracking-wider text-zinc-900 sm:text-7xl md:text-8xl md:tracking-widest"
        >
          {/* Inner span: bg-clip-text often clips the last glyph on the outer box; padding + inline-block fixes it */}
          <span className="inline-block max-w-full px-1 text-zinc-900 sm:px-2 dark:bg-gradient-to-b dark:from-white dark:via-zinc-100 dark:to-zinc-500 dark:bg-clip-text dark:px-2 dark:text-transparent">
            KRAMPUS.GG
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 w-full max-w-none text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-500"
        >
          Krampus is a community-driven organization that aims to provide the best
          scripting experience.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#"
            className="inline-flex min-w-[13rem] items-center justify-center rounded-lg border border-zinc-900 bg-transparent px-10 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-400/80 dark:text-white dark:hover:bg-zinc-200 dark:hover:text-zinc-900"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Purchase
          </motion.a>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/dashboard"
              className="inline-flex min-w-[13rem] items-center justify-center rounded-lg bg-zinc-900 px-10 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition-colors hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              Join →
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
