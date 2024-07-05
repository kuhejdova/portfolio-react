import ProjectPageAkademikpro from "./components/ProjectPageAkademikpro";
import ProjectPageAlenaKuhejdova from "./components/ProjectPageAlenaKuhejdova";
import ProjectPageAnthropology from "./components/ProjectPageAnthropology";
import ProjectPageApplepunk from "./components/ProjectPageApplepunk";
import ProjectPageArcheryfont from "./components/ProjectPageArcheryfont";
import ProjectPageArcheryResults from "./components/ProjectPageArcheryResults";
import ProjectPageAuversum from "./components/ProjectPageAuversum";
import ProjectPageAzu from "./components/ProjectPageAzu";
import ProjectPageBabylonfest from "./components/ProjectPageBabylonfest";
import ProjectPageEffecta from "./components/ProjectPageEffecta";
import ProjectPageElderlyBanking from "./components/ProjectPageElderlyBanking";
import ProjectPageFastr from "./components/ProjectPageFastr";
import ProjectPageFFFIMU from "./components/ProjectPageFFFIMU";
import ProjectPageGarden from "./components/ProjectPageGarden";
import ProjectPageGarrigueGames from "./components/ProjectPageGarrigueGames";
import ProjectPageHandicraftBooks from "./components/ProjectPageHandicraftBooks";
import ProjectPageHead from "./components/ProjectPageHead";
import ProjectPageHexabe from "./components/ProjectPageHexabe";
import ProjectPageHGAnimation from "./components/ProjectPageHGAnimation";
import ProjectPageKurzM365 from "./components/ProjectPageKurzM365";
import ProjectPageMeduse from "./components/ProjectPageMeduse";
import ProjectPageMjuniAdvent from "./components/ProjectPageMjuniAdvent";
import ProjectPageMocap from "./components/ProjectPageMocap";
import ProjectPageNeardear from "./components/ProjectPageNeardear";
import ProjectPageOrgot from "./components/ProjectPageOrgot";
import ProjectPagePhysarum from "./components/ProjectPagePhysarum";
import ProjectPageRewriteTheStars from "./components/ProjectPageRewriteTheStars";
import ProjectPageSupernova from "./components/ProjectPageSupernova";
import ProjectPageTreeClock from "./components/ProjectPageTreeClock";
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
  ANIMATION = "Animation",
  GAMES = "Games",

  OTHER = "Other",
  ALL = "All",
}

export const otherCategories: ProjectTags[] = [
  ProjectTags.VISUALIZATION,
  ProjectTags.ANIMATION,
  ProjectTags.GAMES,
];

