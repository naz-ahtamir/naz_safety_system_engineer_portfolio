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

const siteUrl = "https://www.nasaruddin-st.site";

export const metadata: Metadata = {
  title: {
    default: "Nasaruddin, ST — Safety System Engineer Assistant",
    template: "%s | Nasaruddin, ST",
  },
  description:
    "Portfolio of Nasaruddin, ST — Safety System Engineer Assistant specializing in OHSMS auditing, hazard identification, risk assessment, and safety management systems in industrial environments.",
  keywords: [
    "Nasaruddin ST",
    "nasaruddin-st",
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
    "SMK3",
    "Morowali",
    "PT QMB",
    "Industrial Safety",
    "Safety Audit",
    "nasaruddin-st.site",
  ],
  authors: [{ name: "Nasaruddin, ST" }],
  creator: "Nasaruddin, ST",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nasaruddin ST",
  alternateName: "nasaruddin-st",
  url: siteUrl,
  image: `${siteUrl}/profile.webp`,
  jobTitle: "Safety System Engineer Assistant",
  description:
    "Safety professional specializing in OHSMS auditing, hazard identification, risk assessment, and safety management systems in industrial environments.",
  worksFor: {
    "@type": "Organization",
    name: "PT. QMB New Energy Materials",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Morowali",
      addressRegion: "Central Sulawesi",
      addressCountry: "ID",
    },
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Hasanuddin University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Makassar",
      addressCountry: "ID",
    },
  },
  knowsAbout: [
    "OHSMS Auditing",
    "SMK3",
    "Hazard Identification",
    "Risk Assessment",
    "ISO 45001",
    "Safety Management Systems",
    "K3",
    "HSE",
  ],
  sameAs: ["https://linkedin.com/in/nasaruddin-st"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={courierPrime.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
