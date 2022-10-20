import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop: any) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = ({ children }: any) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
