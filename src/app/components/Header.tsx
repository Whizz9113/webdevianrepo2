"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50 dark:bg-[#171717]/80"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-[#87CEEB] to-[#FF7F50] text-transparent bg-clip-text">
            WebDevian
          </Link>
          
          <div className="space-x-6">
            <Link 
              href="/" 
              className="hover:text-[#87CEEB] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="#tools" 
              onClick={(e) => smoothScroll(e, '#tools')}
              className="hover:text-[#87CEEB] transition-colors duration-200"
            >
              Tools
            </Link>
            <Link 
              href="#faq" 
              onClick={(e) => smoothScroll(e, '#faq')}
              className="hover:text-[#87CEEB] transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link 
              href="/impressum" 
              className="hover:text-[#87CEEB] transition-colors duration-200"
            >
              Impressum
            </Link>
            <Link 
              href="/datenschutz" 
              className="hover:text-[#87CEEB] transition-colors duration-200"
            >
              Datenschutz
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
} 