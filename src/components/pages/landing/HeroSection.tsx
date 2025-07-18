"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Waves, MapPin, Users, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import WateryBackground from "@/components/common/WateryBackground";

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};

export default function HeroSection() {
  const t = useTranslations("Hero");

  const stats = [
    { icon: Users, label: t("stats.diversManaged"), value: "10,000+" },
    { icon: MapPin, label: t("stats.diveSites"), value: "500+" },
    { icon: Calendar, label: t("stats.bookingsPerMonth"), value: "25,000+" },
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-blue-950 dark:to-cyan-950 transition-colors duration-300">
      {/* Background Pattern - Watery Effect */}
      <WateryBackground id="hero" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="text-center lg:text-start space-y-6 md:space-y-8">
            <motion.div
              variants={ANIMATION_VARIANTS.item}
              className="space-y-4"
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Waves className="w-4 h-4 me-2" />
                {t("badge")}
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight transition-colors duration-300">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  {t("title")}
                </span>
                <br />
                <span className="text-gray-900 dark:text-white transition-colors duration-300">
                  {t("titleAccent")}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors duration-300">
                {t("description")}
              </p>
            </motion.div>

            <motion.div
              variants={ANIMATION_VARIANTS.item}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("startFreeTrial")}
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg border-2 transition-all duration-300"
                >
                  {t("watchDemo")}
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={ANIMATION_VARIANTS.item}
              className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            variants={ANIMATION_VARIANTS.item}
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Main Dashboard Mockup */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl dark:shadow-gray-900/50 p-4 md:p-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    Divex
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-3 md:h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded w-3/4"></div>
                  <div className="h-2 md:h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 transition-colors duration-300"></div>
                  <div className="h-2 md:h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3 transition-colors duration-300"></div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                    <div className="h-16 md:h-20 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                    </div>
                    <div className="h-16 md:h-20 bg-gradient-to-br from-teal-100 to-green-100 dark:from-teal-900 dark:to-green-900 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Calendar className="w-6 h-6 md:w-8 md:h-8 text-teal-600 dark:text-teal-400 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg dark:shadow-blue-900/50"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              }}
            >
              <Waves className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-teal-400 to-green-400 rounded-full flex items-center justify-center shadow-lg dark:shadow-teal-900/50"
              animate={{
                y: [0, 10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <MapPin className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
