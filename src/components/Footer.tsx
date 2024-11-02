"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-100 mt-auto"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-6">
          <Link href="/impressum" className="text-sm text-gray-600 hover:text-gray-900">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-sm text-gray-600 hover:text-gray-900">
            Datenschutz
          </Link>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} WebDevian GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </motion.footer>
  );
} 