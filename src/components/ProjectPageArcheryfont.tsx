import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
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
          It's a linear font that is decorated with parts of the arrow or target
          based on the shape of the letter. The font is derived from the{" "}
          <Link
            color="teal.500"
            href="https://fonts.google.com/specimen/Quicksand"
          >
            Quicksand font
          </Link>
          . Due to its high stylization, it's mainly used for headlines as it
          can hardly be readable in smaller sizes. This font also contains
          numbers and Czech localization.
        </Text>
      </VStack>

      <Link color="teal.500" href="https://typefoundry.fi.muni.cz/cs/archery">
        <Center>
          <HStack py={5} align={"center"}>
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Archery font"
              fontSize="20px"
              icon={<BsGlobe />}
            />{" "}
            <Text>Archery Font to download </Text>
          </HStack>
        </Center>
      </Link>

      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[1]}
        fit={"contain"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%" }}
        // paddingTop={10}
      />

      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[3]}
        fit={"contain"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%" }}
        paddingTop={10}
      />
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[4]}
        fit={"contain"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%" }}
        paddingTop={10}
      />
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[2]}
        fit={"contain"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
        paddingTop={10}
      />
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[5]}
        fit={"contain"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
        paddingTop={10}
      />

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
