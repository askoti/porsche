import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ASKPORSCHE – Precision in Motion",
    template: "%s | ASKPORSCHE", // for child pages, e.g. "/configurator" → "Configurator | ASKPORSCHE"
  },
  description:
    "Experience the Porsche 911 like never before. Scroll-driven 3D engineering showcase — precision engineered, real-time rendered, built with passion.",
  keywords: [
    "Porsche",
    "911",
    "Porsche 911",
    "3D experience",
    "scroll animation",
    "Three.js",
    "React Three Fiber",
    "automotive design",
    "car configurator",
    "engineering",
  ],
  authors: [
    {
      name: "Kastriot Aliu",
      url: "https://kastriotaliu.com", // ← replace with your actual link
    },
  ],
  creator: "Kastriot Aliu",
  publisher: "ASKPORSCHE",
  // Open Graph / Social sharing (very important for sharing previews)
  openGraph: {
    title: "ASKPORSCHE – Precision in Motion",
    description:
      "Engineering isn’t just built. It’s sculpted. Explore the iconic Porsche 911 in real-time 3D with scroll-driven camera choreography.",
    url: "https://askporsche.netlify.app", // ← replace with real domain
    siteName: "ASKPORSCHE",
    images: [
      {
        url: "/og-image.jpg",           // ← create a 1200×630px image (Porsche silhouette or render)
        width: 1200,
        height: 630,
        alt: "Porsche 911 3D scroll experience – ASKPORSCHE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASKPORSCHE – Precision in Motion",
    description:
      "Real-time 3D Porsche 911 experience. Scroll to discover engineering, design, and performance.",
    images: ["/twitter-image.jpg"],     // ← same or 1200×675 optimized version
    creator: "@yourhandle",             // ← if you have Twitter/X
  },
  // Icons & app manifest (optional but nice for PWA/mobile feel)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-icon.png",
    shortcut: ["/shortcut-icon.png"],
  },
  // Optional: theme color matches your dark Porsche aesthetic
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
    { media: "(prefers-color-scheme: light)", color: "#111111" },
  ],
  // Prevent search engines from indexing if this is still a prototype
  // robots: process.env.NODE_ENV === "production" ? "index, follow" : "noindex",
  // alternates: {
  //   canonical: "https://your-domain.com",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
