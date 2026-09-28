import Image from "next/image";

import type { Sponsor } from "@/content/sponsors";

import { ExternalLink } from "./ui/ExternalLink";

const tierStyles = {
  gold: { tile: "min-h-[180px] p-4", logo: "max-h-[95px] max-w-full" },
  bronze: { tile: "min-h-[100px]", logo: "max-h-[44px] max-w-[min(100%,220px)]" },
};

export function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  const styles = tierStyles[sponsor.tier];

  return (
    <ExternalLink
      href={sponsor.href}
      aria-label={`${sponsor.name} website`}
      className={`flex items-center justify-center overflow-hidden ${styles.tile}`}
    >
      <Image
        src={sponsor.logo}
        alt={`${sponsor.name} logo`}
        className={`h-auto w-auto object-contain ${sponsor.logoClassName ?? styles.logo}`}
      />
    </ExternalLink>
  );
}
