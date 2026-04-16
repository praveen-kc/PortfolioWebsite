import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PersonJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://praveenkc.com"),
  title: {
    default: "Praveen K C — Lead Unity Developer & XR Specialist",
    template: "%s | Praveen K C — Lead Unity Developer & XR Specialist",
  },
  description:
    "12+ years building enterprise VR training simulations, WebGL interactive experiences, and cross-platform XR solutions. Lead Unity Developer & XR Specialist.",
  keywords: [
    "Unity Developer",
    "XR Developer",
    "VR Developer",
    "AR Developer",
    "WebGL",
    "Unity 3D",
    "Meta Quest",
    "HTC Vive",
    "India",
  ],
  authors: [{ name: "Praveen K C", url: "https://praveenkc.com" }],
  creator: "Praveen K C",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://praveenkc.com",
    siteName: "Praveen K C Portfolio",
    title: "Praveen K C — Lead Unity Developer & XR Specialist",
    description:
      "12+ years building enterprise VR, WebGL, and XR solutions.",
    images: [
      {
        url: "/og?title=Praveen+K+C&subtitle=Lead+Unity+Developer+%C2%B7+XR+Specialist",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none"
        >
          Skip to main content
        </a>
        <PersonJsonLd />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
