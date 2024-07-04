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
  SimpleGrid,
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
        h={{ base: "100%" }}
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
      <SimpleGrid
        columns={3}
        spacing={5}
        w={"100%"}
        paddingBottom={5}
        paddingTop={10}
      >
        <Link
          color="teal.500"
          href="https://play.google.com/store/apps/details?id=com.Auversum.FashionAR&hl=en_US"
        >
          <Center>
            <HStack paddingTop={5} align={"center"}>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="auversum google play"
                fontSize="20px"
                icon={<BsGlobe />}
              />{" "}
              <Text>AUVERSUM application on Google Play </Text>
            </HStack>
          </Center>
        </Link>
        <Link
          color="teal.500"
          href="https://apps.apple.com/cz/app/auversum-fashion-ar/id6451324829"
        >
          <Center>
            <HStack paddingTop={5} align={"center"}>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="auversum app store"
                fontSize="20px"
                icon={<BsGlobe />}
              />{" "}
              <Text>AUVERSUM application on App Store </Text>
            </HStack>
          </Center>
        </Link>
        <Link color="teal.500" href="https://auversum.com/">
          <Center>
            <HStack paddingTop={5} align={"center"}>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="auversum web"
                fontSize="20px"
                icon={<BsGlobe />}
              />{" "}
              <Text>About AUVERSUM project </Text>
            </HStack>
          </Center>
        </Link>
      </SimpleGrid>

      <SimpleGrid
        columns={2}
        spacing={5}
        w={"100%"}
        paddingBottom={5}
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

      <Text>
        The application was first introduced at Meltingpot at Colours of Ostrava
        2023. Since then, people from many countries have tried it and explored
        its possibilities at different fashion summits and shows. The new
        version is in progress and will be introduced soon.
      </Text>

      <Link
        color="teal.500"
        href="https://www.meltingpotforum.com/cs/recnici-2023/auversum-cze"
      >
        <Center>
          <HStack paddingTop={5} align={"center"}>
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="auversum colours"
              fontSize="20px"
              icon={<BsGlobe />}
            />{" "}
            <Text>Auversum at Colours of Ostrava </Text>
          </HStack>
        </Center>
      </Link>

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