export const allCategories: ProjectTags[] = [
  ProjectTags.GRAPHIC_DESIGN,
  ProjectTags.UX,
  ProjectTags.TYPOGRAPHY,
  ProjectTags.MODELLING,
  ProjectTags.GENERATIVE,
  ProjectTags.VISUAL,
  ProjectTags.VISUALIZATION,
  ProjectTags.ANIMATION,
  ProjectTags.GAMES,
  ProjectTags.OTHER,
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
    image: "cover_images/kocourkov_sign.png",
    projectImages: [
      "project_images/kocourkov_sign.jpg",
      "project_images/kocourkov_pictograms-16.png",
      "project_images/kocourkov_ideograms-17.png",
      "project_images/kocourkov_paper_cup.jpg",
      "project_images/kocourkov_menu.jpg",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/kocourkov",
    date: new Date(2019, 10, 1),
    tools: ["Adobe Illustrator"],
    description: "The visual identity for imaginary cat café",
    text: 'Visual identity works with stylized cats and is combined with coffee stains. Cats are simple and linear, and the cat positions are inspired by living with one chunky cat. Coffee stains are in brown shades to create some playful element. There is the logo of the café with its name Kocourkov ("the land of the cats"), pictograms, and ideograms, which can be used in some real café.',
  },
  {
    name: "ArcheryFont",
    image: "cover_images/archeryfont_sign.png",
    projectImages: [
      "project_images/archeryfont_banner.png",
      "project_images/archeryfont_diplom.png",
      "project_images/archeryfont_blue.png",
      "project_images/archeryfont_score.png",
      "project_images/archeryfont_liga.png",
      "project_images/archeryfont_trefa.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/archeryfont",
    date: new Date(2020, 10, 1),
    tools: ["Adobe Illustrator", "Fontlab 3"],
    description: "The font based on archery elements",
    text: "It's a linear font that is decorated with parts of the arrow or target. Due to its high stylization, it's mainly used for headlines. This font also contains numbers and Czech localization. You can download it here - https://typefoundry.fi.muni.cz/cs/archery",
    component: (project) => <ProjectPageArcheryfont project={project} />,
  },
  {
    name: "Department of Anthropology",
    image: "cover_images/anthropology_sign.png",
    projectImages: [
      "project_images/anthropology_banner.png",
      "project_images/anthropology_door.jpg",
      "project_images/anthropology_poster.jpg",
      "project_images/anthropology_wcman.jpg",
      "project_images/anthropology_wcwoman.jpg",
      "project_images/anthropology_human.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/department_anthropology",
    date: new Date(2020, 3, 1),
    tools: ["Adobe Illustrator"],
    description:
      "Competition to create a visual identity for the Department of Anthropology at MUNI",
    text: "The task for this competition was to create a visual identity for the Department of Anthropology at the Faculty of Science at Masaryk University. I didn't win this competition, but this was my idea. We had to work with the faculty of science's existing visual identity, hence the green color and Masaryk university logo. I used the letters from the MUNI font and created simple bones and humans, which I combined with the green color.",
    component: (project) => <ProjectPageAnthropology project={project} />,
  },
  {
    name: "Babylonfest",
    image: "cover_images/babylonfest_sign.png",
    projectImages: [
      "project_images/babylonfest_sign.jpg",
      "project_images/babylonfest_food.jpg",
      "project_images/babylonfest_badge.png",
      "project_images/babylonfest_name1.jpg",
      "project_images/babylonfest_poster.jpg",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/babylonfest",
    date: new Date(2020, 4, 1),
    tools: ["Adobe Illustrator"],
    description: "Competition to create a visual identity for Babylonfest",
    text: "Babylonfest is the festival of the minorities living in Brno city. The task was to create a new visual identity that could be used on many objects and merch during the festival. The competition was canceled due to covid, but this is the visual identity I have prepared. The main idea was to recreate the Babylon tower with letters and use more colors to highlight the diversity.",
    component: (project) => <ProjectPageBabylonfest project={project} />,
  },
  {
    name: "Wake up call poster",
    image: "cover_images/wakeup_sign.png",
    projectImages: [
      "project_images/wakeup_banner.png",
      "project_images/wakeup_poster_2.png",
      "project_images/wakeup_poster1.png",
      "project_images/wakeup_poster3.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/wake_up_call",
    date: new Date(2020, 5, 1),
    tools: ["Adobe Illustrator"],
    description: "Poster competition Wake up call",
    text: "The topic for the 11th Virtual biennale Prague 2020 was Wake up call. The keywords were climate change, pandemic, responsibility, zero-waste, human, nature, and public space: one message, one goal: to inspire people with something positive. I wanted to point out the importance of our attitude to nature, that our children and trees are growing together and should live harmoniously.",
    component: (project) => <ProjectPageWakeUpCall project={project} />,
  },
  {
    name: "Garden app",
    image: "cover_images/garden_sign.jpg",
    projectImages: [
      "project_images/garden_sign.jpg",
      "project_images/garden_web_fin1.jpg",
      "project_images/garden_web_fin2.jpg",
      "project_images/garden_web_fin3.jpg",
      "project_images/garden_web_fin4.jpg",
      "project_images/garden_persona.jpg",
      "project_images/garden_storyboard.jpg",
    ],
    tags: [ProjectTags.UX],
    path: "/garden",
    date: new Date(2020, 6, 1),
    tools: ["Figma", "React"],
    description: "Gardening app for the helpless gardeners",
    text: "The app was created in collaboration with Martin Petr, I focused on the design part, and he programmed the app. Our task was to design and develop an app that uses the data about the weather - temperature, sunlight, and pressure. We have created an app to help predict the best time to plant some typical plants in the garden.",
    component: (project) => <ProjectPageGarden project={project} />,
  },
  {
    name: "Medus-e",
    image: "cover_images/meduse_sign.png",
    projectImages: [
      "project_images/meduse_sign.jpg",
      "project_images/meduse_1.jpg",
      "project_images/meduse_2.jpg",
    ],
    tags: [ProjectTags.MODELLING],
    path: "/meduse",
    date: new Date(2020, 11, 1),
    tools: ["Blender"],
    description: "This robot can help you... or petrify you",
    text: 'The 3D model of the robot was inspired by the Wall-e robot from Pixar and Meduse from the Ancient Greek myths. The bottom part is a cleaning robot, which can help you at home and has many hands coming from the "head." It also has a blindfold; in the myth, you were not supposed to look into Medusa\'s eyes. If you look at her, she will petrify you, as this housecleaning robot will do.',
    component: (project) => <ProjectPageMeduse project={project} />,
  },
  {
    name: "Human head",
    image: "cover_images/head_sign.png",
    projectImages: [
      "project_images/head_sign.jpg",
      "project_images/head_1.jpg",
      "project_images/head_2.jpg",
    ],
    tags: [ProjectTags.MODELLING],
    path: "/human_head",
    date: new Date(2021, 1, 1),
    tools: ["Blender", "Autodesk Mudbox"],
    description: "3D model of a man's head with heterochromia eyes",
    text: "",
    component: (project) => <ProjectPageHead project={project} />,
  },
  {
    name: "Tree clock",
    image: "cover_images/treeclock_sign.png",
    projectImages: [
      "project_images/treeclock_cropped.png",
      "project_images/treeclock_2.png",
      "project_images/treeclock_3.png",
      "project_images/treeclock_4.png",
    ],
    tags: [ProjectTags.GENERATIVE],
    path: "/treeclock",
    date: new Date(2020, 11, 2),
    tools: ["Processing"],
    description: "If you count carefully, you can find out what time it is",
    text: "This generative clock was created with two constraints - Work with only two colors and keep it random. The main idea was to create a night and day forest - the day is between 6 am and 6 pm and the night otherwise. You can read the clock this way: one tree is one hour, a bigger star is one minute, and a smaller star is one second. So let's get lost in the forest and remember, don't forget to count.",
    component: (project) => <ProjectPageTreeClock project={project} />,
  },
  {
    name: "Archery jersey",
    image: "cover_images/archeryjersey_me.JPG",
    projectImages: [
      "project_images/archeryjersey_me.JPG",
      "project_images/archeryjersey_front.jpg",
      "project_images/archeryjersey_back.jpg",
      "project_images/archeryjersey_mock1.jpg",
      "project_images/archeryjersey_mock2.jpg",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/archeryjersey",
    date: new Date(2020, 6, 2),
    tools: ["Adobe Illustrator"],
    description:
      "Redesign of the plain white jerseys for the Archery club Ostrava",
    text: "The goal was to create a new design of archery jerseys for the Archery club Ostrava Mariánské hory. The original jerseys were plain white with the logo on the front and back. I wanted to keep it simple and select colors suitable for the amount of time spent on the sun and in nature. I have chosen two shades of blue, the lighter represents the color of Ostrava city, and the darker means one of the colors of the Moravian-Silesian Region.",
    component: (project) => <ProjectPageBabylonfest project={project} />,
  },
  {
    name: "Rewrite the stars",
    image: "cover_images/rts_sign.png",
    projectImages: [
      "project_images/rts_5.png",
      "project_images/rts_1.png",
      "project_images/rts_3.png",
      "project_images/rts_2.png",
      "project_images/rts_4.png",
    ],
    tags: [ProjectTags.GENERATIVE],
    path: "/rewritethestars",
    date: new Date(2021, 2, 1),
    tools: ["Processing 3", "Kinect for Windows v2, knihovna KinectPV2"],
    description:
      "An interactive project where you can be a part of the night sky",
    text: "Rewrite the stars is a creative project built on the idea that everyone is made from stardust; hence everyone is a unique collection of stars. We also have the power to influence the resemblance of other things and the ability to create. Using Kinect, the human figure is scanned and displayed as a figure made of thousands of stars. There is also one big star that is the beginning of the creation. A person can catch this star and start creating their constellation the way he wants; there is no limitation to using straight lines.",
    component: (project) => <ProjectPageRewriteTheStars project={project} />,
  },
  {
    name: "Dentists visual identity",
    image: "cover_images/ak_sign.png",
    projectImages: [
      "project_images/ak_logo.png",
      "project_images/ak_business_cards.jpg",
      "project_images/ak_stationery.jpg",
      "project_images/ak_face_masks.jpg",
      "project_images/ak_tshirt.jpg",
      "project_images/ak_web.jpg",
      "project_images/ak_manual.jpg",
      "project_images/ak_animace.gif",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/alenakuhejdova",
    date: new Date(2021, 1, 1),
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects"],
    description: "Playful visual identity for the dentists",
    text: "The only request for the visual identity for Alena Kuhejdová was to use violet and/or orange, which are the colors of the dentist's office. My idea was to create something playful and cheerful, as many people fear the visit. So the main component is the tooth which is smiling, as people will be after the visit. Two variants, one with the violet and one with the orange shade, are interchangeable. She also wanted some T-shirts as work uniforms and some colorful masks.",
    component: (project) => <ProjectPageAlenaKuhejdova project={project} />,
  },
  {
    name: "Handicrafts book edition",
    image: "cover_images/handicraft_sign.jpg",
    projectImages: [
      "project_images/handicraft_sign.jpg",
      "project_images/hackovani_obalka.jpg",
      "project_images/hackovani_prebal.jpg",
      "project_images/hackovani_prebal_horni_strana.jpg",
      "project_images/hackovani_predsadka.jpg",
      "project_images/hackovani_vnitrek_prvni_strana.jpg",

      "project_images/kaligrafie_obalka.jpg",
      "project_images/kaligrafie_prebal.jpg",
      "project_images/kaligrafie_prebal_horni_strana.jpg",
      "project_images/kaligrafie_predsadka.jpg",
      "project_images/kaligrafie_vnitrek_prvni_strana.jpg",

      "project_images/koralky_obalka.jpg",
      "project_images/koralky_prebal.jpg",
      "project_images/koralky_prebal_horni_strana.jpg",
      "project_images/koralky_predsadka.jpg",
      "project_images/koralky_vnitrek_prvni_strana.jpg",

      "project_images/patchwork_obalka.jpg",
      "project_images/patchwork_prebal.jpg",
      "project_images/patchwork_prebal_horni_strana.jpg",
      "project_images/patchwork_predsadka.jpg",
      "project_images/patchwork_vnitrek_prvni_strana.jpg",

      "project_images/krizkovy_steh_obalka.jpg",
      "project_images/krizkovy_steh_prebal.jpg",
      "project_images/krizkovy_steh_prebal_predni_strana.jpg",
      "project_images/krizkovy_steh_predsadka.jpg",
      "project_images/krizkovy_steh_vnitrek_prvni_strana.jpg",

      "project_images/hackovani_vnitrek.jpg",
      "project_images/hackovani_vnitrek_2.jpg",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/handicraftsbooks",
    date: new Date(2021, 1, 2),
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe AfterEffects"],
    description: "Handicrafts Book series design",
    text: "Imaginary book series with handicrafts consists of five books and a book series trailer. I have chosen handicrafts because almost every book of this kind has a poor cover design. I wanted to keep it simple but also visually attractive. Each book has its color and inside pattern that symbolizes relevant handicrafts. I have also created a few pages of the inside of the crochet book.",
    component: (project) => <ProjectPageHandicraftBooks project={project} />,
  },
  {
    name: "30 Years of the Visegrad group",
    image: "cover_images/v4_sign.png",
    projectImages: ["project_images/v4_sign.jpg"],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/visegradgroup",
    date: new Date(2020, 10, 1),
    tools: ["Adobe Illustrator"],
    description: "30 Years of the Visegrad group poster competition",
    text: "The topic of this competition was to create a poster to celebrate the 30 years of existence of the Visegrad group. My idea was to display this with simple designs focused on the numbers. The left one has rising numbers in the middle and also represents that there are four countries. The second poster represents the numbers by using dots.",
    component: (project) => <ProjectPageVisegradGroup project={project} />,
  },
  {
    name: "Archery results visualization",
    image: "cover_images/archery_results_sign.png",
    projectImages: [
      "project_images/archery_results_7.jpg",
      "project_images/archery_results_2.png",
      "project_images/archery_results_3.jpg",
      "project_images/archery_results_4.png",
      "project_images/archery_results_5.jpg",
      "project_images/archery_results_6.jpg",
      "project_images/archery_results_7.jpg",
      "project_images/archery_results_8.jpg",
    ],
    tags: [ProjectTags.VISUALIZATION],
    path: "/archeryresults",
    date: new Date(2021, 1, 3),
    tools: ["d3.js"],
    description: "Improved visualization of archery results",
    text: "Visualization of the archery results in seasons 2018/19 and 2019/20. As the page with results provides confusing and visually confusing results, I decided to remake it to be more readable for archers. Results visualization helps archers see their score compared to the other competitions; in this one, they can check the whole season or just one of the competitions.",
    component: (project) => <ProjectPageArcheryResults project={project} />,
  },

  {
    name: "Flower fairy",
    image: "cover_images/flower_fairy_sign.png",
    projectImages: [
      "project_images/flower_fairy_0.jpg",
      "project_images/flower_fairy_6.jpg",
      "project_images/flower_fairy_3.jpg",
      "project_images/flower_fairy_5.jpg",
      "project_images/flower_fairy_2.jpg",
    ],
    tags: [ProjectTags.MODELLING],
    path: "/flowerfairy",
    date: new Date(2021, 6, 1),
    tools: ["Blender"],
    description: "Fairy with a flower as her wings",
    text: "3D model created from the cube. Tiny baby girl fairy with a flower growing from her back. She is dressed in leaves, and she lives in the forest. The red flower is not only for cover and beauty but also works as her wings. She is so tiny she can hide in the blooming meadow and calmly sleep.",
  
  },

  {
    name: "MjUNI advent",
    image: "cover_images/mjuni_advent_sign.png",
    projectImages: [
      "project_images/mjuni_advent_sign.png",
      "project_images/mjuni_advent_2.png",
      "project_images/mjuni_advent_3.png",
      "project_images/mjuni_advent_4.png",
      "project_images/mjuni_advent_5.png",
      "project_images/mjuni_advent_6.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/mjuniadvent",
    date: new Date(2021, 11, 1),
    tools: ["Affinity Designer"],
    description: "Advent banners for Masaryk Juniverzity",
    text: "This project aimed to create a series of Facebook banners for MjUNI with the advent theme. There are four candles, as in the Czech tradition of lighting one candle every week of Advent on Sunday. It's based on the MUNI font, as this job was done for the university. Another task was to create a design for an advent calendar, so I continued with the idea of the candles.",
    component: (project) => <ProjectPageMjuniAdvent project={project} />,
  },

  // {
  //   name: "Beeary",
  //   image: "cover_images/beeary_sign.png",
  //   projectImages: [
  //     "project_images/beeary_logo_big.png",
  //     "project_images/beeary_construction.png",
  //     "project_images/beeary_pictograms.png",
  //     "project_images/beeary_color_scheme.png",
  //     "project_images/beeary_layout_colours.png",
  //     "project_images/beeary_layout01.jpg",
  //     "project_images/beeary_layout02.jpg",
  //     "project_images/beeary_layout03.jpg",
  //     "project_images/beeary_layout06.jpg",
  //     "project_images/beeary_layout04.jpg",
  //     "project_images/beeary_layout05.jpg",
  //     "project_images/beeary_diary.png",
  //     "project_images/beeary_phone_case.png",
  //     "project_images/beeary_badge_autumn.png",
  //     "project_images/beeary_tshirt.png",
  //   ],
  //   tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.UX, ProjectTags.VISUAL],
  //   path: "/beeary",
  //   date: new Date(2021, 5, 1),
  //   tools: [
  //     "Affinity Designer",
  //     "Adobe Illustrator",
  //     "Adobe Photoshop",
  //     "Adobe InDesign",
  //     "Figma",
  //     "Vue.js",
  //   ],
  //   description: "App and visual identity for the beekeepers",
  //   text: "My bachelor thesis https://is.muni.cz/th/dtu4f/",
  //   component: (project) => <ProjectPageBeeary project={project} />,
  // },

  {
    name: "Hunger Games animation",
    image: "cover_images/hg_sign.png",
    projectImages: [
      "project_images/hg_sign.png",
      "project_images/hg_2.png",
      "project_images/hg_3.png",
    ],
    tags: [ProjectTags.ANIMATION],
    path: "/hungergames",
    date: new Date(2022, 9, 1),
    tools: ["Procreate", "Adobe After Effects"],
    description: "Handdrawn animation",
    text: "It is a scene from The Hunger Games: Catching Fire where Katniss turns around, and her wedding dress changes into the Mockingjay dress. This scene is iconic, and I wanted to recreate it in the style of hand drawing. I used my iPad and chose a brush resembling a pencil and dark red background. There are 322 frames; each was drawn by hand, and it was all put together in Adobe After Effects software.",
    component: (project) => <ProjectPageHGAnimation project={project} />,
  },

  {
    name: "Generative design via Motion Capture",
    image: "cover_images/mocap_sign.png",
    projectImages: [
      "project_images/mocap_sign.jpg",
      "project_images/mocap_1.gif",
    ],
    tags: [ProjectTags.ANIMATION],
    path: "/mocapgenerative",
    date: new Date(2022, 1, 1),
    tools: ["MotiveBody", "Unity"],
    description: "Motion capture getting creative",
    text: "This project was created in cooperation with Hana Tokárová. The main goal was to explore the possibilities of Motion Capture in MotiveBody software and try to connect it with generative design. We have exported a few .fbx animations from MotiveBody, uploaded them to Unity, and enhanced them with generated particle systems. We tried different settings, and the result was these four animations.",
    component: (project) => <ProjectPageMocap project={project} />,
  },

  {
    name: "AkademikPRO",
    image: "cover_images/akademikpro_sign.jpg",
    projectImages: [
      "project_images/akademikpro_1.png",
      "project_images/akademikpro_colors.png",
      "project_images/akademikpro.gif",
      "project_images/akademikpro_certifikat.png",
      "project_images/akademikpro_webpage.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/akademikpro",
    date: new Date(2021, 11, 2),
    tools: ["Affinity Designer"],
    description: "Competition to create a visual identity for AkademikPRO",
    text: "This competition aimed to create the logo and visual identity for the project called AkademikPRO focused mainly on social networks, youtube, and electronic devices. This project is focused on educating young academics in the sphere of the communication of science and research. Part of the task was also to create just a simple prototype of the animation for the educational videos and a webpage and certificate for the participating in their courses.",
    component: (project) => <ProjectPageAkademikpro project={project} />,
  },

  {
    name: "CAIO",
    image: "cover_images/caio_sign.png",
    projectImages: [
      "project_images/caio_1.png",
      "project_images/caio_sign.png",
      "project_images/caio_3.jpg",
      "project_images/caio_2.png",
      "project_images/caio_4.jpg",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.VISUAL],
    path: "/caio",
    date: new Date(2021, 12, 1),
    tools: ["Affinity Designer"],
    description:
      "Competition to create a visual identity for the Centre for Artificial Intelligence in Oncology",
    text: "This competition focused on creating the logo and visual identity for the Centre for AI in Oncology. Their requirements were to make a webpage, Word, and Powerpoint template. My idea was to connect the ribbon, which represents the oncology, with the integrated circuit's parts. The color palette also blended yellow, which represents the color of intelligence, and violet, which is the general color for oncology. This logo ended up in second place.",
    component: (project) => <ProjectPageAkademikpro project={project} />,
  },

  {
    name: "PR & Visual for Film Festival FI MU 2022",
    image: "cover_images/fffimu22_sign.png",
    projectImages: [
      "project_images/fffimu22_thanks.jpg",
      "project_images/fffimu22_mediakit1.png",
      "project_images/fffimu22_mediakit2.png",
      "project_images/fffimu22_tshirt.jpg",
      "project_images/fffimu22_placky1.png",
      "project_images/fffimu22_placky2.png",
      "project_images/fffimu22_placky3.png",
      "project_images/fffimu22_placky.jpg",
      "project_images/fffimu22_sitotisk.jpg",
      "project_images/fffimu22_instagram.jpg",
      "project_images/fffimu22_easter.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/fffimu22",
    date: new Date(2022, 5, 1),
    tools: ["Affinity Designer"],
    description: "22nd Film festival of Faculty of Informatics at MU",
    text: "I was a part of the Public relations and Visual teams for preparations of the 22nd FFFI MU, a student film festival; students entirely organized that. My role was to work with the visual identity my friend Šárka Portešová created. I was also working with social networks, combining PR and Visual.",
    component: (project) => <ProjectPageFFFIMU project={project} />,
  },

  {
    name: "FaStR app",
    image: "cover_images/fastr_sign.jpg",
    projectImages: ["project_images/fastr_1.png"],
    tags: [ProjectTags.UX],
    path: "/fastr",
    date: new Date(2022, 5, 2),
    tools: ["Figma"],
    description: "UX/UI study of an app FaStR - FAncy STudent Recipes",
    text: "This project was created with my two friends Hana Tokárová and Filip Zlacký. We wanted to create an e-cookbook with easy recipes mainly focused on the students. We did a whole study and research, containing interviews, sketches, low-fidelity and high-fidelity prototypes, user testing, and final evaluation.",
    component: (project) => <ProjectPageFastr project={project} />,
  },

  {
    name: "Elderly Banking app",
    image: "cover_images/elderlybanking_sign.png",
    projectImages: ["project_images/elderlybanking_1.png"],
    tags: [ProjectTags.UX],
    path: "/elderlybanking",
    date: new Date(2022, 12, 1),
    tools: ["Figma"],
    description: "UX/UI study of a banking app for the elderly people",
    text: "I have created this study with Hana Tokárová. The main goal was to research how to create a banking app for older people who may or may not know how to use their smartphones. We make our personas and try to think like them to discover all the troubles they can have. We chose the orange color because it is warm and calming, and contrasting enough.",
    component: (project) => <ProjectPageElderlyBanking project={project} />,
  },

  {
    name: "Supernova",
    image: "cover_images/supernova_sign.png",
    projectImages: [
      "project_images/supernova_2.jpg",
      "project_images/supernova_3.jpg",
      "project_images/supernova_5.jpg",
      "project_images/supernova_6.jpg",
    ],
    tags: [ProjectTags.GENERATIVE],
    path: "/supernova",
    date: new Date(2022, 11, 1),
    tools: ["p5.js"],
    description: "Exploding star for the Prototyp installation",
    text: "My work was a part of the Festival of Arts, Sciences and Technology - Prototyp 2022, which took place in the Underground reservoirs in Brno. Our installation was called Portal, and it was the presentation of 14 works of current and former students of Generative design at the Faculty of Informatics at MUNI. The works were presented on holographic foil, and the installation was about five meters high.",
    component: (project) => <ProjectPageSupernova project={project} />,
  },

  {
    name: "Kafe",
    image: "cover_images/kafe_sign.png",
    projectImages: [
      "project_images/kafe_usage.png",
      "project_images/kafe_light.png",
      "project_images/kafe_dark.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/kafe",
    date: new Date(2023, 2, 1),
    tools: ["Affinity Designer"],
    description: "A combination of KAFE (coffee) and films is the best",
    text: "My friends asked me to create a logo and a few icons for their project KAFE, a video archive, and a registration form for the films for the Film Festival of the Faculty of Informatics MU. I wanted to combine the coffee icon with the film tape, and as you are supposed to save your films into the KAFE system, I designed the videotape that sinks into the coffee mug. There is a dark and light option, but it is also used in colored lines on the webpage.",
    component: (project) => <ProjectPageMeduse project={project} />,
  },

  {
    name: "Physarum simulation",
    image: "cover_images/physarum_simulation_sign.png",
    projectImages: [
      "project_images/physarum_simulation_07.jpg",
      "project_images/physarum_simulation_1.jpg",
      "project_images/physarum_simulation_2.jpg",
      "project_images/physarum_simulation_4.jpg",
      "project_images/physarum_simulation_5.jpg",
    ],
    tags: [ProjectTags.GENERATIVE],
    path: "/physarumsimulation",
    date: new Date(2023, 6, 1),
    tools: ["WebGPU", "Javascript"],
    description: "Computer simulation inspired by the physarum organism",
    text: "Physarum polycephalum is a unicellular multinucleate organism that can behave in such a complex way. It can effectively find the shortest paths, and the local behaviors based on chemotaxis can create beautiful graphical results. This project simulates the behavior of this organism and, by adjusting many parameters and using different coloring, can produce a huge amount of various outputs. I was fascinated that this simple ruleset could lead to such different visuals. The final application runs on web browsers that support WebGPU.",
    component: (project) => <ProjectPagePhysarum project={project} />,
  },

  {
    name: "Applepunk",
    image: "cover_images/applepunk_cover_sign.jpg",
    projectImages: [
      "project_images/applepunk_header.jpg",
      "project_images/applepunk_1.png",
      "project_images/applepunk_2.png",
      "project_images/applepunk_3.png",
      "project_images/applepunk_4.png",
    ],
    tags: [ProjectTags.GAMES],
    path: "/applepunk",
    date: new Date(2023, 7, 17),
    tools: ["Unity", "Affinity Designer"],
    description: "Snake, but you are the apple.",
    text: "The game was made originally in 48 hours for GMTK Game Jam 2023 but missed submission by 2 minutes. It was made by Jakub Slezáček, Matěj Zavrtálek and me. I created all the graphics and UI, and the guys programmed the game mechanics. The Applepunk game is very similar to the original Snake game, but the player controls the apple, and their goal is to destroy snakes before they get eaten.",
    component: (project) => <ProjectPageApplepunk project={project} />,
  },

  {
    name: "Orgot",
    image: "cover_images/orgot_sign.png",
    projectImages: [
      "project_images/orgot_0.jpg",
      "project_images/orgot_4.jpg",
      "project_images/orgot_3.jpg",
      "project_images/orgot_1.jpg",
      "project_images/orgot_2.jpg",
    ],
    tags: [ProjectTags.GAMES],
    path: "/orgot",
    date: new Date(2023, 9, 14),
    tools: ["Godot", "Aseprite"],
    description: "Local co-op game where the flower wants to expand its ship",
    text: "The game was created in 48 hours for Game Jam at Game Development Dungeon 2023. It was made by Adam Štěpánek, Jonáš Rosecký, Vojtěch Brůža, Hana Tokárová and me. Hanka and I were responsible for the overall visual style, sprites, and graphics. The pixel art game called Orgot is a local co-op game where one player controls the mouse and the other keyboard. The goal is to expand the spaceship created from the floating islands, grow seeds, and protect the ship from insects.",
    component: (project) => <ProjectPageOrgot project={project} />,
  },

  {
    name: "Effecta",
    image: "cover_images/effecta_sign.png",
    projectImages: [
      "project_images/effecta_0.png",
      "project_images/effecta_1.jpg",
      "project_images/effecta_2.jpg",
      "project_images/effecta_3.jpg",
      "project_images/effecta_4.jpg",
      "project_images/effecta_5.jpg",
      "project_images/effecta_6.jpg",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/effecta",
    date: new Date(2023, 10, 1),
    tools: ["Affinity Designer"],
    description:
      "Competition to create visual motives for a company Effecta group",
    text: "The goal was to create visual motives (T-shirt, wall design, and car design) for a company, Effecta group, which works with documents and data. One of the ideas from brainstorming was to try to have a bit of fun in this field, so I've decided to create clothes with some puns and simple visuals in the style of comic books. I've chosen the marks used in the paper shredding for the wall design.",
    component: (project) => <ProjectPageEffecta project={project} />,
  },

  {
    name: "Auversum Fashion\u00A0&\u00A0AR",
    image: "cover_images/auversum_sign.jpg",
    projectImages: [
      "project_images/auversum_0.jpg",
      "project_images/auversum_1.jpg",
      "project_images/auversum_2.jpg",
    ],
    tags: [ProjectTags.UX, ProjectTags.GRAPHIC_DESIGN],
    path: "/auversum",
    date: new Date(2023, 7, 1),
    tools: ["Affinity Designer", "Figma", "Unity"],
    description: "AR application for the AUVERSUM fashion project",
    text: "Application AUVERSUM is part of the fashion project, where patterns printed on the fabric of the garments serve as AR markers for displaying augmented reality content. Since each garment varies and is not identical, this application allows the user to create their marker by photographing the garment's pattern. The application was developed with Hana Tokárová and Milan Doležal. AUVERSUM application is available on the Google Play and App Store.",
    component: (project) => <ProjectPageAuversum project={project} />,
  },

  {
    name: "Research brochure for FI MUNI",
    image: "cover_images/fi_research_sign.jpg",
    projectImages: [
      "project_images/fi_research_0.png",
      "project_images/fi_brochure_1.png",
      "project_images/fi_brochure_2.png",
      "project_images/fi_brochure_3.jpg",
      "project_images/fi_brochure_4.jpg",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/firesearchbrochure",
    date: new Date(2023, 11, 1),
    tools: ["Affinity Designer"],
    description:
      "Competition to create a design for a brochure of Research laboratories",
    text: "The goal was to design a brochure for Research laboratories at the Faculty of Informatics at Masaryk University. One of the requirements was to use the faculty colors - yellow and black. The idea was to create a short overview instead of the catalog version, which is foldable and easily understandable. For several fields, icons were created, and each field has its own color. The map is shaped into the motherboard design, where in the middle is a QR code with a link to the detailed description of the laboratories.",
    component: (project) => <ProjectPageAkademikpro project={project} />,
  },

  {
    name: "Merch for FI MUNI",
    image: "cover_images/fi_merch_sign.jpg",
    projectImages: [
      "project_images/fi_merch_0.png",
      "project_images/fi_merch_2.jpg",
      "project_images/fi_merch_1.jpg",
      "project_images/fi_merch_3.jpg",
      "project_images/fi_merch_4.jpg",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/fimerch",
    date: new Date(2023, 12, 1),
    tools: ["Affinity Designer"],
    description:
      "Competition to create ideas for merch at the Faculty of Informatics",
    text: "The goal was to develop ideas for potential future expansion of the merch at the Faculty of Informatics. The restrictions were to work with the faculty colors - yellow and black - and to develop some original ideas. There were several categories - cheap gifts for events, fancy gifts for partners, gifts for students as price, and gifts for new employees.",
    component: (project) => <ProjectPageAkademikpro project={project} />,
  },

  {
    name: "AZUFont",
    image: "cover_images/azufont_sign.png",
    projectImages: [
      "project_images/azufont_0.png",
      "project_images/azufont_1.png",
      "project_images/azufont_2.png",
      "project_images/azufont_3.png",
      "project_images/azufont_4.png",
      "project_images/azufont_5.png",
      "project_images/azufont_6.jpg",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.TYPOGRAPHY],
    path: "/azufont",
    date: new Date(2023, 11, 2),
    tools: ["Affinity Designer"],
    description: "The font based on azulejo tiles",
    text: "The AzuFont is based on the twelve basic symbols used in the traditional Portuguese Azulejo tiles. The AzuFont consists of the upper case letters of the Latin alphabet. It has mainly decorative functions and is supposed to be used for short texts or headings, as the text is less readable when used in longer texts or smaller font sizes. Not only the letters but also the tiles were created as a part and extension for this font. Each tile contains the letter that represents it; however, it might not be visible at first sight. The tiles are highly decorative and could be used in propagation materials or as examples of what could be created with this application.",
    component: (project) => <ProjectPageEffecta project={project} />,
  },

  {
    name: "Near & Dear visuals generator",
    image: "cover_images/neardear_sign.png",
    projectImages: [
      "project_images/neardear_0.png",
      "project_images/neardear_1.png",
      "project_images/neardear_2.png",
      "project_images/neardear_3.png",
      "project_images/neardear_4.png",
    ],
    tags: [ProjectTags.GENERATIVE],
    path: "/neardear",
    date: new Date(2023, 2, 17),
    tools: ["p5.js"],
    description: "Generator of the visuals for Near & Dear",
    text: "This project was created in collaboration with Semibold, who designed the identity and asked for an application that would generate similar visuals based on their rules. The visuals are used mainly for social networks and can be downloaded in PNG and SVG formats. The application was created with Vojtěch Brůža.",
    component: (project) => <ProjectPageNeardear project={project} />,
  },

  {
    name: "AZU: Emotions in tiles",
    image: "cover_images/azu_sign.jpg",
    projectImages: [
      "project_images/azu_0.jpg",
      "project_images/azu_1.jpg",
      "project_images/azu_2.png",
      "project_images/azu_3.png",
      "project_images/azu_4.png",
    ],
    tags: [
      ProjectTags.GRAPHIC_DESIGN,
      ProjectTags.UX,
      ProjectTags.VISUAL,
      ProjectTags.GENERATIVE,
    ],
    path: "/azu",
    date: new Date(2024, 6, 1),
    tools: ["Affinity Designer", "Unity", "Javascript"],
    description:
      "Use of generative design in psychology for emotions representation",
    text: "For my Master's thesis, I have created an application where users can record their emotions and feelings through art by making tiles and mosaics inspired by the Portugal Azulejo tiles. In the application, the user can easily create a mosaic according to their feelings and imagination, and after that, they fill in the questionnaire, where they can evaluate their emotions. In the future, the application will guess emotions from the image, but currently, I'm collecting some data that will be used for neural network training. Therefore, the users need to evaluate the image themselves using a questionnaire. The application can be a journal of emotions and a tool for art therapy, and it is available on Google Play.",
    component: (project) => <ProjectPageAzu project={project} />,
  },

  {
    name: "Garrigue Games",
    image: "cover_images/gg_sign.jpg",
    projectImages: [
      "project_images/gg_0.png",
      "project_images/gg_3.png",
      "project_images/gg_5.png",
      "project_images/gg_1.jpg",
      "project_images/gg_4.png",
    ],
    tags: [ProjectTags.UX],
    path: "/garriguegames",
    date: new Date(2024, 4, 1),
    tools: ["Figma", "React"],
    description: "Webpage for Game Development at Faculty of Informatics",
    text: "This project aimed to design and implement a webpage for Game Development at the Faculty of Informatics at Masaryk University. The webpage serves as a public presentation of the course results and an information page about courses, events, and others. It supports dark and light modes, and it is also responsive. This project was created with Hana Tokárová and was a Dean's project - MUNI/33/0026/2024. The page is currently under development.",
    component: (project) => <ProjectPageGarrigueGames project={project} />,
  },

  {
    name: "Hexabe",
    image: "cover_images/hexabe_sign.jpg",
    projectImages: [
      "project_images/hexabe_0.jpg",
      "project_images/hexabe_1.jpg",
      "project_images/hexabe_2.jpg",
      "project_images/hexabe_3.jpg",
      "project_images/hexabe_4.jpg",
      "project_images/hexabe_5.jpg",
      "project_images/hexabe_6.jpg",
    ],
    tags: [ProjectTags.GAMES],
    path: "/hexabe",
    date: new Date(2023, 7, 4),
    tools: [
      "Affinity Designer",
      "Procreate",
      "Cutting machine, cardboard, real world stuff",
    ],
    description: "A strategy building game with hexagonal tiles",
    text: "In the beginning, there are four hexagons. In the end, there is one winner. Hexabe is a strategic logic game where players take turns placing hexagonal tiles on the game board and trying to find patterns among them. Each player has a pile of cubes in front of them and tries to be the first to get rid of them. This game targets players who enjoy fast-paced competitive games, and thanks to the simplicity of the rules, even casual board game players will enjoy it. This game was created with Hana Tokárová and Jonáš Rosecký, and we plan to publish this game through the publisher or crowdfunding campaign.",
    component: (project) => <ProjectPageHexabe project={project} />,
  },

  {
    name: "Kurz M365",
    image: "cover_images/uvt_sign.jpg",
    projectImages: [
      "project_images/uvt_0.png",
      "project_images/uvt_1.jpg",
      "project_images/uvt_4.jpg",
      "project_images/uvt_5.png",
      "project_images/uvt_6.png",
      "project_images/uvt_2.jpg",
      "project_images/uvt_3.jpg",
      "project_images/uvt_animace.gif",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN, ProjectTags.ANIMATION],
    path: "/kurzm365",
    date: new Date(2023, 4, 4),
    tools: ["Affinity Designer", "Adobe After Effects", "Adobe Premiere Pro"],
    description: "Online education course on Microsoft 365 tools",
    text: "For several months, I worked at ICT MUNI as a graphic designer, animator, and video creator of an online course on Microsoft 365 tools. My task was to create characters, that would introduce users to some basic concepts of various Microsoft 365 tools. Another task was to create animation and concepts for the series of educational videos and also create these videos. I made around 15 out of 40 videos; later, several people joined to create videos based on my template video. The course is available online only to students and teachers of Masaryk University.",
    component: (project) => <ProjectPageKurzM365 project={project} />,
  },
];
