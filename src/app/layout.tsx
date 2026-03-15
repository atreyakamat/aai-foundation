import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "fallback",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "fallback",
});

export const metadata: Metadata = {
  title: "AAI (All About Innovation) | Global Foundation Supporting Ideas That Bring Change",
  description: "AAI is a global foundation that backs passionate entrepreneurs, women leaders, and bold startups using modern technology to solve real community challenges worldwide.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${dmSans.variable} font-sans antialiased bg-white text-[#111a22]`}
      >
        {children}
      </body>
    </html>
  );
}
