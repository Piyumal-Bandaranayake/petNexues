"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  CalendarClock,
  Utensils,
  Dog,
  BellRing,
} from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  { icon: Smartphone, label: "Open App", num: 1 },
  { icon: CalendarClock, label: "Set Schedule", num: 2 },
  { icon: Utensils, label: "Device Dispenses", num: 3 },
  { icon: Dog, label: "Pet Eats", num: 4 },
  { icon: BellRing, label: "You Get Notified", num: 5 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center mb-16">
          <SectionLabel>Simple by Design</SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-heading">
            How It Works
          </h2>
        </FadeUp>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
        >
          {/* Dashed connecting line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed border-primary/20 z-0" />

          {steps.map((s) => (
            <motion.div
              key={s.num}
              variants={item}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-[0_4px_32px_rgba(10,116,218,0.10)] mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                  <s.icon size={26} />
                </div>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 rounded-full w-7 h-7 flex items-center justify-center mb-2">
                {s.num}
              </span>
              <span className="text-sm font-semibold text-heading">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
