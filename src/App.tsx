import {
  Container,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Menu from "./components/Menu";
import ProjectBox from "./components/ProjectBox";
import { OutletOrChildren } from "./components/utils/OutletOrChildren";
import {
  ProjectTags,
  allCategories,
  otherCategories,
  projects,
} from "./projects";

interface IAppProps {}

export function App(props: IAppProps) {
  const [filter, setFilter] = useState<ProjectTags | null>(null);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Menu onMenuClicked={(tag) => setFilter(tag || null)}></Menu>
      <Container
        bg={useColorModeValue("gray.200", "gray.800")}
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
              .sort(
                (proj1, proj2) => proj2.date.getTime() - proj1.date.getTime()
              )
              .filter(
                (proj) =>
                  !filter ||
                  (filter === ProjectTags.OTHER &&
                    otherCategories.some((cat) => proj.tags.includes(cat))) ||
                  proj.tags.includes(filter) ||
                  (filter === ProjectTags.ALL &&
                    allCategories.some((cat) => proj.tags.includes(cat)))
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
