import { contactEmail, credits, links } from "@/content/site";

import { ExternalLink } from "./ui/ExternalLink";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/8 bg-sand px-6 pt-10 pb-8">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <p className="mb-2 text-[1.1rem]">
          For any questions, please contact us via{" "}
          <a href={`mailto:${contactEmail}`} className="font-medium text-link">
            {contactEmail}
          </a>
        </p>
        <p className="text-[0.9rem] text-subtle">
          Follow us on{" "}
          <ExternalLink href={links.linkedin} className="text-link">
            LinkedIn
          </ExternalLink>
        </p>
        <p className="mt-4 text-[0.7rem] text-subtle">
          Website created by{" "}
          <ExternalLink href={credits.website.href} className="text-link">
            {credits.website.name}
          </ExternalLink>{" "}
          · Logo created by{" "}
          <ExternalLink href={credits.logo.href} className="text-link">
            {credits.logo.name}
          </ExternalLink>
          .
        </p>
      </div>
    </footer>
  );
}
