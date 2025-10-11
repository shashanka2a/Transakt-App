"use client";

import { motion } from "motion/react";

export function PaymentCard() {
  return (
    <motion.svg
      viewBox="0 0 400 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Card Background */}
      <motion.rect
        x="20"
        y="40"
        width="360"
        height="220"
        rx="20"
        fill="url(#cardGradient)"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      />
      
      {/* Glassmorphic overlay */}
      <motion.rect
        x="20"
        y="40"
        width="360"
        height="220"
        rx="20"
        fill="url(#glassGradient)"
        opacity="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.4 }}
      />

      {/* Decorative circles */}
      <motion.circle
        cx="340"
        cy="80"
        r="60"
        fill="url(#circleGradient1)"
        opacity="0.2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.circle
        cx="60"
        cy="220"
        r="40"
        fill="url(#circleGradient2)"
        opacity="0.2"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      {/* Chip */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <rect x="50" y="100" width="50" height="40" rx="6" fill="#FFD700" opacity="0.9" />
        <line x1="60" y1="105" x2="60" y2="135" stroke="#DAA520" strokeWidth="2" />
        <line x1="70" y1="105" x2="70" y2="135" stroke="#DAA520" strokeWidth="2" />
        <line x1="80" y1="105" x2="80" y2="135" stroke="#DAA520" strokeWidth="2" />
        <line x1="90" y1="105" x2="90" y2="135" stroke="#DAA520" strokeWidth="2" />
      </motion.g>

      {/* Card Number */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <text x="50" y="180" fill="white" fontSize="20" fontFamily="monospace" fontWeight="600">
          •••• •••• •••• 4242
        </text>
      </motion.g>

      {/* Cardholder Name */}
      <motion.text
        x="50"
        y="210"
        fill="white"
        fontSize="14"
        opacity="0.9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1 }}
      >
        JOHN DOE
      </motion.text>

      {/* Expiry */}
      <motion.text
        x="50"
        y="230"
        fill="white"
        fontSize="12"
        opacity="0.8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.1 }}
      >
        12/25
      </motion.text>

      {/* Logo */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <circle cx="320" cy="220" r="20" fill="rgba(255,255,255,0.3)" />
        <circle cx="340" cy="220" r="20" fill="rgba(255,255,255,0.3)" />
      </motion.g>

      {/* Floating Icons */}
      <motion.g
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Lock Icon */}
        <rect x="150" y="10" width="20" height="15" rx="3" fill="#635bff" opacity="0.8" />
        <rect x="152" y="17" width="16" height="12" rx="2" fill="#635bff" />
        <circle cx="160" cy="23" r="2" fill="white" />
      </motion.g>

      <motion.g
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        {/* Shield Icon */}
        <path
          d="M270 15 L280 15 L280 30 L275 35 L270 30 Z"
          fill="#0ea5e9"
          opacity="0.8"
        />
        <path d="M273 20 L275 23 L279 18" stroke="white" strokeWidth="1.5" fill="none" />
      </motion.g>

      {/* Gradients */}
      <defs>
        <linearGradient id="cardGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#635bff" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="glassGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="circleGradient1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#635bff" />
        </radialGradient>
        <radialGradient id="circleGradient2">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#06b6d4" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}
