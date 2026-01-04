import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope, but most branding or website projects take between 2–4 weeks. Complex apps or platforms may take longer — we'll always give you a clear timeline upfront.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes! We offer maintenance packages and ongoing support to keep your product running smoothly. We're here for you beyond the initial launch.",
  },
  {
    question: "What if I only need design or development, not both?",
    answer: "That's perfectly fine! We offer standalone design or development services. Many clients come to us for one specific need, and we're happy to help.",
  },
  {
    question: "Can you work with my internal team?",
    answer: "Absolutely. We frequently collaborate with in-house teams, whether it's working alongside your developers or providing design support to your existing designers.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with both! From early-stage startups launching their first product to established companies looking to refresh their digital presence — we adapt our approach to fit your stage.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-label mb-4 block">FAQs</span>
          <h2 className="heading-section italic">FAQs</h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="faq-item"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg text-foreground pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-body pt-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
