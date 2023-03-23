import {
  Box,
  Center,
  Container,
  Flex,
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
import { ImGithub } from "react-icons/im";
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

      <Flex py={{ base: 10, md: 10 }} w={"100%"}>
        <HStack w={"100%"}>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={props.project.projectImages[1]}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
          <Image
            rounded={"md"}
            alt={"product image"}
            src={props.project.projectImages[2]}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </HStack>
      </Flex>

      <Heading size="md" mb={2}>
          Controls
        </Heading>
      <Text >
        Pohybem před Kinectem, pro uchopení hvězdy je třeba sevřít ruku v pěst
        (chytit ji) a přitom s ní pohybovat směrem k další hvězdě pro změnu
        barvy. Je možnost využít pravou nebo levou ruku, případně hvězdu pustit
        a chytit druhou rukou. Pro puštění hvězdy je třeba držet ruku otevřenou
        proti Kinectu alespoň 15 snímků. Po propojení všech hvězd zůstane
        možnost kreslit naprosto volně.
      </Text>

      <HStack w={"100%"} paddingTop={10}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[3]}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[4]}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
        />
      </HStack>

      <Center py={10}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VEV5jw4Kf-k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Center>

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

      <Link
        color="teal.500"
        href="https://github.com/kuhejdova/gdp_rewrite_the_stars"
      >
        <Center>
          <HStack py={5} align={"center"}>
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Github repository"
              fontSize="20px"
              icon={<ImGithub />}
            />{" "}
            <Text>Github repository for this project</Text>
          </HStack>
        </Center>
      </Link>
    </Container>
  );
}
