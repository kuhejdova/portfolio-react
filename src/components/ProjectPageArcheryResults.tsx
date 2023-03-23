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
        Pro svůj projekt jsem si vybrala vizualizaci datasetu, který jsem si
        vytáhla ze stránek{" "}
        <Link
          href="https://www.rcherz.com/cs/users/viewProfile/52cf7168/eva_kuhejdova"
          color="teal.500"
        >
          Rcherz
        </Link>
        . Na těchto stránkách se také nachází vizualizace, které mi ale přijdou
        nepřehledné a ne moc hezky zpracované. Data jsem si vytáhla do dvou csv
        souborů - zvlášť vnitřní a zvlášť venkovní sezónu.{" "}
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
        V tomto grafu (nalevo) jsou úplně všechny výsledky bez ohledu na to,
        jestli se jedná o venkovní nebo vnitřní sezónu (je tam rozdíl i v
        maximálním skóre i v počtu vystřelených šípů) a také se tam nebere ohled
        na to, že v mladších kategoriích se střílí jiná vzdálenost (třeba
        40/30m, 60m).
      </Text>
      <Text paddingBottom={10}>
        Já jsem se rozhodla tento graf použít, ale rozdělit na jednotlivé sezóny
        (napravo), tedy oddělit hlavně venkovní a vnitřní sezónu. Vzdálenost je
        vždy napsaná nahoře v informacích, tedy dalo by se to snadno rozšířit i
        na jiné vzdálenosti (já tam mám pouze 70m, protože podrobná data ze
        závodů máme pouze poslední dva roky). Uživatel si tedy nahoře vpravo
        zvolí sezónu a rok a podle toho se mu překreslí data. Je tam také label,
        který se zobrazí, když je myš nad daným kolečkem - je tam přesné datum a
        přesná hodnota výsledku.
      </Text>
      <Text>
        Barvy jsem zvolila podle typických barev pro danou sezónu (tyto barvy se
        nachází na diplomech, pohárech a dalších) - červená je pro venkovní
        sezónu a modrá pro vnitřní. Graf zásahů jsem obarvila podle hodnoty na
        terči, protože pro lukostřelce je hned zřejmé, jaké jsou jeho
        nejčastější zásahy.
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
        Barchart (napravo) jsem zvolila z důvodu, že ve venkovní sezóně
        potřebujeme rozlišit až 12 různých hodnot, což v původním piechartu může
        působit už hodně nepřehledně. Původní vizualizace ze stránek Rcherz
        vypadá takto (nalevo). Barvy na stránkách jsou naprosto náhodné a nijak
        nesouvisí s hodnotami na terči.
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
        Dále jsem přidala heatmap, která znázorňuje hodnoty po jednotlivých
        závodních sadách (vždy po 3 - vevnitř a 6 - venku šípech se jde
        zapisovat k terči - 1 sada). Lze tam sledovat například která závodní
        sada bývá pravidelně nejhorší a která nejlepší (na obrázku jde vidět, že
        nejlepší výsledky dosahuju pravidelně v 15 a 16 sadě, zatímco první bývá
        většinou nejhorší). Je tam také label, který zobrazí hodnotu pro
        obdélník když je na něm myš.
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
        Na kolečka v scatter plotu se dá kliknout, což zobrazí detail
        konkrétního závodu.
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
        Kolečko se zvýrazní, zásahy se změní jen na zásahy v tomto konkrétním
        závodě a heatmap se překreslí na barchart, který zachovává barvy z
        daného řádku heatmap. V původním provedení je to také barchart, ovšem ve
        variantě stacked barchart, která mi přijde poměrně zbytečná. Jednotlivé
        barvy opět odpovídají výše vygenerovaným náhodně v piechartu, tedy není
        to ani příliš intuitivní a zřejmé na první pohled.
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
      {/* <Image
        rounded={"md"}
        alt={"product image"}
        src={props.project.projectImages[2]}
        fit={"contain"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%" }}
        paddingTop={10}
      /> */}

      {/* <Flex py={{ base: 18, md: 20 }} w={"100%"}>
        <HStack w={"100%"}>
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
          <Image
            rounded={"md"}
            alt={"product image"}
            src={props.project.projectImages[5]}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </HStack>
      </Flex> */}

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
