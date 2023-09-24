import TopHeader from "../topHeader/TopHeader";
import BottomHeader from "../BottomHeader/BottomHeader";
import LeadPointer from "../LeadPointer/LeadPointer";
import { Container } from "@mui/material";
import Footer from "../Footer/Footer";
import IndustryLeaders from "../IndustryLeaders/IndustryLeaders";
import MainFeatures from "../MainFeatures/MainFeatures";
import FeaturePart from "../MainFeatures/FeaturePart";

const Home = () => {
  return (
    <>
      <Container>
        <TopHeader />
        <BottomHeader />
        <LeadPointer />
        <IndustryLeaders />
        <MainFeatures />
        <FeaturePart />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
