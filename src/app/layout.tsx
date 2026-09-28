import type { Metadata } from "next";
import { Lora, Space_Grotesk } from "next/font/google";

import favicon from "@assets/images/red_transparent.png";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteUrl } from "@/content/site";

import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "EPFL Quantum Hackathon 2027 | Lausanne, Switzerland",
  description: "Join the EPFL Quantum Hackathon in Lausanne, Switzerland on March 12-14, 2027.",
  keywords: [
    "EPFL",
    "Quantum Hackathon",
    "Quantum Computing",
    "Lausanne",
    "Programming",
    "Hackathon",
    "Quantum Science",
    "Quantum Engineering",
    "Quantum Challenges",
    "Innovation",
    "Technology",
    "Collaboration",
    "Networking",
    "Prizes",
  ],
  icons: { icon: { url: favicon.src, type: "image/png", sizes: "32x32" } },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "EPFL Quantum Hackathon 2027",
    description:
      "Join the premier quantum computing hackathon at EPFL. Build innovative projects and collaborate with quantum experts.",
    images: ["/assets/images/og-preview.png"],
  },
  verification: { google: "2pYWuJ-tNP5xi4Yy2YxbjZFLzrxeaA31fk44xfrjtmo" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${spaceGrotesk.variable} bg-white font-main leading-[1.6] text-taupe`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
