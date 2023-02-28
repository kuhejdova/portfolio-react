export enum ProjectTags {
  GRAPHICS = "Graphic design",
  UI = "UX",
}

export type Project = {
  name: string;
  image: string;
  tags: ProjectTags[];
  path: string;
};

export const projects: Project[] = [
  {
    name: "Ahoj",
    image: "lipsum",
    tags: [ProjectTags.UI, ProjectTags.GRAPHICS],
    path: "/ahoj",
  },
  {
    name: "Ahoj",
    image: "lipsum",
    tags: [ProjectTags.UI],
    path: "/ahoj",
  },
  {
    name: "Ahoj",
    image: "lipsum",
    tags: [ProjectTags.UI],
    path: "/ahoj",
  },
  {
    name: "Ahoj",
    image: "lipsum",
    tags: [ProjectTags.UI],
    path: "/ahoj",
  },
];
