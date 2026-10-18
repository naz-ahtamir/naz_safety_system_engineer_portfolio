import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-typewriter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nasaruddin, ST — Safety System Engineer Assistant",
    template: "%s | Nasaruddin, ST",
  },
  description:
    "Portfolio of Nasaruddin, ST — Safety System Engineer Assistant specializing in OHSMS auditing, hazard identification, risk assessment, and safety management systems in industrial environments.",
  keywords: [
    "Nasaruddin",
    "Safety Engineer",
    "Safety System Engineer Assistant",
    "OHSMS",
    "Occupational Health and Safety",
    "HIRA",
    "Risk Assessment",
    "Safety Management",
    "K3",
    "HSE",
    "Morowali",
    "PT QMB",
    "Industrial Safety",
    "Safety Audit",
  ],
  authors: [{ name: "Nasaruddin, ST" }],
  creator: "Nasaruddin, ST",
  metadataBase: new URL("https://nasaruddin.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nasaruddin.vercel.app",
    siteName: "Nasaruddin, ST",
    title: "Nasaruddin, ST — Safety System Engineer Assistant",
    description:
      "Portfolio of Nasaruddin, ST — Safety System Engineer Assistant specializing in OHSMS auditing, hazard identification, risk assessment, and safety management systems.",
    images: [
      {
        url: "/profile.webp",
        width: 800,
        height: 800,
        alt: "Nasaruddin, ST — Safety System Engineer Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasaruddin, ST — Safety System Engineer Assistant",
    description:
      "Portfolio of Nasaruddin, ST — Safety System Engineer Assistant specializing in OHSMS auditing, hazard identification, and risk assessment.",
    images: ["/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={courierPrime.variable}>
      <body className={courierPrime.className}>
        <div className="min-h-screen flex flex-col max-w-[65vw] px-8 pt-10">
          <header className="mb-10 space-y-4">
            <h1
              className="uppercase font-bold leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              NASARUDDIN, ST
            </h1>
            <Navbar />
          </header>

          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
