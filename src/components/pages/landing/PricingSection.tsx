"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

export default function PricingSection() {
  const t = useTranslations("Pricing");

  const pricingPlans = [
    {
      name: t("plans.starter.name"),
      price: 29,
      period: "month",
      description: t("plans.starter.description"),
      features: [
        t("plans.starter.features.bookings"),
        t("plans.starter.features.customers"),
        t("plans.starter.features.booking"),
        t("plans.starter.features.payment"),
        t("plans.starter.features.mobile"),
        t("plans.starter.features.support"),
        t("plans.starter.features.analytics"),
      ],
      buttonText: t("plans.starter.buttonText"),
      popular: false,
      color: "border-gray-200 dark:border-gray-700",
    },
    {
      name: t("plans.professional.name"),
      price: 79,
      period: "month",
      description: t("plans.professional.description"),
      features: [
        t("plans.professional.features.bookings"),
        t("plans.professional.features.customers"),
        t("plans.professional.features.locations"),
        t("plans.professional.features.equipment"),
        t("plans.professional.features.staff"),
        t("plans.professional.features.support"),
        t("plans.professional.features.analytics"),
        t("plans.professional.features.api"),
        t("plans.professional.features.branding"),
      ],
      buttonText: t("plans.professional.buttonText"),
      popular: true,
      color: "border-blue-500 dark:border-blue-400",
    },
    {
      name: t("plans.enterprise.name"),
      price: 199,
      period: "month",
      description: t("plans.enterprise.description"),
      features: [
        t("plans.enterprise.features.bookings"),
        t("plans.enterprise.features.franchise"),
        t("plans.enterprise.features.compliance"),
        t("plans.enterprise.features.integrations"),
        t("plans.enterprise.features.manager"),
        t("plans.enterprise.features.support"),
        t("plans.enterprise.features.reporting"),
        t("plans.enterprise.features.whiteLabel"),
        t("plans.enterprise.features.security"),
        t("plans.enterprise.features.training"),
      ],
      buttonText: t("plans.enterprise.buttonText"),
      popular: false,
      color: "border-purple-500 dark:border-purple-400",
    },
  ];

  const includedFeatures = [
    t("included.trial"),
    t("included.noSetup"),
    t("included.cancel"),
    t("included.migration"),
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-4 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 me-2" />
            {t("badge")}
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors duration-300">
            {t("title")}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              {t("titleAccent")}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            {t("description")}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={ANIMATION_VARIANTS.item}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center shadow-lg">
                    <Star className="w-4 h-4 me-1" />
                    {t("plans.professional.mostPopular")}
                  </div>
                </motion.div>
              )}

              <Card
                className={`h-full bg-white dark:bg-gray-900 ${plan.color} ${
                  plan.popular ? "border-2 md:scale-105" : "border"
                } shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group`}
              >
                <CardHeader className="text-center pb-6 md:pb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {plan.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ms-2 transition-colors duration-300">
                      /{plan.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed transition-colors duration-300">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 px-4 md:px-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mb-6 md:mb-8"
                  >
                    <Button
                      className={`w-full py-3 md:py-4 text-base md:text-lg font-medium transition-all duration-300 ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ms-2" />
                    </Button>
                  </motion.div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm md:text-base transition-colors duration-300">
                      Everything included:
                    </h4>

                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + featureIndex * 0.05,
                          }}
                        >
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 dark:text-green-400 mt-0.5 me-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg dark:shadow-2xl transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
              {t("allPlansInclude")}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {includedFeatures.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center justify-center space-x-2 p-2 md:p-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base text-center transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Note */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
            {t("questionsText")}
            <motion.a
              href="#contact"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {t("contactSales")}
            </motion.a>
            {t("enterpriseText")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
