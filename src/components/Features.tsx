"use client";

import { motion, useInView } from "motion/react";
import { CreditCard, Shield, Zap, Globe, Lock } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: CreditCard,
    title: "Universal Payments",
    description: "Accept cards, crypto, BNPL, and 14+ currencies with a single integration.",
    color: "from-violet-500 to-purple-600",
    span: "md:col-span-3 md:row-span-2"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "PCI DSS Level 1 certified with 3D Secure and fraud detection AI.",
    color: "from-blue-500 to-cyan-600",
    span: "md:col-span-3 md:row-span-2"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second processing with 99.9% uptime guarantee.",
    color: "from-amber-500 to-orange-600",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    icon: Globe,
    title: "Global Ready",
    description: "150+ countries with automatic currency conversion.",
    color: "from-emerald-500 to-teal-600",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    icon: Lock,
    title: "Fully Compliant",
    description: "GDPR, PSD2, and regional regulations built-in.",
    color: "from-indigo-500 to-blue-600",
    span: "md:col-span-2 md:row-span-2"
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative overflow-hidden rounded-3xl bg-white border border-neutral-200 p-8 hover:border-neutral-300 transition-all duration-300 ${feature.span}`}
    >
      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg mb-6`}
        >
          <Icon className="w-7 h-7" />
        </motion.div>

        {/* Text */}
        <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
          {feature.title}
        </h3>
        <p className="text-neutral-600" style={{ lineHeight: 1.7 }}>
          {feature.description}
        </p>

        {/* Decorative Element */}
        <motion.div
          className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-6"
            style={{ 
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Everything you need.{" "}
            <span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <p 
            className="text-neutral-600 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.6 }}
          >
            Powerful features that scale with your business. From startups to enterprise.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-6 md:grid-rows-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
