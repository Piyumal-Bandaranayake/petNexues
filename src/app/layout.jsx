import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "PetNexus — Smart Automatic Pet Feeder with App Control",
  description:
    "Control, monitor, and care for your pet anytime, anywhere. Smart feeding schedules, live HD camera, water dispensing, and real-time alerts — all from the PetNexus app.",
  keywords: [
    "smart pet feeder",
    "automatic pet feeder",
    "pet camera",
    "app controlled feeder",
    "PetNexus",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
