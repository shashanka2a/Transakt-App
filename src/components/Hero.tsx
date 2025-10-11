"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { PaymentCard } from "./illustrations/PaymentCard";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-violet-400/30 to-purple-600/30 rounded-full blur-3xl animate-morph"
        style={{ y }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-600/30 rounded-full blur-3xl animate-morph"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
      />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200"
            >
              <Sparkles className="w-4 h-4 text-violet-600" />
              <span className="text-sm text-violet-900" style={{ fontWeight: 600 }}>
                Now in Early Access
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-4"
            >
              <h1 
                className="tracking-tight"
                style={{ 
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em'
                }}
              >
                <span className="block">One Checkout.</span>
                <span className="block gradient-text">Every Currency.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-neutral-600 max-w-xl mx-auto lg:mx-0"
              style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              Accept cards, crypto, and 14+ currencies with a single, beautiful checkout. Built for the future of commerce.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 transition-all group"
                style={{ fontWeight: 600 }}
              >
                Join Early Access
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neutral-300 hover:border-violet-600 hover:text-violet-600 hover:bg-violet-50 bg-white transition-all"
                style={{ fontWeight: 600 }}
              >
                View Demo
              </Button>
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <PaymentCard />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-xl border border-white/40 hidden lg:block"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-600">End-to-end</div>
                    <div className="text-sm text-neutral-900" style={{ fontWeight: 600 }}>Encrypted</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl border border-white/40 hidden lg:block"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center text-white shadow-sm" style={{ fontWeight: 700, fontSize: '0.875rem' }}>
                    150+
                  </div>
                  <div>
                    <div className="text-xs text-neutral-600">Global</div>
                    <div className="text-sm text-neutral-900" style={{ fontWeight: 600 }}>Coverage</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
