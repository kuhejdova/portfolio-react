import ProjectPageAkademikpro from "./components/ProjectPageAkademikpro";
import ProjectPageAlenaKuhejdova from "./components/ProjectPageAlenaKuhejdova";
import ProjectPageAnthropology from "./components/ProjectPageAnthropology";
import ProjectPageArcheryfont from "./components/ProjectPageArcheryfont";
import ProjectPageArcheryResults from "./components/ProjectPageArcheryResults";
import ProjectPageBabylonfest from "./components/ProjectPageBabylonfest";
import ProjectPageElderlyBanking from "./components/ProjectPageElderlyBanking";
import ProjectPageFastr from "./components/ProjectPageFastr";
import ProjectPageFFFIMU from "./components/ProjectPageFFFIMU";
import ProjectPageGarden from "./components/ProjectPageGarden";
import ProjectPageHandicraftBooks from "./components/ProjectPageHandicraftBooks";
import ProjectPageHead from "./components/ProjectPageHead";
import ProjectPageHGAnimation from "./components/ProjectPageHGAnimation";
import ProjectPageMeduse from "./components/ProjectPageMeduse";
import ProjectPageMjuniAdvent from "./components/ProjectPageMjuniAdvent";
import ProjectPageMocap from "./components/ProjectPageMocap";
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

  OTHER = "Other",
  ALL = "All",
}

