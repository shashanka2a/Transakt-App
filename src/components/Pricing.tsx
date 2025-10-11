"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Check, Sparkles } from "lucide-react";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 1,000 transactions/mo",
      "All payment methods",
      "Basic analytics",
      "Email support",
      "Standard security"
    ],
    popular: false
  },
  {
    name: "Growth",
    price: "$79",
    description: "For growing businesses with higher volume",
    features: [
      "Unlimited transactions",
      "All payment methods",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "Webhook notifications"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "SLA guarantee",
      "Custom contracts"
    ],
    popular: false
  }
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
        plan.popular
          ? "bg-gradient-to-br from-violet-50 to-indigo-50 border-violet-300 shadow-2xl shadow-violet-500/20 scale-105"
          : "bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-xl"
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm shadow-lg" style={{ fontWeight: 600 }}>
            <Sparkles className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative" style={{ transform: "translateZ(50px)" }}>
        <h3 className="mb-2" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
          {plan.name}
        </h3>
        <p className="text-neutral-600 mb-6 text-sm">
          {plan.description}
        </p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span 
              className={plan.popular ? "gradient-text" : "text-neutral-900"}
              style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}
            >
              {plan.price}
            </span>
            {plan.price !== "Custom" && (
              <span className="text-neutral-600">/month</span>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="flex items-start gap-3"
            >
              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                plan.popular ? "bg-violet-600" : "bg-neutral-200"
              }`}>
                <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-neutral-600"}`} />
              </div>
              <span className="text-neutral-700 text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          className={`w-full group ${
            plan.popular
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-500/25 border-0"
              : "bg-white border-2 border-neutral-300 hover:border-violet-600 hover:text-violet-600 text-neutral-900"
          }`}
          size="lg"
          style={{ fontWeight: 600 }}
        >
          {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
        </Button>
      </div>

      {/* Glow Effect */}
      {plan.popular && (
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-violet-400 to-indigo-400 opacity-20 blur-2xl" />
      )}
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

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
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p 
            className="text-neutral-600 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.6 }}
          >
            Start free, scale as you grow. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-neutral-600 text-sm mt-12"
        >
          All plans include 14-day free trial • No credit card required • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
