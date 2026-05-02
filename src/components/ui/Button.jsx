"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-[0_4px_20px_rgba(10,116,218,0.30)]",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary hover:bg-white/90 shadow-[0_4px_20px_rgba(255,255,255,0.20)]",
    ghost: "border-2 border-white/40 text-white hover:bg-white/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
