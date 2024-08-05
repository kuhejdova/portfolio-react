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
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <Link to={props.project.path} onClick={handleLinkClick}>
      <Box
        role={"group"}
        p={6}
        w={"full"}
        h={"full"} // Ensure the box takes full height
        bg={useColorModeValue("gray.100", "gray.800")}
        boxShadow={useColorModeValue("lg", "dark-lg")}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        display={"flex"}
        flexDirection={"column"} // Ensure the content is laid out in a column
        justifyContent={"space-between"} // Distribute space between elements
      >
        <Center rounded={"lg"} pos={"relative"} height={"230px"}>
          <Image
            rounded={"lg"}
            height={230}
            width={230}
            objectFit={"cover"}
            align={"center"}
            src={`${process.env.PUBLIC_URL}/${props.project.image}`}
          />
        </Center>
        <Stack pt={5} align={"center"} flex={"1 1 auto"} width={230}>
          <Text
            color={"gray.500"}
            fontSize={"sm"}
            textTransform={"uppercase"}
            align={"center"}
          >
            {props.project.tags.map((tag, index) => (
              <Badge key={index} mx="1" >
                {tag}
              </Badge>
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
  );
}
