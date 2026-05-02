"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const points = [
  "Automated feeding on your exact schedule",
  "Live HD camera to see your pet anytime",
  "Fresh water dispensed on demand",
  "Two-way voice interaction via speaker",
  "Real-time app notifications after every meal",
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

export default function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left — Annotated Image */}
        <FadeUp>
          <div className="relative rounded-3xl overflow-hidden bg-surface p-4">
            <Image
              src="/images/productdetailes.jpeg"
              alt="PetNexus feeder annotated diagram"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </FadeUp>

        {/* Right — Text */}
        <div className="flex flex-col">
          <FadeUp delay={0.15}>
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-heading leading-tight">
              Designed for Real-Life Pet Owners
            </h2>
          </FadeUp>

          <motion.ul
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 space-y-5"
          >
            {points.map((p) => (
              <motion.li
                variants={listItem}
                key={p}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  size={22}
                  className="text-primary mt-0.5 shrink-0"
                />
                <span className="text-body leading-relaxed">{p}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
