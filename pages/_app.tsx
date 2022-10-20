import Layout from "../lib/layouts/Main";
import Fonts from "../components/Fonts";
import Chakra from "../components/Chakra";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }: any) {

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default MyApp;
