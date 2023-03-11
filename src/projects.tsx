export enum ProjectTags {
  GRAPHIC_DESIGN = "Graphic design",
  UX = "UX",
  TYPOGRAPHY = "Typography",
  MODELLING = "3D modellin",
  GENERATIVE = "Generative Art",
  VISUALIZATION = "Visualization",
  VISUAL = "Visual identity",

  OTHER = "Other",
}

export const otherCategories: ProjectTags[] = [
  ProjectTags.VISUALIZATION,
  ProjectTags.GRAPHIC_DESIGN,
];

export type Project = {
  name: string;
  image: string;
  projectImages: string[];
  tags: ProjectTags[];
  path: string;
  date: Date;
  description: string;
  text: string;
  text2?: string;
  text3?: string;
  text4?: string;
  component?: React.ReactNode;
};

export const projects: Project[] = [
  {
    name: "Cat café Kocourkov",
    image: "/cover_images/kocourkov_sign.png",
    projectImages: ["/cover_images/kocourkov_sign.png", "/project_images/kocourkov_pictograms-16.png", "/project_images/kocourkov_ideograms-17.png", "/project_images/kocourkov_paper_cup.png", "/project_images/kocourkov_menu.png",],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/kocourkov",
    date: new Date(2019, 10, 1),
    description: "The visual identity for imaginary cat café",
    text: "Visual identity works with stylized cats and is combined with coffee stains. The cat positions are inspired by living with one chunky cat. It consists of logo, pictograms and ideograms, which can be used in some real café.",
  },
  {
    name: "ArcheryFont",
    image: "/cover_images/archeryfont_sign.png",
    projectImages: ["/project_images/archeryfont_banner.png", "/project_images/archeryfont_diplom.png", "/project_images/archeryfont_blue.png", "/project_images/archeryfont_score.png",],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/archeryfont",
    date: new Date(2020, 10, 1),
    description: "The font based on archery elements",
    text: "It's a linear font that is decorated with part of the arrow or target. Due to its high stylization, it's mainly used for headlines. This font also contains numbers and Czech localization. You can dowload it here - https://typefoundry.fi.muni.cz/cs/archery",
  },
  {
    name: "Department of Anthropology",
    image: "/cover_images/anthropology_sign.png",
    projectImages: ["/project_images/anthropology_banner.png", "/project_images/anthropology_door.png", "/project_images/anthropology_poster.png", "/project_images/anthropology_wcman.png", "/project_images/anthropology_wcwoman.png", "/project_images/anthropology_human.png",],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/department_anthropology",
    date: new Date(2020, 3, 1),
    description: "string",
    text: "string",
  },
  {
    name: "Ahoj",
    image: "/cover_images/kocourkov_sign.png",
    projectImages: ["/project_images/kocourkov_pictograms-16.png", "/project_images/kocourkov_ideograms-17.png", "/project_images/kocourkov_paper_cup.png", "/project_images/kocourkov_menu.png",],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/ahoj2",
    date: new Date(2020, 3, 1),
    description: "string",
    text: "string",
    component: <>Hello world</>,
  },
];