export const otherCategories: ProjectTags[] = [
  ProjectTags.VISUALIZATION,
  ProjectTags.ANIMATION,
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
      "cover_images/kocourkov_sign.png",
      "project_images/kocourkov_pictograms-16.png",
      "project_images/kocourkov_ideograms-17.png",
      "project_images/kocourkov_paper_cup.png",
      "project_images/kocourkov_menu.png",
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
      "project_images/anthropology_door.png",
      "project_images/anthropology_poster.png",
      "project_images/anthropology_wcman.png",
      "project_images/anthropology_wcwoman.png",
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
      "cover_images/babylonfest_sign.png",
      "project_images/babylonfest_food.png",
      "project_images/babylonfest_badge.png",
      "project_images/babylonfest_name1.png",
      "project_images/babylonfest_poster.png",
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
      "cover_images/wakeup_sign.png",
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
    image: "cover_images/garden_sign.png",
    projectImages: [
      "cover_images/garden_sign.png",
      "project_images/garden_web_fin1.png",
      "project_images/garden_web_fin2.png",
      "project_images/garden_web_fin3.png",
      "project_images/garden_web_fin4.png",
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
      "cover_images/meduse_sign.png",
      "project_images/meduse_1.png",
      "project_images/meduse_2.png",
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
      "cover_images/head_sign.png",
      "project_images/head_1.png",
      "project_images/head_2.png",
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
      "cover_images/archeryjersey_me.JPG",
      "project_images/archeryjersey_front.jpg",
      "project_images/archeryjersey_back.jpg",
      "project_images/archeryjersey_mock1.png",
      "project_images/archeryjersey_mock2.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/archeryjersey",
    date: new Date(2020, 6, 2),
    tools: ["Adobe Illustrator"],
    description:
      "Redesign of the plain white jerseys for the Archery club Ostrava",
    text: "The goal was to create a new design of archery jerseys for the Archery club Ostrava Mariánské hory. The original jerseys were plain white with the logo on the front and back. I wanted to keep it simple and select colors suitable for the amount of time spent on the sun and in nature. I have chosen two shades of blue, the lighter represents the color of Ostrava city, and the darker means one of the colors of the Moravian-Silesian Region.",
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
      "project_images/ak_stationery.png",
      "project_images/ak_face_masks.jpg",
      "project_images/ak_tshirt.png",
      "project_images/ak_web.png",
      "project_images/ak_manual.png",
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
    image: "cover_images/handicraft_sign.png",
    projectImages: [
      "cover_images/handicraft_sign.png",
      "project_images/hackovani_obalka.png",
      "project_images/hackovani_prebal.png",
      "project_images/hackovani_prebal_horni_strana.png",
      "project_images/hackovani_predsadka.png",
      "project_images/hackovani_vnitrek_prvni_strana.png",

      "project_images/kaligrafie_obalka.png",
      "project_images/kaligrafie_prebal.png",
      "project_images/kaligrafie_prebal_horni_strana.png",
      "project_images/kaligrafie_predsadka.png",
      "project_images/kaligrafie_vnitrek_prvni_strana.png",

      "project_images/koralky_obalka.png",
      "project_images/koralky_prebal.png",
      "project_images/koralky_prebal_horni_strana.png",
      "project_images/koralky_predsadka.png",
      "project_images/koralky_vnitrek_prvni_strana.png",

      "project_images/patchwork_obalka.png",
      "project_images/patchwork_prebal.png",
      "project_images/patchwork_prebal_horni_strana.png",
      "project_images/patchwork_predsadka.png",
      "project_images/patchwork_vnitrek_prvni_strana.png",

      "project_images/krizkovy_steh_obalka.png",
      "project_images/krizkovy_steh_prebal.png",
      "project_images/krizkovy_steh_prebal_predni_strana.png",
      "project_images/krizkovy_steh_predsadka.png",
      "project_images/krizkovy_steh_vnitrek_prvni_strana.png",

      "project_images/hackovani_vnitrek.png",
      "project_images/hackovani_vnitrek_2.png",
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
    projectImages: ["cover_images/v4_sign.png"],
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
      "cover_images/archery_results_sign.png",
      "project_images/archery_results_2.png",
      "project_images/archery_results_3.png",
      "project_images/archery_results_4.png",
      "project_images/archery_results_5.png",
      "project_images/archery_results_6.png",
      "project_images/archery_results_7.png",
      "project_images/archery_results_8.png",
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
      "cover_images/flower_fairy_sign.png",
      "project_images/flower_fairy_6.png",
      "project_images/flower_fairy_3.png",
      "project_images/flower_fairy_5.png",
      "project_images/flower_fairy_2.png",
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
      "cover_images/mjuni_advent_sign.png",
      "project_images/mjuni_advent_2.png",
      "project_images/mjuni_advent_3.png",
      "project_images/mjuni_advent_4.png",
    ],
    tags: [ProjectTags.GRAPHIC_DESIGN],
    path: "/mjuniadvent",
    date: new Date(2021, 11, 1),
    tools: ["Affinity Designer"],
    description: "Advent banners for Masaryk Juniverzity",
    text: "This project aimed to create a series of Facebook banners for MjUNI with the advent theme. There are four candles, as in the Czech tradition of lighting one candle every week of advent on Sunday. It's based on the MUNI font, as this job was done for the university.",
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
      "cover_images/hg_sign.png",
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
      "cover_images/mocap_sign.png",
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
    image: "cover_images/akademikpro_sign.png",
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
      "cover_images/caio_sign.png",
      "project_images/caio_3.png",
      "project_images/caio_2.png",
      "project_images/caio_4.png",
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
      "project_images/fffimu22_thanks.png",
      "project_images/fffimu22_mediakit1.png",
      "project_images/fffimu22_mediakit2.png",
      "project_images/fffimu22_tshirt.png",
      "project_images/fffimu22_placky1.png",
      "project_images/fffimu22_placky2.png",
      "project_images/fffimu22_placky3.png",
      "project_images/fffimu22_placky.jpg",
      "project_images/fffimu22_sitotisk.jpg",
      "project_images/fffimu22_instagram.png",
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
    image: "cover_images/fastr_sign.png",
    projectImages: ["cover_images/fastr_sign.png"],
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
      "project_images/supernova_2.png",
      "project_images/supernova_3.png",
      "project_images/supernova_5.png",
      "project_images/supernova_6.png",
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
];
