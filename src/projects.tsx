import ProjectPageAnthropology from "./components/ProjectPageAnthropology";
import ProjectPageArcheryfont from "./components/ProjectPageArcheryfont";
import ProjectPageArcheryResults from "./components/ProjectPageArcheryResults";
import ProjectPageBabylonfest from "./components/ProjectPageBabylonfest";
import ProjectPageGarden from "./components/ProjectPageGarden";
import ProjectPageHandicraftBooks from "./components/ProjectPageHandicraftBooks";
import ProjectPageMeduse from "./components/ProjectPageMeduse";
import ProjectPageRewriteTheStars from "./components/ProjectPageRewriteTheStars";
import ProjectPageVisegradGroup from "./components/ProjectPageVisegradGroup";
import ProjectPageWakeUpCall from "./components/ProjectPageWakeUpCall";

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
  tools: string[];
  component?: React.ReactNode | ((project: Project) => React.ReactNode);
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
    tools: ["Adobe Illustrator"],
    description: "The visual identity for imaginary cat café",
    text: 'Visual identity works with stylized cats and is combined with coffee stains. Cats are simple and linear, and the cat positions are inspired by living with one chunky cat. Coffee stains are in the brown shades to create some playful element. There is logo of the café with its name Kocourkov ("the land of the cats"), pictograms and ideograms, which can be used in some real café.',
  },
  {
    name: "ArcheryFont",
    image: "/cover_images/archeryfont_sign.png",
    projectImages: [
      "/project_images/archeryfont_banner.png",
      "/project_images/archeryfont_diplom.png",
      "/project_images/archeryfont_blue.png",
      "/project_images/archeryfont_score.png",
      "/project_images/archeryfont_liga.png",
      "/project_images/archeryfont_trefa.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/archeryfont",
    date: new Date(2020, 10, 1),
    tools: ["Adobe Illustrator", "Fontlab 3"],
    description: "The font based on archery elements",
    text: "It's a linear font that is decorated with parts of the arrow or target. Due to its high stylization, it's mainly used for headlines. This font also contains numbers and Czech localization. You can dowload it here - https://typefoundry.fi.muni.cz/cs/archery",
    component: (project) => <ProjectPageArcheryfont project={project} />,
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
    tools: ["Adobe Illustrator"],
    description:
      "Competiton to create visual identity for Department of Anthropology at MUNI",
    text: "The task for this competiton was to create visual identity for Department of Anthropology at the Faculty of science at Masaryk univerzity. I didn't win this competition, but this was my idea. We had to work with the existing visual identity of Faculty of science hence the green color and Masaryk university logo. I used the letters from the MUNI font and I created simple bones and humans, which I combined with the green color.",
    component: (project) => <ProjectPageAnthropology project={project} />,
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
    tools: ["Adobe Illustrator"],
    description: "Competiton to create visual identity for Babylonfest",
    text: "Babylonfest is the festival of the minorities living in Brno city. The task was to create new visual identity which can be used on many objects and merch during the festival. The competition was canceled due to covid, but this is visual identity I have prepared. The main idea was to recreate the babylon tower with the letters and to use more colors to point out the diversity.",
    component: (project) => <ProjectPageBabylonfest project={project} />,
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
    tools: ["Adobe Illustrator"],
    description: "Poster competition Wake up call",
    text: "The topic for 11th Virtual bienale Prague 2020 was Wake up call. The keywords were climate change, pandemic, responsibility, zerowaste, human, nature, public space. One message, one goal: to inspire people with something positive. \n I wanted to point out the importance of our attitude to the nature, that our children and trees are growing together and should be living in the harmony.",
    component: (project) => <ProjectPageWakeUpCall project={project} />,
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
      "/project_images/garden_persona.jpg",
      "/project_images/garden_storyboard.jpg",
    ],
    tags: [ProjectTags.UX],
    path: "/garden",
    date: new Date(2020, 6, 1),
    tools: ["Figma", "React"],
    description: "Gardening app for the helpless gardeners",
    text: "The app was created in collaboration with Martin Petr, I have focused on the design part and he programmed the app. Our task was to design and create an app which is using the data about the weather - temperature, sunlight and pressure. We have decided to create an app that can help predict when is the best time to plant some basic plants in the garden.",
    component: (project) => <ProjectPageGarden project={project} />,
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
    tools: ["Blender"],
    description: "This robot can help you... or petrify you",
    text: '3D model of the robot, which was inpired by Wall-e robot from Pixar and by Meduse from the Ancient Greek myths. The bottom part is cleaning robot, which can help you at home and it has many hands coming from the "head". It also has blindfold, as in the myth you were not supposed to look to Medusa\'s eyes. If you look at her, she will petrify you, as this housecleening robot will do.',
    component: (project) => <ProjectPageMeduse project={project} />,
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
    tools: ["Blender"],
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
    tools: ["Processing"],
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
    tools: ["Adobe Illustrator"],
    description: "Redesign of the plain white jerseys for Archery club Ostrava",
    text: "The goal was to create a new design of archery jerseys for the Archery club Ostrava Mariánské hory. Original jerseys were plain white with the logo in the front and in the back. I wanted to keep it simple and to select colors that are suitable for the amount of the time spend on the sun and in the nature. I have chosen two shades of blue, the lighter represents the color of the Ostrava city, and the darker means one of the colors of the Moravian-Silesian Region.",
  },
  {
    name: "Rewrite the stars",
    image: "/cover_images/rts_sign.png",
    projectImages: [
      "/project_images/rts_5.png",
      "/project_images/rts_1.png",
      "/project_images/rts_3.png",
      "/project_images/rts_2.png",
      "/project_images/rts_4.png",
    ],
    tags: [ProjectTags.GENERATIVE],
    path: "/rewritethestars",
    date: new Date(2021, 2, 1),
    tools: ["Processing 3", "Kinect for Windows v2, knihovna KinectPV2"],
    description: "Interactive project where you can be a part of the night sky",
    text: "Rewrite the stars je kreativní projekt, postavený na myšlence, že všichni jsme složení z hvězdného prachu, tedy každý z nás je unikátním seskupením hvězd. Zároveň máme moc ovlivňovat podobu jiných věcí a schopnost tvořit. Pomocí Kinectu je snímána postava člověka, která se zobrazí složená z tísíců hvězdiček a jedna hvězda, která je počátkem tvorby. Člověk může tuto hvězdu chytit a začít spojovat své vlastní souhvězdí tak jak to cítí, nijak omezován rovnými čárami.",
    component: (project) => <ProjectPageRewriteTheStars project={project} />,
  },
  {
    name: "Dentist's visual identity",
    image: "/cover_images/ak_sign.png",
    projectImages: [
      "/project_images/ak_logo.png",
      "/project_images/ak_business_cards.jpg",
      "/project_images/ak_stationery.png",
      "/project_images/ak_web.png",
      "/project_images/ak_face_masks.jpg",
      "/project_images/ak_tshirt.png",
      "/project_images/ak_manual.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/alenakuhejdova",
    date: new Date(2021, 1, 1),
    tools: ["Adobe Illustrator"],
    description: "string",
    text: "String",
  },
  {
    name: "Handicraft book edition",
    image: "/cover_images/handicraft_sign.png",
    projectImages: [
      "/cover_images/handicraft_sign.png",
      "/project_images/hackovani_obalka.png",
      "/project_images/hackovani_prebal.png",
      "/project_images/hackovani_prebal_horni_strana.png",
      "/project_images/hackovani_predsadka.png",
      "/project_images/hackovani_vnitrek_prvni_strana.png",

      "/project_images/kaligrafie_obalka.png",
      "/project_images/kaligrafie_prebal.png",
      "/project_images/kaligrafie_prebal_horni_strana.png",
      "/project_images/kaligrafie_predsadka.png",
      "/project_images/kaligrafie_vnitrek_prvni_strana.png",

      "/project_images/koralky_obalka.png",
      "/project_images/koralky_prebal.png",
      "/project_images/koralky_prebal_horni_strana.png",
      "/project_images/koralky_predsadka.png",
      "/project_images/koralky_vnitrek_prvni_strana.png",

      "/project_images/patchwork_obalka.png",
      "/project_images/patchwork_prebal.png",
      "/project_images/patchwork_prebal_horni_strana.png",
      "/project_images/patchwork_predsadka.png",
      "/project_images/patchwork_vnitrek_prvni_strana.png",

      "/project_images/krizkovy_steh_obalka.png",
      "/project_images/krizkovy_steh_prebal.png",
      "/project_images/krizkovy_steh_prebal_predni_strana.png",
      "/project_images/krizkovy_steh_predsadka.png",
      "/project_images/krizkovy_steh_vnitrek_prvni_strana.png",

      "/project_images/hackovani_vnitrek.png",
      "/project_images/hackovani_vnitrek_2.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/handicraftbooks",
    date: new Date(2021, 1, 2),
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe AfterEffects"],
    description: "Handicraft Book series design",
    text: "Imaginary book series with handicrafts consists of five books and book series trailer.",
    component: (project) => <ProjectPageHandicraftBooks project={project} />,
  },
  {
    name: "30 Years of the Visegrad group",
    image: "/cover_images/v4_sign.png",
    projectImages: ["/cover_images/v4_sign.png"],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/visegradgroup",
    date: new Date(2020, 10, 1),
    tools: ["Adobe Illustrator"],
    description: "30 Years of the Visegrad group poster competiton",
    text: "The topic of this competition was to create poster to celebrate the 30 years of existence the Visegrad group. My idea was to display this by simple designs focused on the numbers. The left one has counting in the middle and also represents that there are 4 countries. The second poster represents the numbers by the dots.",
    component: (project) => <ProjectPageVisegradGroup project={project} />,
  },
  {
    name: "Archery results visualization",
    image: "/cover_images/archery_results_sign.png",
    projectImages: [
      "/cover_images/archery_results_sign.png",
      "/project_images/archery_results_2.png",
      "/project_images/archery_results_3.png",
      "/project_images/archery_results_4.png",
      "/project_images/archery_results_5.png",
      "/project_images/archery_results_6.png",
      "/project_images/archery_results_7.png",
      "/project_images/archery_results_8.png",
    ],
    tags: [ProjectTags.VISUALIZATION],
    path: "/archeryresults",
    date: new Date(2021, 1, 3),
    tools: ["d3.js"],
    description: "Improved visualization of archery results",
    text: "Visualization of the archery results in seasons 2018/19 and 2019/20. As the page with results provides confusing and visually confusing results, I decided to try to remake it to be more readable for archers. Results visualization helps archers to see their score in comparison with the other competitions and in this one, they can check the whole season or just one of the competitions.",
    component: (project) => <ProjectPageArcheryResults project={project} />,
  },

  {
    name: "Flower fairy",
    image: "/cover_images/flower_fairy_sign.png",
    projectImages: [
      "/cover_images/flower_fairy_sign.png",
      "/project_images/flower_fairy_2.png",
      "/project_images/flower_fairy_3.png",
      "/project_images/flower_fairy_4.png",
    ],
    tags: [ProjectTags.MODELLING],
    path: "/flowerfairy",
    date: new Date(2021, 6, 1),
    tools: ["Blender"],
    description: "Fairy with flower as her wings",
    text: "3D modell created from the cube. Small baby girl fairy with flower growing from her back. She is dressed in leafs and she lives in the forest.",
  },

  {
    name: "MjUNI advent",
    image: "/cover_images/mjuni_advent_sign.png",
    projectImages: [
      "/cover_images/mjuni_advent_sign.png",
      "/project_images/mjuni_advent_2.png",
      "/project_images/mjuni_advent_3.png",
      "/project_images/mjuni_advent_4.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/mjuniadvent",
    date: new Date(2021, 11, 1),
    tools: ["Affinity Designer"],
    description: "Advent banners for Masaryk Juniverzity",
    text: "Series of the facebook banners for MjUNI with the advent theme. There are four candles as the Czech tradition of lighting one candle every week of advent on the Sunday.",
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
