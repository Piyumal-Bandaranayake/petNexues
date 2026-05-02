"use client";

import { motion } from "framer-motion";
import { Clock, EyeOff, AlertCircle, Scale } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const problems = [
  {
    icon: Clock,
    title: "Missed Feedings",
    desc: "Busy schedules mean your pet waits — and that's not fair to them.",
  },
  {
    icon: EyeOff,
    title: "No Remote Monitoring",
    desc: "No way to check on your pets while you're away from home.",
  },
  {
    icon: AlertCircle,
    title: "Feeding Uncertainty",
    desc: "You never really know if your pet actually ate their meal.",
  },
  {
    icon: Scale,
    title: "Portion Problems",
    desc: "Manual feeding often causes overfeeding or underfeeding.",
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

export default function ProblemSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center mb-14">
          <SectionLabel>Why PetNexus?</SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-heading">
            Pet Care Shouldn&apos;t Be This Hard
          </h2>
        </FadeUp>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="bg-white rounded-3xl p-7 shadow-[0_4px_32px_rgba(10,116,218,0.06)] hover:shadow-[0_8px_40px_rgba(10,116,218,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                <p.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">{p.title}</h3>
              <p className="text-sm text-body leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
