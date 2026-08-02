import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Chef Tristan | Personal Chef & Meal Prep",
    template: "%s | Chef Tristan",
  },
  description:
    "Former Earls Kitchen & Bar chef sharing scratch-made recipes and offering private meal-prep services. Real food, cooked with care.",
  openGraph: {
    title: "Chef Tristan | Personal Chef & Meal Prep",
    description:
      "Former Earls Kitchen & Bar chef sharing scratch-made recipes and offering private meal-prep services.",
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
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-walnut font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
