import { Container, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Menu from "./components/Menu";
import ProjectBox from "./components/ProjectBox";
import { OutletOrChildren } from "./components/utils/OutletOrChildren";
import { otherCategories, projects, ProjectTags } from "./projects";

interface IAppProps {}

export function App(props: IAppProps) {
  const [filter, setFilter] = useState<ProjectTags | null>(null);
  return (
    <>
      <Menu onMenuClicked={(tag) => setFilter(tag || null)}></Menu>
      <Container
        py={6}
        maxW={{
          base: "full",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        <OutletOrChildren>
          <SimpleGrid spacing="40px" columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
            {projects
              .filter(
                (proj) =>
                  !filter ||
                  (filter === ProjectTags.OTHER &&
                    otherCategories.some((cat) => proj.tags.includes(cat))) ||
                  proj.tags.includes(filter)
              )
              .map((proj) => (
                <ProjectBox project={proj} />
              ))}
          </SimpleGrid>
        </OutletOrChildren>
      </Container>
    </>
  );
}
