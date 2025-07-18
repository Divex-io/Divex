"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner",
    company: "Blue Ocean Diving",
    location: "Maldives",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "DiveCenter Pro has completely transformed our business operations. The booking system is intuitive, and our customers love the mobile app. We've seen a 40% increase in bookings since switching.",
    metric: "40% increase in bookings",
  },
  {
    name: "Marcus Chen",
    role: "Operations Manager",
    company: "Coral Reef Adventures",
    location: "Thailand",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "The safety compliance features are outstanding. Digital logbooks and automated safety checks have streamlined our operations while ensuring we meet all regulatory requirements.",
    metric: "100% compliance achieved",
  },
  {
    name: "Elena Rodriguez",
    role: "Dive Instructor",
    company: "Mediterranean Divers",
    location: "Spain",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "As an instructor, I love how easy it is to manage my students' certifications and track their progress. The platform has made my job so much more efficient.",
    metric: "50% time savings",
  },
  {
    name: "James Thompson",
    role: "CEO",
    company: "Pacific Dive Centers",
    location: "Australia",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "Managing multiple locations was a nightmare before DiveCenter Pro. Now I can oversee all our centers from one dashboard. The analytics help us make data-driven decisions.",
    metric: "5 locations managed",
  },
  {
    name: "Fatima Al-Zahra",
    role: "Business Owner",
    company: "Red Sea Diving",
    location: "Egypt",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "The payment processing and automated invoicing have improved our cash flow significantly. No more chasing payments - everything is handled seamlessly.",
    metric: "30% faster payments",
  },
  {
    name: "Roberto Silva",
    role: "Dive Shop Manager",
    company: "Caribbean Adventures",
    location: "Costa Rica",
    image: "/api/placeholder/60/60",
    rating: 5,
    text: "Our customers appreciate the easy online booking system. The equipment rental integration has also helped us generate additional revenue streams.",
    metric: "25% revenue increase",
  },
];

const stats = [
  { value: "500+", label: "Dive Centers" },
  { value: "50K+", label: "Happy Divers" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "99%", label: "Customer Retention" },
];

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
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 me-2" />
            Customer Stories
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Dive Centers
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              Worldwide
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how dive centers around the world are growing their business and
            improving their operations with DiveCenter Pro.
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
                className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
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
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-8 h-8 text-blue-500 opacity-50" />
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
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Metric Highlight */}
                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg p-3 mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-blue-700 dark:text-blue-300 font-semibold text-center">
                      📈 {testimonial.metric}
                    </div>
                  </motion.div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center me-4"
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
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white">
            <motion.h3
              className="text-2xl lg:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Ready to Join Them?
            </motion.h3>

            <motion.p
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Start your free trial today and see why dive centers worldwide
              choose DiveCenter Pro to grow their business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>

              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
