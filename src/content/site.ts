export const siteUrl = "https://qpflhackathon.github.io";

/** Prefixes a public/ file path with the base path, which Next doesn't add to metadata URLs. */
export const publicPath = (path: string) => `${process.env.BASE_PATH ?? ""}${path}`;

export const event = {
  name: "EPFL Quantum Hackathon",
  shortName: "Quantum Hackathon 2027",
  edition: "2nd Edition",
  dates: "March 12 - 14, 2027",
  startDate: "2027-03-12",
  endDate: "2027-03-14",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#committee", label: "Committee" },
  { href: "#challenges", label: "Challenges" },
  { href: "#practical", label: "Practical Info" },
  { href: "#2026", label: "Past Edition" },
  { href: "#contact", label: "Contact" },
];

export const links = {
  rules:
    "https://drive.google.com/file/d/1_Djqqxee0Qn7CyQc63CXTcZZHMFusObD/view?usp=share_link",
  venueMap:
    "https://plan.epfl.ch/?dim_floor=0&lang=en&dim_lang=en&tree_groups=centres_nevralgiques_grp%2Cmobilite_acces_grp%2Crestauration_et_commerces_grp%2Censeignement%2Cservices_campus_grp%2Cequipements_grp&tree_group_layers_centres_nevralgiques_grp=&tree_group_layers_mobilite_acces_grp=metro&tree_group_layers_restauration_et_commerces_grp=&tree_group_layers_enseignement=guichet_etudiants&tree_group_layers_services_campus_grp=information_epfl&tree_group_layers_equipements_grp=&baselayer_ref=grp_backgrounds&map_x=2532727&map_y=1152291&map_zoom=11",
  linkedin: "https://www.linkedin.com/company/epfl-quantum-hackathon",
};

export const contactEmail = "quantum-hackathon@epfl.ch";

export const credits = {
  website: { name: "Hugo Izadi", href: "https://www.linkedin.com/in/hugoizadi/" },
  logo: { name: "Nicolò Battocletti", href: "https://www.linkedin.com/in/nicolobattocletti/" },
};
