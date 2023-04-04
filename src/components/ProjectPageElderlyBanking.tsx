import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  ListItem,
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

      <Text fontSize={"lg"} paddingBottom={5}>
        Here you can try our low-fidelity prototype
      </Text>

      <iframe
        width={"100%"}
        height={"500"}
        src={
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Foub0Sgscltj8gDylvL2Nyv%2FElderly-Banking-App%3Fnode-id%3D130-3157%26scaling%3Dscale-down%26page-id%3D18%253A48%26starting-point-node-id%3D130%253A3157%26show-proto-sidebar%3D1"
        }
        allowFullScreen
      ></iframe>

      <Text fontSize={"lg"} paddingBottom={5} paddingTop={10}>
        Here you can try our high-fidelity prototype - Flow 1 is the Czech version and Flow 2 is English
      </Text>

      <iframe
        width={"100%"}
        height={"500"}
        src={
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Foub0Sgscltj8gDylvL2Nyv%2FElderly-Banking-App%3Fnode-id%3D154-744%26scaling%3Dscale-down%26page-id%3D153%253A696%26starting-point-node-id%3D154%253A744"
        }
        allowFullScreen
      ></iframe>

      <Text fontSize={"lg"} paddingBottom={5} paddingTop={10}>
        The whole study is summarized and described here
      </Text>

      <iframe
        width={"100%"}
        height={"500"}
        src={
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Foub0Sgscltj8gDylvL2Nyv%2FElderly-Banking-App%3Fnode-id%3D172%253A5287%26t%3DClFzF5H4vz4Sgoxa-1"
        }
        allowFullScreen
      ></iframe>

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
