import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import Theme from "../lib/Theme";

export default function Chakra({ cookies, children }: any) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={Theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export async function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
