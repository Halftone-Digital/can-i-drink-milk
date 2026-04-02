import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Platypi } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const platypi = Platypi({
  variable: "--font-platypi",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Can I Drink Milk?",
  description:
    "Find out if you might be lactose intolerant with our quick, research-backed self-assessment quiz. No data collected.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${platypi.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
