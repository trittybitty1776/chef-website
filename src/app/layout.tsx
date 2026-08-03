import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trittybitty1776.github.io/chef-website"),
  title: {
    default: "Chef Tristan | Private Chef & Weekly Meal Prep",
    template: "%s | Chef Tristan",
  },
  description:
    "Restaurant-trained cooking for private tables. Scratch-made recipes, weekly meal prep, and in-home dinners from a chef with over a decade in professional kitchens.",
  openGraph: {
    title: "Chef Tristan | Private Chef & Weekly Meal Prep",
    description:
      "Restaurant-trained cooking for private tables. Scratch-made recipes, weekly meal prep, and in-home dinners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bone font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
