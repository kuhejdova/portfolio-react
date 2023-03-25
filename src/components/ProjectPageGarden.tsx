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
        <Text fontSize={"lg"}>{props.project.text}</Text>
      </VStack>

      <Text paddingTop={10}>
        {" "}
        First step was to define a persona, who will interact with our app. Our
        persona was grandma Agnes, who is helpless gardener and her plants are
        still dying. Her grandchildren suggests to her to find an app, as she
        can use computers.
      </Text>
      <Center>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[5]}
          fit={"contain"}
          align={"center"}
          w={"50%"}
          h={{ base: "100%" }}
          paddingTop={10}
        />
      </Center>
      <Text paddingTop={10}>
        Next, we created the storyboard with scenario to demonstrate the usage
        of our app.
      </Text>
      <Center>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[6]}
          fit={"contain"}
          align={"center"}
          w={"50%"}
          h={{ base: "100%" }}
          paddingTop={10}
          paddingBottom={10}
        />
      </Center>

      <Text paddingTop={10} paddingBottom={10}>
        Than we have prepared low fidelity and high fidelity prototypes. High-fi
        prototype was created in Figma and it is provided below. Flow 1 is
        desktop version and Flow 2 is mobile version. This prototype is
        clickable and demonstrates how the app can be used. We wanted to create
        simple app anyone can use, even the elderly people.
      </Text>

      <iframe
      title="garden_hifi"
        width={"100%"}
        height={"600"}
        src={
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fu47pOhmfyumOV0gJh14ncu%2Fprototyp%3Fnode-id%3D6-108%26scaling%3Dscale-down%26page-id%3D5%253A58%26starting-point-node-id%3D6%253A108%26show-proto-sidebar%3D1"
        }
        allowFullScreen
      ></iframe>

      <Text paddingTop={10}>
        This design Martin programmed in React and the app is available on the
        link below. There were a few design changes, as we used heatmap graph
        instead of bar charts and also we used the top menu instead of the left
        side menu.
      </Text>
      <Link color="teal.500" href="https://pv278-garden.web.app/">
        <Center>
          <HStack py={5} align={"center"}>
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Garden app"
              fontSize="20px"
              icon={<BsGlobe />}
            />{" "}
            <Text>Garden app</Text>
          </HStack>
        </Center>
      </Link>

      <SimpleGrid
        columns={2}
        spacing={5}
        w={"100%"}
        h={"400px"}
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
          src={props.project.projectImages[3]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
        />
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={5} w={"100%"} h={"500px"}>
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
          src={props.project.projectImages[4]}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
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
