"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const benefits = [
  "Simple one-tap controls",
  "Clear visual feedback on food and water levels",
  "Saves time every single day",
  "Reliable dual power — mains + battery backup",
  "Peace of mind wherever you are",
];

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

export default function BenefitsSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left — Lifestyle Image */}
        <FadeUp>
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/product-lifestyle.png"
              alt="PetNexus feeder in a living room with a happy dog eating"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </FadeUp>

        {/* Right — Benefits */}
        <FadeUp delay={0.15}>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-heading leading-tight">
            Built for Simplicity and Control
          </h2>
          <motion.ul
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 space-y-5"
          >
            {benefits.map((b) => (
              <motion.li
                variants={listItem}
                key={b}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={24}
                  className="text-primary mt-0.5 shrink-0"
                />
                <span className="text-body text-lg leading-relaxed">{b}</span>
              </motion.li>
            ))}
          </motion.ul>
        </FadeUp>
      </div>
    </section>
  );
}
