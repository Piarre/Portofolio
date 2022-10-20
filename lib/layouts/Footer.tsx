import { Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container
      style={{
        fontFamily: "'Kanit', sans-serif",
        fontWeight: "600",
        position: "relative",
        bottom: 25,
        top: 10,
        borderTop: "2px solid rgba(255, 255, 255, 0.5)",
        width: "48rem auto",
        //        TOP  RIGHT BOTTOM LEFT
        padding: "2rem 2rem 1rem 2rem",
        fontSize: 20,
        opacity: "50%"
      }}
    >
      {new Date().getFullYear()} Pierre IDÉ
    </Container>
  );
};

export default Footer;
