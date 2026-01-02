'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);

  /* Subtle scroll parallax (1–2%) */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = reduceMotion
    ? 0
    : useTransform(scrollYProgress, [0, 1], [0, -24]);

  const fadeUp = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 36 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion
      ? { duration: 0 }
      : { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section
      ref={containerRef}
      className="
        relative min-h-[100svh] overflow-hidden
        bg-gradient-to-b from-white via-white to-gray-50/60
      "
    >
      {/* Ultra-light noise texture */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          opacity-[0.02]
          bg-[url('/images/noise.png')]
        "
      />

      <div
        className="
          relative max-w-7xl mx-auto
          px-6 lg:px-8 pt-28
          grid lg:grid-cols-2 gap-10 items-start
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          {...fadeUp}
          className="text-left sm:text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05] lg:mt-10">
            Find a{' '}
            <span className="relative inline-block">
              <span
                className="
                  italic font-serif font-medium
                  bg-gradient-to-r
                  from-yellow-500 via-amber-500 to-yellow-600
                  bg-clip-text text-transparent
                "
              >
                mentor
              </span>

              {!reduceMotion && (
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute left-0 -bottom-1
                    h-[3px] w-full origin-left
                    bg-gradient-to-r
                    from-yellow-400 via-amber-500 to-yellow-600
                    rounded-full
                    shadow-[0_0_12px_rgba(251,191,36,0.45)]
                  "
                />
              )}
            </span>
            <br />
            to help you
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-md mx-0 sm:mx-auto lg:mx-0">
            Find world-class mentors for live mentorship and freelance projects.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4 justify-start sm:justify-center lg:justify-start">
            <Link href="/find-mentor">
              <motion.button
                whileHover={{ y: -2 }}
                whileFocus={{
                  boxShadow:
                    '0 0 0 4px rgba(234,179,8,0.25), 0 10px 30px rgba(0,0,0,0.18)',
                }}
                transition={{ duration: 0.2 }}
                className="
                  px-6 py-3 bg-yellow-600 text-white
                  rounded-md font-medium
                  shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                  focus:outline-none
                "
              >
                Find a Mentor
              </motion.button>
            </Link>
            <Link href="/be-mentor">
              <motion.button
                whileFocus={{
                  boxShadow: '0 0 0 3px rgba(234,179,8,0.25)',
                }}
                transition={{ duration: 0.2 }}
                className="
                  px-6 py-3 border border-gray-300
                  rounded-md font-medium
                  hover:border-yellow-400 hover:text-yellow-600
                  focus:outline-none transition
                "
              >
                Become a Mentor →
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* DESKTOP CANVAS */}
        <motion.div
          style={{ y: parallaxY }}
          className="relative hidden lg:block h-[900px] overflow-visible"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none" />

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
            }
            className="
              absolute top-[-50px] right-[-300px]
              w-[880px] flex flex-col gap-[-120px]
            "
          >
            <div className="relative h-[300px]">
              <div
                className="
                  relative h-full w-full
                  rounded-2xl overflow-hidden
                  rotate-[15deg] translate-x-[-80px]
                  shadow-[0_20px_40px_rgba(0,0,0,0.08),_0_60px_160px_rgba(0,0,0,0.18)]
                  ring-1 ring-black/[0.04]
                  after:absolute after:inset-0
                  after:bg-gradient-to-tr after:from-white/20 after:to-transparent
                  after:pointer-events-none
                "
              >
                <Image
                  src="/images/photos/techhero.png"
                  alt=""
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative h-[340px]">
              <div
                className="
                  relative h-full w-full
                  rounded-2xl overflow-hidden
                  rotate-[13deg] translate-x-[-100px]
                  shadow-[0_28px_60px_rgba(0,0,0,0.1),_0_80px_180px_rgba(0,0,0,0.2)]
                  ring-1 ring-black/[0.05]
                  after:absolute after:inset-0
                  after:bg-gradient-to-tr after:from-white/20 after:to-transparent
                  after:pointer-events-none
                "
              >
                <Image
                  src="/images/photos/hero2.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
