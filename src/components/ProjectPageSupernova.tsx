import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
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
        src={props.project.projectImages[2]}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      />
      <VStack spacing={{ base: 4, sm: 6 }} paddingBottom={10}>
        <Text
          color={useColorModeValue("gray.500", "gray.400")}
          fontSize={"2xl"}
          fontWeight={"300"}
          paddingTop={30}
        >
          {props.project.description}
        </Text>
        <Text fontSize={"lg"}>{props.project.text}</Text>
      </VStack>

      <Text fontSize={"lg"} paddingBottom={5} fontWeight={"bold"}>
        Supernova
      </Text>
      <Text fontSize={"lg"} paddingBottom={5}>
        The work captures the last moments of the star's existence. After the
        star loses its eternal battle with gravity, its end is near. But its
        collapse is followed by an extraordinary visual spectacle. Explosions of
        colored particles ripple through space until a black hole swallows them
        up.
      </Text>

      <SimpleGrid columns={4} spacing={5} w={"100%"}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[0]}
          fit={"contain"}
          align={"top"}
          w={"100%"}
          h={{ base: "100%" }}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[1]}
          fit={"contain"}
          align={"top"}
          w={"100%"}
          h={{ base: "100%" }}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[2]}
          fit={"contain"}
          align={"top"}
          w={"100%"}
          h={{ base: "100%" }}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[3]}
          fit={"contain"}
          align={"top"}
          w={"100%"}
          h={{ base: "100%" }}
        />
      </SimpleGrid>

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
