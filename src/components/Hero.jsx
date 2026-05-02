"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, BatteryCharging } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/pet.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-heading/80 via-heading/60 to-heading/30 z-[1]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-12 items-center py-10 lg:py-12">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-white/90">
              Now Available
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.08] tracking-tight text-white">
            Smart Feeding.{" "}
            <span className="text-accent">Real Connection.</span>
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-lg leading-relaxed">
            Control, monitor, and care for your pet anytime, anywhere.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="white">Download App</Button>
            <Button variant="ghost">View Features</Button>
          </div>
        </motion.div>

        {/* Right — Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center order-first lg:order-last"
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            <Image
              src="/images/product.png"
              alt="PetNexus smart automatic pet feeder front view"
              width={600}
              height={600}
              className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              priority
            />

            {/* Floating card — bottom-left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-8 -left-4 sm:left-0 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_4px_32px_rgba(0,0,0,0.15)] flex items-center gap-3"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">Next Feeding</p>
                <p className="text-sm font-semibold text-heading">In 2 min</p>
              </div>
            </motion.div>

            {/* Floating card — top-right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-8 -right-4 sm:right-0 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_4px_32px_rgba(0,0,0,0.15)] flex items-center gap-3"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-50 text-green-500">
                <BatteryCharging size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">Battery</p>
                <p className="text-sm font-semibold text-heading">80%</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
