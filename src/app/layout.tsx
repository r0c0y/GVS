import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { Preloader } from "@/components/preloader";
import Noise from "@/components/ui/noise";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GVS | The Future of Digital Work",
  description: "Gondovirtualsystems - Revolutionizing how people interact with technology. One platform, infinite possibilities.",
  openGraph: {
    title: "GVS | The Future of Digital Work",
    description: "Gondovirtualsystems - Revolutionizing how people interact with technology.",
    url: "https://gvs.com",
    siteName: "GVS",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GVS | The Future of Digital Work",
    description: "Gondovirtualsystems - Revolutionizing how people interact with technology.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground cursor-none`}
      >
        <Noise patternAlpha={10} />
        <Preloader />
        <SmoothScroll />
        <CustomCursor />
        <AnalyticsTracker />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
