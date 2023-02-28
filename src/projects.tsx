export enum ProjectTags {
  GRAPHIC_DESIGN = "Graphic design",
  UX = "UX",
  TYPOGRAPHY = "Typography",
  MODELLING = "3D modellin",
  GENERATIVE = "Generative Art",
  VISUALIZATION = "Visualization",

  OTHER = "Other",
}

export const otherCategories: ProjectTags[] = [
  ProjectTags.VISUALIZATION,
  ProjectTags.GRAPHIC_DESIGN,
];

export type Project = {
  name: string;
  image: string;
  tags: ProjectTags[];
  path: string;
  component?: React.ReactNode;
};

export const projects: Project[] = [
  {
    name: "Cat café Kocourkov",
    image: "/cover_images/kocourkov_sign.png",
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/kocourkov",
  },
  {
    name: "Ahoj",
    image: "/cover_images/kocourkov_sign.png",
    tags: [ProjectTags.UX],
    path: "/ahoj",
  },
  {
    name: "Ahoj",
    image: "/cover_images/kocourkov_sign.png",
    tags: [ProjectTags.UX],
    path: "/ahoj1",
  },
  {
    name: "Ahoj",
    image: "/cover_images/kocourkov_sign.png",
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/ahoj2",
    component: <>Hello world</>,
  },
];
