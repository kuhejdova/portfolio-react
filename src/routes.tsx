import { App } from "./App";

export const router = [
  {
    path: "/",
    element: <App />, //outlet je misto kde se vyrenderuje child
    children: [
      {
        path: "about", //:smh je promenna (param)
        element: <div>hello</div>,
      },
    ],
  },
];
