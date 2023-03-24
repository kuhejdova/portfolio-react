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

      <Heading size="md" mb={2}>
        Crochet
      </Heading>

      <SimpleGrid
        columns={3}
        spacing={5}
        w={"100%"}
        paddingBottom={5}
        paddingTop={5}
      >
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[1]}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[2]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[3]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={5} w={"100%"} paddingBottom={5}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[4]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[5]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={5} w={"100%"} paddingBottom={5}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[26]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[27]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <Heading size="md" mb={2}>
        Caligraphy
      </Heading>

      <SimpleGrid
        columns={3}
        spacing={5}
        w={"100%"}
        paddingBottom={5}
        paddingTop={5}
      >
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[6]}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[7]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[8]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={5} w={"100%"} paddingBottom={5}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[9]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[10]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <Heading size="md" mb={2}>
        Beads
      </Heading>

      <SimpleGrid
        columns={3}
        spacing={5}
        w={"100%"}
        paddingBottom={5}
        paddingTop={5}
      >
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[11]}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[12]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[13]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={5} w={"100%"} paddingBottom={5}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[14]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[15]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <Heading size="md" mb={2}>
        Patchwork
      </Heading>

      <SimpleGrid
        columns={3}
        spacing={5}
        w={"100%"}
        paddingBottom={5}
        paddingTop={5}
      >
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[16]}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[17]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[18]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={5} w={"100%"} paddingBottom={5}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[19]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[20]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <Heading size="md" mb={2}>
        Embroidery
      </Heading>

      <SimpleGrid
        columns={3}
        spacing={5}
        w={"100%"}
        paddingBottom={5}
        paddingTop={5}
      >
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[21]}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[22]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[23]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          // h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={5} w={"100%"} paddingBottom={5}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[24]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[25]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
          // paddingTop={10}
        />
      </SimpleGrid>

      <Heading size="md" mb={2}>
        Trailer for the book series
      </Heading>
      <Text>EMBED VIDEO HERE!</Text>

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
