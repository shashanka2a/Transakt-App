"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const features = [
  { name: "Credit & Debit Cards", transakt: true, others: true },
  { name: "Cryptocurrency Support", transakt: true, others: false },
  { name: "Buy Now Pay Later", transakt: true, others: true },
  { name: "14+ Currencies", transakt: true, others: false },
  { name: "Unified Checkout", transakt: true, others: false },
  { name: "Real-time Analytics", transakt: true, others: true },
  { name: "Custom Branding", transakt: true, others: false },
  { name: "AI Fraud Detection", transakt: true, others: false },
  { name: "Lower Transaction Fees", transakt: true, others: false },
];

export function Comparison() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="mb-6"
            style={{ 
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Why Choose{" "}
            <span className="gradient-text">Transakt</span>
          </h2>
          <p 
            className="text-neutral-600"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
          >
            See how we compare to traditional payment platforms
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl overflow-hidden border-2 border-neutral-200 bg-white"
        >
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-violet-50 to-indigo-50 border-b-2 border-neutral-200">
            <div className="text-neutral-600" style={{ fontWeight: 600 }}>
              Feature
            </div>
            <div className="text-center">
              <span className="gradient-text" style={{ fontWeight: 700 }}>
                Transakt
              </span>
            </div>
            <div className="text-center text-neutral-600" style={{ fontWeight: 600 }}>
              Others
            </div>
          </div>

          {/* Feature Rows */}
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-3 gap-4 p-6 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50 transition-colors"
            >
              <div className="text-neutral-700" style={{ fontWeight: 500 }}>
                {feature.name}
              </div>
              <div className="flex justify-center">
                {feature.transakt ? (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <X className="w-5 h-5 text-neutral-300" />
                )}
              </div>
              <div className="flex justify-center">
                {feature.others ? (
                  <Check className="w-5 h-5 text-neutral-400" />
                ) : (
                  <X className="w-5 h-5 text-neutral-300" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
