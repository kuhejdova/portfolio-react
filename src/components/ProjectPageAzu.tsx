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
        columns={2}
        spacing={5}
        w={"100%"}
        paddingBottom={10}
        paddingTop={5}
      >
        <Link color="teal.500" href="https://play.google.com/store/apps/details?id=com.Eva_Kuhejdova.AZUEmotionsintiles">
          <Center>
            <HStack paddingTop={5} align={"center"}>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="azu application"
                fontSize="20px"
                icon={<BsGlobe />}
              />{" "}
              <Text>AZU: Emotions in tiles on Google Play </Text>
            </HStack>
          </Center>
        </Link>
        <Link
          color="teal.500"
          href="https://is.muni.cz/th/gfbqm/"
        >
          <Center>
            <HStack paddingTop={5} align={"center"}>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="semibold identity"
                fontSize="20px"
                icon={<BsGlobe />}
              />{" "}
              <Text>Master's Thesis with fulltext </Text>
            </HStack>
          </Center>
        </Link>
      </SimpleGrid>

      
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[1]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
        />
      

      <SimpleGrid columns={2} spacing={5} w={"100%"} paddingTop={5} paddingBottom={5}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[2]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[3]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
        />
      </SimpleGrid>

      <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[4]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
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
