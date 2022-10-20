import NextLink from "next/link";
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import ThemeToggleButton from "../../components/theme-toggle-button";
import { IoLogoGithub } from "react-icons/io5";
import Logo from "./Logo";

const LinkItem = ({ href, path, target, children, ...props }: any) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray900", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Button
        p={2}
        bg={active ? "#CBA135" : "undefined"}
        color={active ? "#202023" : "inactiveColor"}
        target={target}
        rounded={10}
        variant="outline"
        {...props}
      >
        {children}
      </Button>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      alignContent="center"
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem> */}
          <LinkItem
            target="_blank"
            href="https://github.com/Piarre/Portofolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
          <ThemeToggleButton />
        </Stack>

        <Box
          alignContent="right"
          display={{ base: "inline-block", md: "none" }}
        >
          <LinkItem
            target="_blank"
            href="https://github.com/Piarre/Portofolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
          >
            <IoLogoGithub />
          </LinkItem>
          <ThemeToggleButton style={{ marginLeft: 7 }} />

          {/* <Box
            ml={2}
            display={{ base: "inline-block", md: "none" }}
            style={{ float: "right" }}
          >
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/Piarre/Portofolio">
                  View Source
                </MenuItem>
              </MenuList>
              
            </Menu>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
