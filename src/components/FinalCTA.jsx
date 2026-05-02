"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-primary to-[#1A8FEB] py-20 lg:py-28">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Smarter Care. Happier Pets.
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Join thousands of pet owners who trust PetNexus to keep their
              furry friends fed, hydrated, and happy — even from miles away.
            </p>
          </FadeUp>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button variant="white">Download PetNexus App</Button>
            <Button variant="ghost">View All Features</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
