import type { Metadata } from "next";
import { DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jacwalste.com",
  description: "Hand-coded cognition from a forest terminal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="grain"></div>
        <div className="scan-line"></div>
        <Navigation />
        <main className="mx-auto max-w-4xl px-6 py-12 fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
