"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { ModeToggle } from "@/components/ModeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/common/Logo";

// Import all the new section components
import HeroSection from "@/components/pages/landing/HeroSection";
import FeaturesSection from "@/components/pages/landing/FeaturesSection";
import PricingSection from "@/components/pages/landing/PricingSection";
import TestimonialsSection from "@/components/pages/landing/TestimonialsSection";
import CTASection from "@/components/pages/landing/CTASection";

export default function HomeIndex() {
  const t = useTranslations("Index");
  const nav = useTranslations("Navigation");
  const footer = useTranslations("Footer");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
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

            {/* Navigation */}
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

            <div className="flex items-center gap-3">
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
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <div id="features">
          <FeaturesSection />
        </div>

        {/* Pricing Section */}
        <div id="pricing">
          <PricingSection />
        </div>

        {/* Testimonials Section */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>

        {/* Call to Action Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <motion.footer
        className="w-full border-t backdrop-blur-sm bg-background/95 flex-shrink-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="mb-4">
                  <Logo variant="full" size="md" animated={false} />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {footer("description")}
                </p>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Product
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#features"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Support
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Company
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {footer("copyright")}
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
