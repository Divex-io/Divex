"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { ModeToggle } from "@/components/ModeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/common/Logo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nav = useTranslations("Navigation");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full z-50 border-b backdrop-blur-sm bg-background/95 flex-shrink-0"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Logo variant="full" size="lg" href="#" animated={true} />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {nav("features")}
            </motion.a>
            <motion.a
              href="#pricing"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {nav("pricing")}
            </motion.a>
            <motion.a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {nav("testimonials")}
            </motion.a>
            <motion.a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {nav("contact")}
            </motion.a>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <LanguageSwitcher />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <ModeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t bg-background/95 backdrop-blur-sm"
          >
            <nav className="px-4 py-6 space-y-4">
              <motion.a
                href="#features"
                className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 font-medium"
                onClick={closeMobileMenu}
                whileTap={{ scale: 0.98 }}
              >
                {nav("features")}
              </motion.a>
              <motion.a
                href="#pricing"
                className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 font-medium"
                onClick={closeMobileMenu}
                whileTap={{ scale: 0.98 }}
              >
                {nav("pricing")}
              </motion.a>
              <motion.a
                href="#testimonials"
                className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 font-medium"
                onClick={closeMobileMenu}
                whileTap={{ scale: 0.98 }}
              >
                {nav("testimonials")}
              </motion.a>
              <motion.a
                href="#contact"
                className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 font-medium"
                onClick={closeMobileMenu}
                whileTap={{ scale: 0.98 }}
              >
                {nav("contact")}
              </motion.a>

              {/* Mobile Controls */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t">
                <LanguageSwitcher />
                <ModeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
