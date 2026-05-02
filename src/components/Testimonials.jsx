"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote: "I can check and feed my dog even during work. Super helpful!",
    name: "Sarah K.",
    role: "Dog Owner",
    initials: "SK",
  },
  {
    quote:
      "The schedule feature keeps my dog healthy and happy every day.",
    name: "Daniel M.",
    role: "Dog Owner",
    initials: "DM",
  },
  {
    quote:
      "The live camera gives me total peace of mind. I love this product.",
    name: "Priya L.",
    role: "Cat Owner",
    initials: "PL",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center mb-14">
          <SectionLabel>Loved by Pet Owners</SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-heading">
            Real People. Happy Pets.
          </h2>
        </FadeUp>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="bg-white rounded-3xl p-7 border border-primary/10 shadow-[0_4px_32px_rgba(10,116,218,0.06)] hover:shadow-[0_8px_40px_rgba(10,116,218,0.12)] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-body leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
