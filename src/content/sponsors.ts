import type { StaticImageData } from "next/image";

import alicebobLogo from "@assets/images/Logo-AB-2025.png";
import quandelaLogo from "@assets/images/Logo-Quandela-2025.webp";
import quoblyLogo from "@assets/images/Logo-Quobly-2025.png";
import sqiLogo from "@assets/images/Logo-SQI.png";
import zurichInstrumentsLogo from "@assets/images/Logo-ZurichInstrument-2025.png";
import axaLogo from "@assets/images/logo_AXA.png";
import qseLogo from "@assets/images/logo_QSE_pos_red.png";
import qbraidLogo from "@assets/images/qbraid_logo_burn.png";

export type SponsorTier = "gold" | "bronze";

export type Sponsor = {
  name: string;
  href: string;
  logo: StaticImageData;
  tier: SponsorTier;
  /** Overrides the tier's default logo size, to balance logos visually. */
  logoClassName?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Quandela",
    href: "https://www.quandela.com",
    logo: quandelaLogo,
    tier: "gold",
  },
  {
    name: "Quobly",
    href: "https://www.quobly.io",
    logo: quoblyLogo,
    tier: "gold",
  },
  {
    name: "Alice & Bob",
    href: "https://alice-bob.com",
    logo: alicebobLogo,
    tier: "gold",
  },
  {
    name: "EPFL QSE Center",
    href: "https://www.epfl.ch/research/domains/quantum-center/",
    logo: qseLogo,
    tier: "bronze",
    logoClassName: "max-h-[90px] max-w-[min(100%,170px)]",
  },
  {
    name: "qBraid",
    href: "https://www.qbraid.com",
    logo: qbraidLogo,
    tier: "bronze",
    logoClassName: "max-h-[35px] max-w-[min(100%,220px)]",
  },
  {
    name: "Swiss Quantum Initiative (SCNAT)",
    href: "https://quantum.scnat.ch/fr",
    logo: sqiLogo,
    tier: "bronze",
    logoClassName: "max-h-[90px] max-w-[min(100%,170px)]",
  },
  {
    name: "AXA",
    href: "https://www.axa.ch/",
    logo: axaLogo,
    tier: "bronze",
    logoClassName: "max-h-[80px] max-w-[80px]",
  },
  {
    name: "Zurich Instruments",
    href: "https://www.zhinst.com",
    logo: zurichInstrumentsLogo,
    tier: "bronze",
    logoClassName: "max-h-[70px] max-w-[min(100%,230px)]",
  },
];
