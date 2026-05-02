"use client";

import { motion } from "framer-motion";
import { Plug, Wifi, Droplets, Play } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    icon: Plug,
    num: "01",
    title: "Plug In",
    desc: "Connect to any standard power outlet.",
  },
  {
    icon: Wifi,
    num: "02",
    title: "Connect Wi-Fi",
    desc: "Use the app to connect your feeder.",
  },
  {
    icon: Droplets,
    num: "03",
    title: "Fill Containers",
    desc: "Add food and water to the reservoirs.",
  },
  {
    icon: Play,
    num: "04",
    title: "Start Feeding",
    desc: "Your pet is all set — you're done!",
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

export default function SetupSteps() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center mb-14">
          <SectionLabel>Quick Start</SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-heading">
            Up and Running in Under 5 Minutes
          </h2>
        </FadeUp>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((s) => (
            <motion.div
              key={s.num}
              variants={item}
              className="bg-white rounded-3xl p-7 text-center shadow-[0_4px_32px_rgba(10,116,218,0.06)] hover:shadow-[0_8px_40px_rgba(10,116,218,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              <span className="block font-[family-name:var(--font-sora)] text-4xl font-extrabold text-primary/15 mb-3">
                {s.num}
              </span>
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mx-auto mb-4">
                <s.icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
