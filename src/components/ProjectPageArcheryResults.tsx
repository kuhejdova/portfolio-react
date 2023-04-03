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
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[1]}
        fit={"contain"}
        align={"center"}
        // w={"100%"}
        h={{ base: "100%" }}
        paddingTop={10}
        paddingBottom={10}
      />
      <Text>
        As my project topic, I have chosen the visualization of the dataset I
        extracted from the{" "}
        <Link
          href="https://www.rcherz.com/cs/users/viewProfile/52cf7168/eva_kuhejdova"
          color="teal.500"
        >
          Rcherz webpage
        </Link>
        . This page has some visualization but is confusing, unclear and not
        visually appealing. I divided data into two .csv files - the indoor and
        outdoor seasons.{" "}
      </Text>
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[2]}
        fit={"contain"}
        align={"center"}
        // w={"100%"}
        h={{ base: "100%" }}
        paddingTop={10}
        paddingBottom={10}
      />
      <Text paddingBottom={5}>
        In this graph (on the left side), there are all the results, no matter
        if it's an outdoor or indoor season (it depends because the maximal
        score and the number of arrows shot are different). Also, it doesn't
        consider that distances in younger categories are different (e.g.,
        40/30m, 60m), so comparing these results in one graph is impossible.
      </Text>
      <Text paddingBottom={10}>
        I have decided to use this graph but divide it into seasons (on the
        right side), mainly the outdoor and indoor seasons. The distance is
        always written at the top in the information panel to be easily
        extendable to other distances (I have only 70m because detailed data we
        have only from the past two years). The user selects the season and year
        in the top right corner, and that draws the relevant data. There is also
        a label showing the exact date, and score displayed when the mouse
        hovers over the circle.
      </Text>
      <Text>
        I have chosen the color palette by the typical colors used for the
        relevant season (these colors are used for diplomas, trophies, and
        others) - the red is for the outdoor season, and the blue is for the
        indoor season. The target colors color the graph of hits because, for
        archers, it is apparent at first sight what the most frequent hits are.
      </Text>
      <Center>
        <Image
          rounded={"md"}
          alt={"target"}
          src={props.project.projectImages[3]}
          fit={"contain"}
          align={"center"}
          // w={"100%"}
          h={{ base: "100%" }}
          paddingTop={10}
          paddingBottom={10}
        />
      </Center>
      <Text>
        I have selected the bar chart (on the right side) because we need to
        distinguish up to 12 different values in the outdoor season, which can
        be too much for the initially used pie chart. On the left side, you can
        see the original visualization from the Rcherz webpage; the colors are
        random and don't correspond to the target values.
      </Text>
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[4]}
        fit={"contain"}
        align={"center"}
        // w={"100%"}
        h={{ base: "100%" }}
        paddingTop={10}
        paddingBottom={10}
      />
      <Text>
        A heatmap also displays values per set (after three arrows indoors and
        six arrows outdoors, there is time to sum up, and write the score). It
        is possible to check which set is the worst and the best (you can see
        that I have the best results, mainly in the 15th or 16th set, and the
        first one is usually the worst). A label also displays the value for the
        selected rectangle on mouse hover.
      </Text>
      <Center>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[5]}
          fit={"contain"}
          align={"center"}
          // w={"100%"}
          h={{ base: "100%" }}
          paddingTop={10}
          paddingBottom={10}
        />
      </Center>
      <Text>
        The scatter plot circles are clickable and display the selected
        competition's detail.
      </Text>
      <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[6]}
        fit={"contain"}
        align={"center"}
        // w={"100%"}
        h={{ base: "100%" }}
        paddingTop={10}
        paddingBottom={10}
      />
      <Text>
        The circle is highlighted, and the hits are changed only to those in
        this selected competition. The heatmap is redrawn to a bar chart, which
        keeps colors from the relevant heatmap line. In the original
        implementation, it is also a bar chart, but in the stacked variant,
        which is unnecessary, and colors are also randomly generated, so it
        isn't clear and intuitive.
      </Text>
      <Center>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.projectImages[7]}
          fit={"contain"}
          align={"center"}
          // w={"100%"}
          h={{ base: "100%" }}
          paddingTop={10}
          paddingBottom={10}
        />
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
        href="https://github.com/kuhejdova/archery-results-visualization"
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
