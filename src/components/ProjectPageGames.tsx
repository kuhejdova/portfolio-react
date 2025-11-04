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
      {props.project.headerImage && (
        <Image
          rounded={"md"}
          alt={"product image"}
          src={props.project.headerImage}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%" }}
        />
      )}
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

      {props.project.links && (
        <SimpleGrid
          columns={{
            base: 1,
            sm: Math.min(props.project.links.length, 2),
            md: Math.min(props.project.links.length, 4),
          }}
          spacing={5}
          w={"100%"}
          paddingBottom={5}
          paddingTop={10}
        >
          {props.project.links.map((mylink) => (
            <Link color="teal.500" href={mylink.href} target="_blank">
              <Center>
                <HStack paddingTop={5} align={"center"}>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label={mylink.ariaLabel}
                    fontSize="20px"
                    icon={<BsGlobe />}
                  />{" "}
                  <Text>{mylink.text}</Text>
                </HStack>
              </Center>
            </Link>
          ))}
        </SimpleGrid>
      )}

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={5}
        w={"100%"}
        paddingBottom={5}
        paddingTop={10}
      >
        {props.project.projectImages.map((image) => (
          <Image
            rounded={"md"}
            alt={"product image"}
            src={image}
            fit={"contain"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%" }}
          />
        ))}
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
