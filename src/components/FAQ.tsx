"use client";

import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "What payment methods does Transakt support?",
    answer: "Transakt supports all major credit and debit cards (Visa, Mastercard, Amex), cryptocurrencies (Bitcoin, Ethereum, USDC), Buy Now Pay Later options, and local payment methods across 14+ currencies."
  },
  {
    question: "How long does it take to integrate Transakt?",
    answer: "Most businesses can integrate Transakt in less than a day. Our RESTful API is developer-friendly with comprehensive documentation, SDKs for popular languages, and pre-built checkout components."
  },
  {
    question: "What are the transaction fees?",
    answer: "Our pricing is transparent and competitive. Starter plan: 2.9% + $0.30 per transaction. Growth plan: 2.5% + $0.25 per transaction. Enterprise: Custom pricing based on volume. No hidden fees or monthly minimums."
  },
  {
    question: "Is Transakt PCI compliant?",
    answer: "Yes, Transakt is PCI DSS Level 1 certified, the highest level of compliance. We handle all security requirements so you don't have to worry about storing or processing sensitive card data."
  },
  {
    question: "Can I customize the checkout experience?",
    answer: "Absolutely! Transakt offers full white-labeling and customization options. You can match the checkout to your brand with custom colors, logos, and styling while maintaining our secure infrastructure."
  }
];

export function FAQ() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p 
            className="text-neutral-600"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
          >
            Everything you need to know about Transakt
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group border-2 border-neutral-200 rounded-2xl px-6 data-[state=open]:border-violet-300 data-[state=open]:bg-violet-50/50 transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <span className="text-left" style={{ fontWeight: 600 }}>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border-2 border-violet-200"
        >
          <p className="text-neutral-700 mb-4" style={{ fontSize: '1rem' }}>
            Still have questions?
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 transition-colors hover:gap-3"
            style={{ fontWeight: 600, fontSize: '1rem' }}
          >
            Contact our team
            <svg className="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
