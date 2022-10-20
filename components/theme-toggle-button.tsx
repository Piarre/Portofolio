import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { PropsWithChild } from "../lib/Types";

const ThemeToggleButton = (props: PropsWithChild) => {
  const { toggleColorMode } = useColorMode();

  return (
    <a style={{ ...props.style }}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          style={{ display: "inline-block" }}
          key={useColorModeValue("light", "dark")}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue("purple", "orange")}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
          ></IconButton>
        </motion.div>
      </AnimatePresence>
    </a>
  );
};

export default ThemeToggleButton;
