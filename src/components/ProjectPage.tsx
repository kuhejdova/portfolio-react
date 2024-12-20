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
        src={props.project.projectImages[0]}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%"}}
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
        <Text fontSize={"lg"}>{props.project.text}</Text>
      </VStack>
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[1]}
        fit={"contain"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%" }}
        marginTop={5}
      />
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[2]}
        fit={"contain"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%" }}
        marginTop={5}
      />

      <SimpleGrid
        columns={2}
        spacing={5}
        w={"100%"}
        paddingBottom={5}
        paddingTop={5}
      >
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[3]}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%"}}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[4]}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%"}}
        />
      </SimpleGrid>

      <Box>
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
