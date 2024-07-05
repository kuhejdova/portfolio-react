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

      <Link color="teal.500" href="https://fffimu22.vercel.app/">
        <Center>
          <HStack py={5} align={"center"}>
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="FFFIMU22"
              fontSize="20px"
              icon={<BsGlobe />}
            />{" "}
            <Text>22nd Film festival FI MU webpage</Text>
          </HStack>
        </Center>
      </Link>

      <Text fontSize={"lg"}>
        One of my jobs was to create Mediakit, which we were sending to our
        media partners, propagating the festival. I wrote all texts describing
        our festival, history, and technical details, and I had to use visuals.
      </Text>

      <SimpleGrid
        columns={2}
        spacing={5}
        w={"100%"}
        marginBottom={5}
        marginTop={10}
      >
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
      </SimpleGrid>

      <Text fontSize={"lg"} paddingTop={10}>
        After that, we worked on the merch. We were making T-shirts, and one of
        my ideas was used in the final version of the T-shirt we were selling at
        the festival. We used silkscreening method for the T-shirts, and our
        team printed all 200 pieces of bags, T-shirts, and sacs by our hand,
        which was a great experience. I also prepared visuals for the badges;
        some were serious, and some were just our internal jokes for the
        organizers.
      </Text>

      <SimpleGrid columns={2} spacing={5} w={"100%"} marginTop={10}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[3]}
          fit={"contain"}
          align={"top"}
          w={"100%"}
          h={{ base: "100%" }}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[4]}
          fit={"contain"}
          align={"top"}
          w={"100%"}
          h={{ base: "100%" }}
        />
      </SimpleGrid>

      <Image
        rounded={"md"}
        marginTop={5}
        alt={"product image"}
        src={props.project.projectImages[5]}
        fit={"contain"}
        align={"top"}
        w={"100%"}
        h={{ base: "100%" }}
      />

      <Image
        rounded={"md"}
        marginTop={5}
        marginBottom={5}
        alt={"product image"}
        src={props.project.projectImages[6]}
        fit={"contain"}
        align={"top"}
        w={"100%"}
        h={{ base: "100%" }}
      />

      <SimpleGrid columns={2} spacing={5} w={"100%"}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[7]}
          fit={"contain"}
          align={"top"}
          w={"100%"}
          h={{ base: "100%" }}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[8]}
          fit={"contain"}
          align={"top"}
          w={"100%"}
          h={{ base: "100%" }}
        />
      </SimpleGrid>

      <Text fontSize={"lg"} paddingTop={10}>
        I was the main administrator for the social networks during the whole
        semester. We decided to change the post's color each time, as we had two
        primary colors. It was a challenge to work with the coloring of the
        photos, but finally, I created this grid on Instagram. For Easter
        Monday, I was thinking of slightly twisting the theme, and instead of
        the circles, I made ellipses that look like Easter eggs.
      </Text>

      <SimpleGrid columns={2} spacing={5} w={"100%"} marginTop={10}>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[10]}
          fit={"contain"}
          align={"top"}
          w={"100%"}
          h={{ base: "100%" }}
        />
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[9]}
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
