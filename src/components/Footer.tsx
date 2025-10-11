"use client";

import { motion } from "motion/react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-md mx-auto text-center"
        >
          <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Stay Updated
          </h3>
          <p className="text-neutral-600 mb-6">
            Get the latest updates on features and industry trends
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-neutral-300 focus:border-violet-500 focus:ring-violet-500"
            />
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 shadow-sm" style={{ fontWeight: 600 }}>
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Security", "Roadmap"]
            },
            {
              title: "Developers",
              links: ["Documentation", "API Reference", "SDKs", "Status"]
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"]
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Compliance", "Licenses"]
            }
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="mb-4" style={{ fontWeight: 600 }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-600 hover:text-violet-600 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white" style={{ fontWeight: 700 }}>
              T
            </div>
            <span style={{ fontWeight: 600 }}>Transakt</span>
            <span className="text-neutral-600 text-sm ml-2">
              © 2025 All rights reserved
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Twitter, href: "#" },
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-violet-600 hover:border-violet-300 transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
