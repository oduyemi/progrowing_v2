"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Soon = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950 px-6">
      
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-purple-600/20 blur-[140px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-xl text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 ring-1 ring-yellow-500/20"
        >
          <Sparkles className="h-6 w-6 text-yellow-400" />
        </motion.div>

        {/* Heading */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-semibold
            tracking-tight
            bg-gradient-to-r
            from-yellow-400
            via-yellow-300
            to-yellow-500
            bg-clip-text
            text-transparent
          "
        >
          Coming Soon
        </h1>

        {/* Subtext */}
        <p
          className="
            mt-6
            text-base
            sm:text-lg
            text-neutral-400
            leading-relaxed
          "
        >
          We’re crafting something powerful to help you stay focused,
          organized, and productive.  
          <span className="block mt-2 text-neutral-500">
            It’s worth the wait.
          </span>
        </p>

        {/* Subtle pulse indicator */}
        <div className="mt-10 flex justify-center">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-400" />
          </span>
        </div>
      </motion.div>
    </section>
  );
};
