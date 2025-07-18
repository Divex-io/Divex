"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Target,
  Lock,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

export default function CTASection() {
  const t = useTranslations("CTA");

  const benefits = [
    {
      icon: Zap,
      text: t("benefits.setup"),
    },
    {
      icon: Shield,
      text: t("benefits.security"),
    },
    {
      icon: CheckCircle,
      text: t("benefits.trial"),
    },
    {
      icon: Clock,
      text: t("benefits.support"),
    },
  ];
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="cta-waves"
              x="0"
              y="0"
              width="100"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 10 Q25 0 50 10 T100 10 V20 H0 Z"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="100"
            height="100"
            fill="url(#cta-waves)"
            className="text-white"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-20 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("title")}
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {t("titleAccent")}
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            variants={ANIMATION_VARIANTS.item}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("description")}
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex flex-col items-center text-center"
                variants={ANIMATION_VARIANTS.item}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 md:mb-4 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </motion.div>
                <p className="text-white font-medium text-sm md:text-base leading-tight px-2">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 px-4"
            variants={ANIMATION_VARIANTS.item}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {t("startFreeTrial")}
                <motion.div
                  className="ms-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                {t("scheduleDemo")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto"
            variants={ANIMATION_VARIANTS.item}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {t("trustedBy")}
              </h3>
              <p className="text-blue-100 text-sm md:text-base">
                {t("trustedDescription")}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
              {[
                { number: "2M+", label: t("stats.bookings") },
                { number: "99.9%", label: t("stats.uptime") },
                { number: "24/7", label: t("stats.support") },
                { number: "50+", label: t("stats.countries") },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-xs md:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Encouragement */}
          <motion.div
            className="mt-8 md:mt-12"
            variants={ANIMATION_VARIANTS.item}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 text-blue-100 text-sm md:text-base lg:text-lg px-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-yellow-300 flex-shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 md:w-5 md:h-5 text-green-300 flex-shrink-0" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-300 flex-shrink-0" />
                <span>Setup assistance included</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
