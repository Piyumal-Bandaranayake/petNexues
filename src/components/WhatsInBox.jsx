"use client";

import { motion } from "framer-motion";
import { Box, CookingPot, Droplets, Zap, BookOpen } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const items = [
  { icon: Box, label: "Smart Feeder (Main Unit)" },
  { icon: CookingPot, label: "Stainless Steel Food Bowl" },
  { icon: Droplets, label: "Water Tray" },
  { icon: Zap, label: "Power Adapter" },
  { icon: BookOpen, label: "User Manual" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function WhatsInBox() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-heading">
            What&apos;s in the Box
          </h2>
        </FadeUp>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {items.map((it) => (
            <motion.div
              key={it.label}
              variants={item}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <it.icon size={28} />
              </div>
              <span className="text-sm font-medium text-heading">
                {it.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
