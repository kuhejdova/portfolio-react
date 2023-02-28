import { App } from "./App";
import ProjectPage from "./components/ProjectPage";
import { projects } from "./projects";

export const router = [
  {
    path: "/",
    element: <App />, //outlet je misto kde se vyrenderuje child
    children: [
      {
        path: "about", //:smh je promenna (param)
        element: <div>hello</div>,
      },
      ...projects.map((proj) => ({
        //tri tecky rozbali pole, at nemam pole v poli
        path: proj.path,
        // path: "kocourkov",
        element: proj.component || <ProjectPage project={proj} />,
      })),
    ],
  },
];
