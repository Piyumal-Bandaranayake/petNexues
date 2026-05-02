import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "App", href: "#app-device" },
];

const supportLinks = [
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Setup Guide", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <FadeUp className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <Image
                  src="/images/petlogo.png"
                  alt="PetNexus Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-sora)] text-white">
                PetNexus
              </span>
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Smart Care for Happy Pets. Automated feeding, live monitoring,
              and full app control — all in one beautiful device.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <Mail size={14} />
              hello@petnexus.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} />
              +1 (800) 555-PETS
            </span>
          </div>
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} PetNexus. All rights reserved.
          </p>
        </div>
      </FadeUp>
    </footer>
  );
}
