import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  LinkProps,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { ProjectTags } from "../projects";

export interface IMenuProps {
  onMenuClicked: (tag: ProjectTags) => void;
}

export default function WithSubnavigation({ onMenuClicked }: IMenuProps) {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.200", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.300", "gray.900")}
        align={"center"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            alt={"logo"}
            src={useColorModeValue("logo_black.png", "logo_white.png")}
            h={7}
            paddingRight={2}
          ></Image>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Eva Kuhejdová
          </Text>

          <Flex display={{ base: "none", md: "flex" }} mx={"auto"}>
            <DesktopNav onMenuClicked={onMenuClicked} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          {/* <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onMenuClicked={onMenuClicked} onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({
  onMenuClicked,
}: {
  onMenuClicked: (tag: ProjectTags) => void;
}) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              {navItem.href ? (
                <Link
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                  as={ReactRouterLink}
                  to={navItem.href}
                  onClick={() => navItem.tag && onMenuClicked(navItem.tag)}
                >
                  {navItem.label}
                </Link>
              ) : (
                <Link
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                  onClick={() => navItem.tag && onMenuClicked(navItem.tag)}
                >
                  {navItem.label}
                </Link>
              )}
            </PopoverTrigger>

            {navItem.submenu && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.submenu.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      onMenuClicked={onMenuClicked}
                      navItem={child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  navItem,
  onMenuClicked,
}: {
  navItem: NavItem;
  onMenuClicked: (tag: ProjectTags) => void;
}) => {
  const { label, href, subLabel, tag } = navItem;

  return (
    <LinkOrNot
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      menuItem={navItem}
      onMenuClicked={onMenuClicked}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </LinkOrNot>
  );
};

const MobileNav = ({
  onMenuClicked,
  onToggle,
}: {
  onMenuClicked: (tag: ProjectTags) => void;
  onToggle: () => any;
}) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          onMenuClicked={onMenuClicked}
          navItem={navItem}
          onToggle={onToggle}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({
  navItem: { label, submenu: children, href, tag },
  onMenuClicked,
  onToggle: onMenuToggle,
}: {
  navItem: NavItem;
  onMenuClicked: (tag: ProjectTags) => void;
  onToggle: () => any;
}) => {
  const { isOpen, onToggle: onSumbenuToggle } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        cursor="pointer"
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          {...(href
            ? {
                as: ReactRouterLink,
                to: href!,
                onClick: () => {
                  onMenuToggle();
                  tag && onMenuClicked(tag);
                },
              }
            : {
                to: "",
                onClick: () => tag && onMenuClicked(tag),
              })}
        >
          {label}
        </Text>
        {children && (
          <Icon
            onClick={children && onSumbenuToggle}
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <LinkOrNot
                onClick={onMenuToggle}
                key={child.label}
                menuItem={child}
                onMenuClicked={onMenuClicked}
                py={2}
              >
                {child.label}
              </LinkOrNot>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const LinkOrNot = ({
  menuItem: { href, tag },
  children,
  onMenuClicked,
  ...rest
}: LinkProps & {
  menuItem: NavItem;
  children: React.ReactNode;
  onMenuClicked: (tag: ProjectTags) => void;
}) => {
  return href ? (
    <Link
      {...rest}
      as={ReactRouterLink}
      to={href}
      onClick={(event) => {
        tag && onMenuClicked(tag!);
        rest.onClick && rest.onClick(event);
      }}
    >
      {children}
    </Link>
  ) : (
    <Link
      {...rest}
      onClick={(event) => {
        tag && onMenuClicked(tag!);
        rest.onClick && rest.onClick(event);
      }}
    >
      {children}
    </Link>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  submenu?: Array<NavItem>;
  href?: string;
  tag?: ProjectTags;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "All projects",
    tag: ProjectTags.ALL,
    href: "/",
  },
  {
    label: "Graphic design",
    tag: ProjectTags.GRAPHIC_DESIGN,
    href: "/",
    submenu: [
      {
        label: "Generative design",
        tag: ProjectTags.GENERATIVE,
        // subLabel: "something",
        href: "/",
      },
      {
        label: "Visual identity",
        tag: ProjectTags.VISUAL,
        // subLabel: "something",
        href: "/",
      },
      {
        label: "Typography",
        tag: ProjectTags.TYPOGRAPHY,
        // subLabel: "something",
        href: "/",
      },
    ],
  },
  {
    label: "UX",
    tag: ProjectTags.UX,
    href: "/",
  },
  {
    label: "Games",
    tag: ProjectTags.GAMES,
    href: "/",
  },
  {
    label: "Other",
    tag: ProjectTags.OTHER,
    href: "/",
  },
];
