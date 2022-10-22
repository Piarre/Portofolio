import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/Biographie";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io5";
import Image from "next/image";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Layout from "../components/Layouts/Article";
import { BIO } from "../lib/Bio";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container paddingTop={5}>
      <Box
        borderRadius="md"
        mb={6}
        p={4}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        A Back-End &amp; SysAdmin Developer based in France.
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pierre IDÉ
          </Heading>
          <p>Back-end (Java, Spring), Docker, </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pp.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section>
        <Heading as="h3" variant="secttion-title">
          Me
        </Heading>
        <Paragraph>
          {/* I&apos;m Pierre, a 15-year-old developer and I&apos;ve been in IT for
          about 3 years, I started code when I was in 5th grade I got into
          javascript for the purpose of creating Discord Bots, they allow during
          a command executed performed an action, I then saw videos of Minecraft
          Plugins. Knowing that the game is based on Java I immediately knew
          that I should learn another programming language, and then shortly
          after watching videos on YouTube I learned how to organize a project,
          use classes, methods... Then after I was interested in Web2.0 sites, I
          obviously started with HTML and CSS without knowing the existing of
          Front-End Frameworks, VueJS was one of the first it&apos;s hard to
          learn but hey, then I knew AngularJS a bit at the same level then
          VueJS, then came ReactJS it is much simpler and much easier to handle,
          in short I will not go into details. At one point in my life I
          didn&apos;t know the difference between Front-End and Back-End (or
          even the word Full-Stack) while watching videos on YouTube, I mostly
          heard "Front-End" and I looked, I realized that the two were
          completely different, then I learned SpringBoot, also a Framework but
          Back-end, I immediately liked it and I don&apos;t know why I like the
          Back-end, the Full-Stack much more don&apos;t interest me for now.
          After that I continued on the Full-Stack then I asked myself questions
          about how to host the Full-Stack projects I learned quite quickly but
          when you try to put a 24/7 hosting on your PC you quickly go realize
          that you have to leave a terminal open and open its ports... Then I
          got to know Docker, I really like Docker and it&apos;s so simple,
          I&apos;ve never had a limit with Docker but I&apos;m not going to not
          expand on Docker there are so many things to say that good... */}
        </Paragraph>
        {/* <Box alignContent="center" my={4}  textAlign="center">
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              My portfolio
            </Button>
          </NextLink>
        </Box>  */}
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          My story
        </Heading>
        {BIO.map((story) => {
          return (
            <BioSection key={story.id}>
              <BioYear>{story.year}</BioYear>
              {story.about}
            </BioSection>
          );
        })}
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          I love
        </Heading>
        <Paragraph>Playing video games, After Effects editing</Paragraph>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Piarre" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoGithub />}
              >
                @Piarre
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Piarre__" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoTwitter />}
              >
                @Piarre__
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/Chakra";
