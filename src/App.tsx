import { SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import ProjectBox from "./components/ProjectBox";
import { projects } from "./projects";

interface IAppProps {}

export function App(props: IAppProps) {
  return (
    <>
      <Menu></Menu>
      <SimpleGrid minChildWidth="300px" spacing="40px">
        {projects.map((proj) => (
          <ProjectBox project={proj} />
        ))}
      </SimpleGrid>
      {/* <Link to="/about">
        
        <Button>about</Button>
      </Link>{" "} */}
      {/* link v routeru, bacha je i v chakra */}
      <div>
        <Outlet />
      </div>
    </>
  );
}
