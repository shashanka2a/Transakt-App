"use client";

import { motion } from "motion/react";

export function DataVisualization() {
  return (
    <motion.svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background Grid */}
      <g opacity="0.1">
        {[...Array(6)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="20"
            y1={20 + i * 30}
            x2="280"
            y2={20 + i * 30}
            stroke="#0a0a0a"
            strokeWidth="1"
          />
        ))}
        {[...Array(9)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={20 + i * 32.5}
            y1="20"
            x2={20 + i * 32.5}
            y2="170"
            stroke="#0a0a0a"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Animated Bars */}
      {[
        { x: 40, height: 80, delay: 0 },
        { x: 80, height: 120, delay: 0.1 },
        { x: 120, height: 60, delay: 0.2 },
        { x: 160, height: 140, delay: 0.3 },
        { x: 200, height: 100, delay: 0.4 },
        { x: 240, height: 130, delay: 0.5 }
      ].map((bar, i) => (
        <motion.rect
          key={i}
          x={bar.x}
          y={170 - bar.height}
          width="24"
          height={bar.height}
          rx="4"
          fill="url(#barGradient)"
          initial={{ height: 0, y: 170 }}
          animate={{ height: bar.height, y: 170 - bar.height }}
          transition={{ delay: bar.delay, duration: 0.8, ease: "easeOut" }}
        />
      ))}

      {/* Trend Line */}
      <motion.path
        d="M 52 130 Q 92 90 132 110 T 212 50 T 252 40"
        stroke="#635bff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
      />

      {/* Data Points */}
      {[
        { cx: 52, cy: 130 },
        { cx: 132, cy: 110 },
        { cx: 212, cy: 50 },
        { cx: 252, cy: 40 }
      ].map((point, i) => (
        <motion.circle
          key={i}
          cx={point.cx}
          cy={point.cy}
          r="6"
          fill="#635bff"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
        />
      ))}

      {/* Floating Metrics */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <rect x="200" y="10" width="80" height="30" rx="8" fill="white" filter="url(#shadow)" />
        <text x="210" y="22" fill="#737373" fontSize="8">Revenue</text>
        <text x="210" y="32" fill="#0a0a0a" fontSize="12" fontWeight="600">+32%</text>
      </motion.g>

      <defs>
        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#635bff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
        </filter>
      </defs>
    </motion.svg>
  );
}
