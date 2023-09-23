import TopHeader from "../topHeader/TopHeader";
import BottomHeader from "../BottomHeader/BottomHeader";
import LeadPointer from "../LeadPointer/LeadPointer";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <TopHeader />
      <BottomHeader />
      <LeadPointer />
    </Container>
  );
};

export default Home;
