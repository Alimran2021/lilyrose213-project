import Img from "../../assets/images/img-1.png";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
let theme = createTheme();
theme = responsiveFontSizes(theme);
function BottomHeader() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          //  padding: "0px 24px",
          marginTop: "20%",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: "light" }}>Saas Website</Typography>
            <Typography
              variant="h3"
              sx={{
                // fontSize: "20px",
                color: "#07A4FD",
                fontWeight: 900,
                lineHeight: "55px",
              }}
            >
              {" "}
              Stay connected with our cloud softwares
              <br />
              <br />
            </Typography>
            <Typography sx={{ color: "light" }}>
              A cloud application, or cloud app, is a software program where
              cloud-based and local components work together.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Hidden only={"lg"}>
              <Typography sx={{ textAlign: "center" }}>
                <img
                  srcSet={`${Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${Img}?w=248&fit=crop&auto=format`}
                  loading="lazy"
                />
              </Typography>
            </Hidden>
            <Hidden only={"xs"}>
              <Typography sx={{ textAlign: "center", width: "100%" }}>
                <img
                  srcSet={`${Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${Img}?w=248&fit=crop&auto=format`}
                  loading="lazy"
                />
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default BottomHeader;
