'use client'

import { motion } from 'framer-motion'

export function ScrollIndicator({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <motion.span
        className="text-xs tracking-widest text-kinnezu/60 font-en-serif"
        style={{ fontFamily: 'var(--font-en)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        SCROLL
      </motion.span>
      <motion.div
        className="w-px h-12 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
      >
        <motion.div
          className="w-full h-full bg-kinnezu/40"
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      </motion.div>
    </div>
  )
}
