import { App } from "./App";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import { projects } from "./projects";

export const router = [
  {
    path: "/",
    element: <App />, //outlet je misto kde se vyrenderuje child
    children: [
      {
        path: "about", //:smh je promenna (param)
        element: <AboutPage />,
      },
      ...projects.map((proj) => ({
        //tri tecky rozbali pole, at nemam pole v poli
        path: proj.path,
        // path: "kocourkov",
        element: (typeof proj.component === "function"
          ? proj.component(proj)
          : proj.component) || <ProjectPage project={proj} />,
      })),
    ],
  },
];
