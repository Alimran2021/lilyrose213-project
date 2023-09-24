import { Box, Grid, Hidden, Typography } from "@mui/material";
import SitemarkImg from "../../assets/images/sitemark.png";
import GreenishImg from "../../assets/images/greenish.png";
import UmbrellaImg from "../../assets/images/umbrella.png";
import NetworkImg from "../../assets/images/network.png";
import LuminousImg from "../../assets/images/luminous.png";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
const industryImgs = [
  SitemarkImg,
  GreenishImg,
  UmbrellaImg,
  NetworkImg,
  LuminousImg,
];
let theme = createTheme();
theme = responsiveFontSizes(theme);
const IndustryLeaders = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "#07A4FD", fontWeight: "600" }}>
          Used by industry leaders you know
        </Typography>
        <Hidden only={"lg"}>
          <Typography
            sx={{
              margin: "auto",
              color: "#F2F8FA",
              padding: "2% 0 8% 0",
            }}
          >
            A cloud application, or cloud app, is a software program and local
            components work together
          </Typography>
        </Hidden>
        <Hidden only={"xs"}>
          <Typography
            sx={{
              width: "402px",
              margin: "auto",
              color: "#F2F8FA",
              padding: "2% 0 8% 0",
            }}
          >
            A cloud application, or cloud app, is a software program and local
            components work together
          </Typography>
        </Hidden>
        <Box>
          <Grid container rowSpacing={1} columSpacing={8}>
            {industryImgs.map((img, index) => (
              <Grid item xs={12} md={2} key={index}>
                <Box sx={{ paddingBottom: "5px" }}>
                  <img
                    srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${img}?w=248&fit=crop&auto=format`}
                    loading="lazy"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default IndustryLeaders;
