import { Box, Grid } from "@mui/material";
import Apartment from "./Apartment";
import House from "./House";

const HouseApartment = () => {
  return (
    <Box>
      <Grid container rowSpacing={1}>
        <Grid item xs={12} md={6}>
          <House />
        </Grid>
        <Grid item xs={12} md={6}>
          <Apartment />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HouseApartment;
