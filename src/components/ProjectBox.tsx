import {
  Badge,
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Project } from "../projects";

export interface IProjectBoxProps {
  project: Project;
}

export default function ProjectBox(props: IProjectBoxProps) {
  return (
    <Center py={5}>
      <Link to={props.project.path}>
        <Box
          role={"group"}
          p={6}
          w={"full"}
          bg={useColorModeValue("gray.100", "gray.800")}
          boxShadow={useColorModeValue("lg", "dark-lg")}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box rounded={"lg"} mt={0} pos={"relative"} height={"230px"}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={`${process.env.PUBLIC_URL}/${props.project.image}`}
            />
          </Box>
          <Stack pt={5} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
              align={"center"}
            >
              {props.project.tags.map((tag) => (
                <Badge mx="1">{tag}</Badge>
              ))}
            </Text>
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
              textAlign={"center"}
              py={2}
            >
              {props.project.name}
            </Heading>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
}
