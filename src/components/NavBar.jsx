'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  // { label: 'Courses', href: '/courses' },
  { label: 'Forum', href: '/forum' },
  { label: 'Learning Centre', href: 'https://learn.progrowing.org', external: true },
  { label: 'Taskify', href: 'taskify' },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Prevent body scroll when menu is open (mobile + tablet)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const NavItem = ({ item }) => {
    const base =
      'relative text-sm font-medium text-black transition hover:text-black/90';

    const underline = (
      <span
        className="
          absolute left-0 -bottom-1 h-[2px] w-0
          bg-gradient-to-r from-yellow-400 to-amber-500
          transition-all duration-300 group-hover:w-full
        "
      />
    );

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} group`}
          onClick={() => setIsOpen(false)}
        >
          {item.label}
          {underline}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        className={`${base} group`}
        onClick={() => setIsOpen(false)}
      >
        {item.label}
        {underline}
      </Link>
    );
  };

  return (
    <header
      className="
        fixed top-0 w-full
        z-20
        bg-transparent
        backdrop-blur-sm
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-semibold text-lg">
            <Image
                src="/images/logo/logo.png"
                alt="site logo"
                width={160}
                height={60}
                className=""
            />
          </Link>

          {/* Desktop Nav (lg+) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="/be-mentor"
              rel="noopener noreferrer"
              className="
                rounded-full border border-white/30
                px-5 py-2 text-sm font-semibold text-black
                transition
                hover:bg-yellow-600 hover:text-white
              "
            >
              Be a Mentor
            </a>
          </div>

          {/* Mobile / Tablet Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-black"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="
              lg:hidden
              bg-black/90 backdrop-blur-xl
              border-t border-white/10
            "
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}

              <a
                href="/be-mentor"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 rounded-full border border-white/30
                  px-8 py-3 text-white font-semibold text-sm
                  transition
                  hover:bg-yellow-600 hover:text-white
                "
                onClick={() => setIsOpen(false)}
              >
                Be a Mentor
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
