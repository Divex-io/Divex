"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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

export default function TestimonialsSection() {
  const t = useTranslations("Testimonials");

  const stats = [
    { value: "500+", label: t("stats.diveCenters") },
    { value: "50K+", label: t("stats.happyDivers") },
    { value: "4.9/5", label: t("stats.averageRating") },
    { value: "99%", label: t("stats.customerRetention") },
  ];

  const testimonials = [
    {
      name: t("customers.sarah.name"),
      role: t("customers.sarah.role"),
      company: t("customers.sarah.company"),
      location: t("customers.sarah.location"),
      image: "/api/placeholder/60/60",
      rating: 5,
      text: t("customers.sarah.text"),
      metric: t("customers.sarah.metric"),
    },
    {
      name: t("customers.marcus.name"),
      role: t("customers.marcus.role"),
      company: t("customers.marcus.company"),
      location: t("customers.marcus.location"),
      image: "/api/placeholder/60/60",
      rating: 5,
      text: t("customers.marcus.text"),
      metric: t("customers.marcus.metric"),
    },
    {
      name: t("customers.elena.name"),
      role: t("customers.elena.role"),
      company: t("customers.elena.company"),
      location: t("customers.elena.location"),
      image: "/api/placeholder/60/60",
      rating: 5,
      text: t("customers.elena.text"),
      metric: t("customers.elena.metric"),
    },
    {
      name: t("customers.james.name"),
      role: t("customers.james.role"),
      company: t("customers.james.company"),
      location: t("customers.james.location"),
      image: "/api/placeholder/60/60",
      rating: 5,
      text: t("customers.james.text"),
      metric: t("customers.james.metric"),
    },
    {
      name: t("customers.fatima.name"),
      role: t("customers.fatima.role"),
      company: t("customers.fatima.company"),
      location: t("customers.fatima.location"),
      image: "/api/placeholder/60/60",
      rating: 5,
      text: t("customers.fatima.text"),
      metric: t("customers.fatima.metric"),
    },
    {
      name: t("customers.roberto.name"),
      role: t("customers.roberto.role"),
      company: t("customers.roberto.company"),
      location: t("customers.roberto.location"),
      image: "/api/placeholder/60/60",
      rating: 5,
      text: t("customers.roberto.text"),
      metric: t("customers.roberto.metric"),
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-4 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 me-2" />
            {t("badge")}
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            {t("title")}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              {t("titleAccent")}
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            {t("description")}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={ANIMATION_VARIANTS.item}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${testimonial.company}`}
              variants={ANIMATION_VARIANTS.item}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-8 h-8 text-blue-500 dark:text-blue-400 opacity-50 transition-colors duration-300" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 dark:text-yellow-300 fill-current transition-colors duration-300" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                    {testimonial.text}
                  </blockquote>

                  {/* Metric Highlight */}
                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-800/30 rounded-lg p-3 mb-6 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-blue-700 dark:text-blue-300 font-semibold text-center transition-colors duration-300">
                      📈 {testimonial.metric}
                    </div>
                  </motion.div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center me-4 shadow-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white font-bold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </motion.div>

                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        {testimonial.role}, {testimonial.company}
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400 transition-colors duration-300">
                        📍 {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white shadow-xl dark:shadow-2xl">
            <motion.h3
              className="text-2xl lg:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {t("readyToJoin")}
            </motion.h3>

            <motion.p
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {t("joinDescription")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("startFreeTrial")}
              </motion.button>

              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("scheduleDemo")}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
