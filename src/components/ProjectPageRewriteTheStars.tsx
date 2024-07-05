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

      <SimpleGrid
        columns={2}
        spacing={5}
        w={"100%"}
        paddingTop={10}
        paddingBottom={10}
      >
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[1]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%"}}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[2]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%"}}
        />
      </SimpleGrid>

      <Heading size="md" mb={2}>
        Controls
      </Heading>
      <Text>
        Everything is controlled by the movement in front of the Kinect device.
        To catch the star, it is necessary to clench the fist and then move it
        to the next star to change the color. You can use your right or left
        hand, and there is the possibility to drop it and change hands. To drop
        the star, you need to hold your hand open in front of the Kinect for 15
        frames. After connecting all stars, there is an option to draw entirely
        freely.
      </Text>

      <SimpleGrid columns={2} spacing={5} w={"100%"} paddingTop={10}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[3]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%"}}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[4]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%"}}
        />
      </SimpleGrid>

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
