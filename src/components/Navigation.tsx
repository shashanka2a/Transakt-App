"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.8]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="border-b border-neutral-200"
        style={{
          backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          backgroundColor: useTransform(bgOpacity, (o) => `rgba(255, 255, 255, ${o})`)
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg" style={{ fontWeight: 700 }}>
                  T
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <span className="text-xl" style={{ fontWeight: 700 }}>
                Transakt
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["Features", "Pricing", "Docs"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-neutral-700 hover:text-violet-600 transition-colors relative group text-sm"
                  style={{ fontWeight: 500 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className="hover:text-violet-600 text-neutral-700" style={{ fontWeight: 500 }}>
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-500/25 border-0" style={{ fontWeight: 600 }}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-200 bg-white"
          >
            <div className="px-4 py-6 space-y-4">
              {["Features", "Pricing", "Docs"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-neutral-700 hover:text-violet-600 transition-colors"
                  style={{ fontWeight: 500 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full" style={{ fontWeight: 500 }}>
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0" style={{ fontWeight: 600 }}>
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}
