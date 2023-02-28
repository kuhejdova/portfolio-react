export enum ProjectTags {
  GRAPHIC_DESIGN = "Graphic design",
  UX = "UX",
  TYPOGRAPHY = "Typography",
  MODELLING = "3D modellin",
  GENERATIVE = "Generative Art",
  VISUALIZATION = "Visualization"
}

export type Project = {
  name: string;
  image: string;
  tags: ProjectTags[];
  path: string;
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
    path: "/ahoj",
  },
  {
    name: "Ahoj",
    image: "/cover_images/kocourkov_sign.png",
    tags: [ProjectTags.UX],
    path: "/ahoj",
  },
];
