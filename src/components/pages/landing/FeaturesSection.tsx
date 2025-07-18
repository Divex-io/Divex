"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Shield,
  BarChart3,
  CreditCard,
  Smartphone,
  MapPin,
  Waves,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};

export default function FeaturesSection() {
  const t = useTranslations("Features");

  const features = [
    {
      icon: Calendar,
      title: t("features.booking.title"),
      description: t("features.booking.description"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: t("features.customers.title"),
      description: t("features.customers.description"),
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Shield,
      title: t("features.safety.title"),
      description: t("features.safety.description"),
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: BarChart3,
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
      color: "from-orange-500 to-red-500",
    },
    {
      icon: CreditCard,
      title: t("features.payment.title"),
      description: t("features.payment.description"),
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Smartphone,
      title: t("features.mobile.title"),
      description: t("features.mobile.description"),
      color: "from-yellow-500 to-amber-500",
    },
  ];

  const additionalFeatures = [
    t("additionalFeatures.equipment"),
    t("additionalFeatures.weather"),
    t("additionalFeatures.multilingual"),
    t("additionalFeatures.mapping"),
    t("additionalFeatures.instructor"),
    t("additionalFeatures.inventory"),
    t("additionalFeatures.discounts"),
    t("additionalFeatures.reminders"),
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Waves className="w-4 h-4 me-2" />
            {t("badge")}
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {t("title")}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              {t("titleAccent")}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={ANIMATION_VARIANTS.item}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <motion.div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-2xl p-6 md:p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              {t("moreFeatures")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              {t("moreFeaturesDescription")}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={ANIMATION_VARIANTS.item}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            <span>{t("readyToStart")}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
