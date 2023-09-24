import {
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import responsiveImg from "../../assets/images/feature-1.png";
import blazingImg from "../../assets/images/feature-2.png";
import multiImg from "../../assets/images/feature-3.png";
import buttonImg from "../../assets/images/learn-arrow.png";
import { NavLink } from "react-router-dom";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const featureItem = [
  {
    title: "Fully responsive",
    des: "A could application, or could app, is a software program",
    btn: "Learn More",
    btnImg: buttonImg,
    img: responsiveImg,
  },
  {
    title: "Fully responsive",
    des: "A could application, or could app, is a software program",
    btn: "Learn More",
    btnImg: buttonImg,
    img: blazingImg,
  },
  {
    title: "Fully responsive",
    des: "A could application, or could app, is a software program",
    btn: "Learn More",
    btnImg: buttonImg,
    img: multiImg,
  },
];
const MainFeatures = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h3"
        sx={{
          color: " #07A4FD",
          textAlign: "center",
          marginTop: "14%",
          fontWeight: "bold",
        }}
      >
        Put the spotlight on the
        <br />
        main features
      </Typography>
      <Box>
        <Grid
          sx={{
            // padding: "0px 24px",
            // margin: "0% 15%",
            backgroundColor: "#000000 !important",
            textAllign: "center",
          }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {featureItem.map((feature, index) => (
            <Grid item rowSpacing={0} xs={6} sm={4} md={4} key={index}>
              <Card sx={{ cursor: "default" }}>
                <Box
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#000000",
                    paddingTop: "10%",
                    // marginBottom: "-22%",
                    border: "1px solid #000000",
                  }}
                >
                  <img
                    style={{ width: "160px" }}
                    srcSet={`${feature.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${feature.img}?w=248&fit=crop&auto=format`}
                    loading="lazy"
                  />
                  <Box>
                    <Typography
                      sx={{ color: "#F2F8FA" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{ color: "#10C4FD", fontSize: "17px" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {feature.des}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#000000",
                    alignItems: "center",
                    display: "flex",
                    textAlign: "center",
                    width: "140px",
                    margin: "auto",
                    padding: "0 31%",
                    paddingTop: "5%",
                  }}
                >
                  <NavLink
                    sx={{
                      color: "#ffffff",
                      fontSize: "17px",
                    }}
                    size="small"
                  >
                    Learn More
                  </NavLink>
                  <Box>
                    <img
                      srcSet={`${feature.btnImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${feature.btnImg}?w=248&fit=crop&auto=format`}
                      loading="lazy"
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default MainFeatures;
