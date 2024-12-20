import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Project } from "../projects";
import { BackButton } from "./utils/BackButton";

export interface IProjectBoxProps {
  project: Project;
}

export default function ProjectPage(props: IProjectBoxProps) {
  return (
    <Container maxW={"7xl"}>
      <HStack paddingBottom={30}>
        <BackButton />
        <Box as={"header"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
          >
            {props.project.name}
          </Heading>
        </Box>
      </HStack>
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[0]}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      />
      <VStack spacing={{ base: 4, sm: 6 }}>
        <Text
          color={useColorModeValue("gray.500", "gray.400")}
          fontSize={"2xl"}
          fontWeight={"300"}
          paddingTop={30}
        >
          {props.project.description}
        </Text>
        <Text fontSize={"lg"}>
          This model was made from the square plane with{" "}
          <Link
            color="teal.500"
            href="https://www.youtube.com/watch?v=pHYKLFBNeaM"
          >
            this tutorial
          </Link>
          . It is a man's head with particles hair and eybrows. The eyes are
          different, as I'm fascinated with the heterochromia. I was inspired by
          the color of the eyes typical for husky dogs - one eye is ice-cold
          blue, and the other is mainly brown with strikes of blue. The skin
          texture with the birthmarks was painted in the Mudbox software.
        </Text>
      </VStack>

      <SimpleGrid
        columns={2}
        spacing={5}
        w={"100%"}
        paddingBottom={10}
        paddingTop={10}
      >
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[1]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
        />

        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[2]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
        />
      </SimpleGrid>

      <Text>VIDEO WILL BE ADDED</Text>

      <Box paddingTop={10}>
        <Heading size="md" mb={2}>
          Used tools
        </Heading>
        <UnorderedList spacing={2}>
          {props.project.tools.map((tool) => (
            <ListItem>{tool}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Container>
  );
}
