import { SponsorLogo } from "@/components/SponsorLogo";
import { Section, SectionHeading } from "@/components/ui/Section";
import { sponsors, type SponsorTier } from "@/content/sponsors";

const tierGrids: Record<SponsorTier, string> = {
  gold: "gap-5 grid-cols-1 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3",
  bronze: "gap-3 grid-cols-1 min-[481px]:grid-cols-2 min-[1001px]:grid-cols-5",
};

export function Sponsors() {
  return (
    <Section id="sponsors" tone="muted">
      <SectionHeading>Sponsors</SectionHeading>
      <p className="mb-8 text-[0.98rem]">
        The EPFL Quantum Hackathon is made possible by the support of our sponsors.
      </p>

      {(Object.keys(tierGrids) as SponsorTier[]).map((tier) => (
        <div key={tier} className={`grid items-center ${tierGrids[tier]}`}>
          {sponsors
            .filter((sponsor) => sponsor.tier === tier)
            .map((sponsor) => (
              <SponsorLogo key={sponsor.name} sponsor={sponsor} />
            ))}
        </div>
      ))}
    </Section>
  );
}
