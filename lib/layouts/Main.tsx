import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Box, Container } from "@chakra-ui/react";

// const LazyVoxelDog = dynamic(() => import(''), {
//   ssr: false,
//   // loading: () => < />
// })

const Main = ({ children, router }: any) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pierre's Portofolio" />
        <meta name="author" content="Pierre Ide" />
        <meta name="author" content="Piarre" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Pierre's Portofolio" />
        <meta name="og:title" content="Pierre's Portofolio" />
        <meta property="og:type" content="website" />
        <title>Pierre IDÉ - Portofolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
