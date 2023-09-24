import { Box, Container, Grid, Typography } from "@mui/material";
import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#131313", paddingTop: "8%" }}>
      <Container>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={6}>
            <LeftFooter />
          </Grid>
          <Grid item xs={12} md={6}>
            <RightFooter />
          </Grid>
        </Grid>
      </Container>
      <Typography
        sx={{
          color: "black",
          backgroundColor: "#ffffff",
          padding: "1% 0%",
          fontSize: "20px",
          marginTop: "5%",
        }}
      >
        <Container>All Rights Reserved</Container>
      </Typography>
    </Box>
  );
};

export default Footer;
