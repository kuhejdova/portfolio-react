export enum ProjectTags {
  GRAPHIC_DESIGN = "Graphic design",
  UX = "UX",
  TYPOGRAPHY = "Typography",
  MODELLING = "3D modelling",
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
    projectImages: [
      "/cover_images/kocourkov_sign.png",
      "/project_images/kocourkov_pictograms-16.png",
      "/project_images/kocourkov_ideograms-17.png",
      "/project_images/kocourkov_paper_cup.png",
      "/project_images/kocourkov_menu.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/kocourkov",
    date: new Date(2019, 10, 1),
    description: "The visual identity for imaginary cat café",
    text: "Visual identity works with stylized cats and is combined with coffee stains. The cat positions are inspired by living with one chunky cat. It consists of logo, pictograms and ideograms, which can be used in some real café.",
  },
  {
    name: "ArcheryFont",
    image: "/cover_images/archeryfont_sign.png",
    projectImages: [
      "/project_images/archeryfont_banner.png",
      "/project_images/archeryfont_diplom.png",
      "/project_images/archeryfont_blue.png",
      "/project_images/archeryfont_score.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/archeryfont",
    date: new Date(2020, 10, 1),
    description: "The font based on archery elements",
    text: "It's a linear font that is decorated with part of the arrow or target. Due to its high stylization, it's mainly used for headlines. This font also contains numbers and Czech localization. You can dowload it here - https://typefoundry.fi.muni.cz/cs/archery",
  },
  {
    name: "Department of Anthropology",
    image: "/cover_images/anthropology_sign.png",
    projectImages: [
      "/project_images/anthropology_banner.png",
      "/project_images/anthropology_door.png",
      "/project_images/anthropology_poster.png",
      "/project_images/anthropology_wcman.png",
      "/project_images/anthropology_wcwoman.png",
      "/project_images/anthropology_human.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/department_anthropology",
    date: new Date(2020, 3, 1),
    description: "string",
    text: "string",
  },
  {
    name: "Babylonfest",
    image: "/cover_images/babylonfest_sign.png",
    projectImages: [
      "/cover_images/babylonfest_sign.png",
      "/project_images/babylonfest_food.png",
      "/project_images/babylonfest_badge.png",
      "/project_images/babylonfest_name1.png",
      "/project_images/babylonfest_poster.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/babylonfest",
    date: new Date(2020, 4, 1),
    description: "string",
    text: "string",
  },
  {
    name: "Wake up call poster",
    image: "/cover_images/wakeup_sign.png",
    projectImages: [
      "/cover_images/wakeup_sign.png",
      "/project_images/wakeup_poster1.png",
      "/project_images/wakeup_poster3.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/wake_up_call",
    date: new Date(2020, 5, 1),
    description: "string",
    text: "string",
  },
  {
    name: "Garden app",
    image: "/cover_images/garden_sign.png",
    projectImages: [
      "/cover_images/garden_sign.png",
      "/project_images/garden_web_fin1.png",
      "/project_images/garden_web_fin2.png",
      "/project_images/garden_web_fin3.png",
      "/project_images/garden_web_fin4.png",
    ],
    tags: [ProjectTags.UX],
    path: "/garden",
    date: new Date(2020, 6, 1),
    description: "string",
    text: "Odkazy web - https://pv278-garden.web.app/ prototyp - https://www.figma.com/file/u47pOhmfyumOV0gJh14ncu/prototyp?node-id=5%3A58",
  },
  {
    name: "Medus-e",
    image: "/cover_images/meduse_sign.png",
    projectImages: [
      "/cover_images/meduse_sign.png",
      "/project_images/meduse_1.png",
      "/project_images/meduse_2.png",
    ],
    tags: [ProjectTags.MODELLING],
    path: "/meduse",
    date: new Date(2020, 11, 1),
    description: "string",
    text: "String",
  },
  {
    name: "Human head",
    image: "/cover_images/head_sign.png",
    projectImages: [
      "/cover_images/head_sign.png",
      "/project_images/head_1.png",
      "/project_images/head_2.png",
    ],
    tags: [ProjectTags.MODELLING],
    path: "/human_head",
    date: new Date(2021, 1, 1),
    description: "3D model of man's head with heterochromia eyes",
    text: "Sem přijde i video, nějak",
  },
  {
    name: "Tree clock",
    image: "/cover_images/treeclock_sign.png",
    projectImages: [
      "/project_images/treeclock_1.png",
      "/project_images/treeclock_2.png",
      "/project_images/treeclock_3.png",
      "/project_images/treeclock_4.png",
    ],
    tags: [ProjectTags.GENERATIVE],
    path: "/treeclock",
    date: new Date(2020, 11, 2),
    description: "string",
    text: "String",
  },
  {
    name: "Archery jersey",
    image: "/cover_images/archeryjersey_me.jpg",
    projectImages: [
      "/cover_images/archeryjersey_me.jpg",
      "/project_images/archeryjersey_front.jpg",
      "/project_images/archeryjersey_back.jpg",
      "/project_images/archeryjersey_mock1.png",
      "/project_images/archeryjersey_mock2.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/archeryjersey",
    date: new Date(2020, 6, 2),
    description: "Redesign of the plain white jerseys for Archery club Ostrava",
    text: "I have chosen two shades of blue, the lighter represents the color of the Ostrava city, and the darker means one of the colors of the Moravian-Silesian Region.",
  },


  // SOMETHING WITH COMPONENT
  // {
  //   name: "Ahoj",
  //   image: "/cover_images/kocourkov_sign.png",
  //   projectImages: ["/project_images/kocourkov_pictograms-16.png", "/project_images/kocourkov_ideograms-17.png", "/project_images/kocourkov_paper_cup.png", "/project_images/kocourkov_menu.png",],
  //   tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
  //   path: "/ahoj2",
  //   date: new Date(2020, 3, 1),
  //   description: "string",
  //   text: "string",
  //   component: <>Hello world</>,
  // },
];
