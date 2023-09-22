import { Container } from "@mui/material";
import HouseApartment from "../HouseApartment/HouseApartment";
import PaintBrush from "../PaintBrush/PaintBrush";
import PaintHelp from "../PaintHelp/PaintHelp";
import TopHeader from "../../components/topHeader/TopHeader";

const Paint = () => {
  return (
    <>
      <TopHeader />
      <Container sx={{ marginBottom: "20%" }}>
        <PaintHelp />
        <PaintBrush />
        <HouseApartment />
      </Container>
    </>
  );
};

export default Paint;
