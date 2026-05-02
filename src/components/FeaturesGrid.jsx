"use client";

import { motion } from "framer-motion";
import {
  Camera,
  CalendarClock,
  Droplets,
  Smartphone,
  Mic,
  Bell,
} from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    icon: Camera,
    title: "HD Camera Monitoring",
    desc: "Watch your pet live, anytime, with crystal-clear HD video.",
  },
  {
    icon: CalendarClock,
    title: "Smart Schedule",
    desc: "Set up to 6 feeding times per day with flexible scheduling.",
  },
  {
    icon: Droplets,
    title: "Water Tank Support",
    desc: "Fresh water dispensed automatically to keep your pet hydrated.",
  },
  {
    icon: Smartphone,
    title: "App Remote Control",
    desc: "Full control from anywhere — at work, on vacation, or at home.",
  },
  {
    icon: Mic,
    title: "Voice Interaction",
    desc: "Talk and listen to your pet through the built-in speaker.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    desc: "Get instant notifications after every feeding session.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center mb-14">
          <SectionLabel>Everything You Need</SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-heading">
            Built to Be Smart
          </h2>
        </FadeUp>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative bg-card rounded-3xl p-7 border-l-4 border-transparent hover:border-primary shadow-[0_2px_20px_rgba(10,116,218,0.04)] hover:shadow-[0_8px_40px_rgba(10,116,218,0.10)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
