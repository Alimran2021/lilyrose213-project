import { Container } from "@mui/material";
import AboutTop from "./AboutTop";
import AboutMore from "./AboutMore";
import AboutMoreBottom from "./AboutMoreBottom";
import AboutBottom from "./AboutBottom";
import Footer from "../Footer/Footer";
import TopHeader from "../topHeader/TopHeader";

const About = () => {
  return (
    <>
      <TopHeader />
      <Container>
        <AboutTop />
        <AboutMore />
        <AboutMoreBottom />
        <AboutBottom />
      </Container>
      <Footer />
    </>
  );
};

export default About;
