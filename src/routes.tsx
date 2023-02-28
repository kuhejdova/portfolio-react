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
      {
        // path: ":projects[0].path",
        path: "kocourkov",
        element: <ProjectPage project={projects[0]} />,
      },
    ],
  },
];
