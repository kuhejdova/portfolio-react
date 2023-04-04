import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";

export default function ProjectPage() {
  return (
    <Container maxW={"7xl"}>
      <Image
        rounded={"md"}
        alt={"product image"}
        src={"cover_images/myself.jpg"}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      />
      <Center>
        <HStack paddingTop={30}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              Eva Kuhejdová
            </Heading>
          </Box>
        </HStack>
      </Center>
      <VStack spacing={{ base: 4, sm: 6 }}>
        <Text
          color={useColorModeValue("gray.500", "gray.400")}
          fontSize={"2xl"}
          fontWeight={"300"}
          paddingTop={30}
        >
          {"Who am I?"}
        </Text>
        <Text fontSize={"lg"}>
          A young woman that loves creative work in many different ways. Not
          only digital design but also handicrafts such as crocheting, sewing,
          or just drawing on paper or furniture. I like to try new ways how to
          express myself and broaden my horizons in the creative field.
        </Text>
        <Text
          color={useColorModeValue("gray.500", "gray.400")}
          fontSize={"2xl"}
          fontWeight={"300"}
          paddingTop={30}
        >
          {"What do I do?"}
        </Text>
        <Text fontSize={"lg"}>
          I'm studying for a master's degree at the Faculty of Informatics at
          Masaryk University in Brno. I study Visual informatics with a
          specialization in Graphic design. During my studies, I tried many
          fields in graphic design - from logo design and typography to UX
          design, generative design programming, 3D modeling, and photography.
          Sometimes I do graphic work for my friends or as a job.
        </Text>
        <Text
          color={useColorModeValue("gray.500", "gray.400")}
          fontSize={"2xl"}
          fontWeight={"300"}
          paddingTop={30}
        >
          {"Something more about me?"}
        </Text>
        <Text fontSize={"lg"}>
          Apart from the creative works, I love reading and exploring new worlds
          the books can provide. I also play Dungeons and Dragons with my
          friends in my free time with a sci-fi theme, so we create our worlds
          and stories. As you can see in my works, I've been doing archery for
          many years, and it is a great sport, a place to meet interesting
          people, and a significant source of inspiration.
        </Text>
      </VStack>

      <Link color="teal.500" href="https://www.linkedin.com/in/eva-kuhejdova/">
        <Center>
          <HStack py={5} align={"center"}>
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Linkedin"
              fontSize="20px"
              icon={<BsGlobe />}
            />{" "}
            <Text>Link to my LinkedIn profile</Text>
          </HStack>
        </Center>
      </Link>
    </Container>
  );
}
