"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  Gauge,
  Droplets,
  Zap,
  CalendarClock,
  Video,
  SunMedium,
  Speaker,
  CookingPot,
  CircleDot,
} from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const appFeatures = [
  { icon: Video, label: "Live Camera Feed" },
  { icon: Gauge, label: "Food Level Monitor (70%)" },
  { icon: Droplets, label: "Water Level Monitor (60%)" },
  { icon: Zap, label: "Instant Feed Now Button" },
  { icon: CalendarClock, label: "Custom Feeding Schedule" },
];

const deviceFeatures = [
  { icon: Camera, label: "HD Camera with Night Vision" },
  { icon: SunMedium, label: "LED Control Panel" },
  { icon: Speaker, label: "Built-in Speaker" },
  { icon: CookingPot, label: "Dual Food + Water Dispensing" },
  { icon: CircleDot, label: "Stainless Steel Bowls" },
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

export default function AppDeviceExperience() {
  return (
    <section id="app-device" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center mb-16">
          <SectionLabel>Complete Ecosystem</SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-bold text-heading">
            App + Device Experience
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* App Column */}
          <FadeUp>
            <div className="bg-card rounded-3xl p-8 h-full">
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-heading mb-6">
                PetNexus App
              </h3>
              <div className="relative rounded-2xl overflow-hidden bg-white mb-6">
                <Image
                  src="/images/appmockup.jpeg"
                  alt="PetNexus mobile app screenshot"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {appFeatures.map((f) => (
                  <motion.li
                    variants={listItem}
                    key={f.label}
                    className="flex items-center gap-3"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary shrink-0">
                      <f.icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-body">
                      {f.label}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </FadeUp>

          {/* Device Column */}
          <FadeUp delay={0.15}>
            <div className="bg-card rounded-3xl p-8 h-full">
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-heading mb-6">
                Smart Device
              </h3>
              <div className="relative rounded-2xl overflow-hidden bg-white mb-6">
                <Image
                  src="/images/device.jpeg"
                  alt="PetNexus smart feeder device"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {deviceFeatures.map((f) => (
                  <motion.li
                    variants={listItem}
                    key={f.label}
                    className="flex items-center gap-3"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent/10 text-accent shrink-0">
                      <f.icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-body">
                      {f.label}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
