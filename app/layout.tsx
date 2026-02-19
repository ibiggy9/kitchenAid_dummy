import type { Metadata } from "next";
import { Geist } from "next/font/google";
import AgentforceChat from "@/components/AgentforceChat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KitchenAid | Make It Together",
  description: "Discover iconic KitchenAid appliances — stand mixers, blenders, coffee makers, and more. Built to make every meal a masterpiece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <AgentforceChat />
      </body>
    </html>
  );
}
