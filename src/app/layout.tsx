import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VVSPL Tech - Vision meets Velocity",
  description: "We build scalable software and AI-powered solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col bg-white text-black min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer (add later) */}
        <Footer />

      </body>
    </html>
  );
}