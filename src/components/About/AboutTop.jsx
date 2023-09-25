import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import aboutTopImg1 from "../../assets/images/about-top-1.png";
import aboutTopImg2 from "../../assets/images/about-top-2.png";
import aboutTopImg3 from "../../assets/images/about-top-3.png";

const AboutTop = () => {
  return (
    <Box sx={{ margin: "15% 0 10% 0" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        <Grid xs={12} sm={4} md={6}>
          <Button>
            <img
              style={{ width: "100%" }}
              srcSet={`${aboutTopImg1}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${aboutTopImg1}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
          </Button>
        </Grid>
        <Grid xs={12} sm={4} md={6}>
          <Box sx={{ width: 383, margin: "auto", color: "#f5f5f5" }}>
            <Typography sx={{ color: "#10C4FD", fontWeight: "bold" }}>
              WHO WE ARE
            </Typography>
            <Typography variant="h4" sx={{ margin: "7% 0" }}>
              We Help To Get Solutions
            </Typography>
            <Typography>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate nisi exercitationem, dolorum reiciendis suscipit aperiam
              amet omnis explicabo optio, sed molestias possimus debitis dolore
              quo unde commodi eveniet expedita cupiditate?{" "}
            </Typography>
            <Box sx={{ margin: "14% 0 5% 0" }}>
              <Card
                sx={{
                  display: "flex",
                  marginBottom: "5px",
                  backgroundColor: "#000000",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 80, height: 80, marginTop: "15px" }}
                  image={aboutTopImg3}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0px",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto", padding: "0 0 0 22px" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{
                        fontSize: "27px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      Lorem Ipsum
                    </Typography>
                    <Typography
                      component="div"
                      sx={{ fontSize: "16px", color: "#F2F8FA" }}
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptate nisi exercitationem,
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
            <Box>
              <Card
                sx={{
                  display: "flex",
                  marginBottom: "5px",
                  backgroundColor: "#000000",
                  width: 383,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 80,
                    height: 80,
                    marginTop: "15px",
                    paddingLeft: "10px",
                  }}
                  image={aboutTopImg2}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0px",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto", padding: "0 0 0 22px" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{
                        fontSize: "27px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      Lorem Ipsum
                    </Typography>
                    <Typography
                      component="div"
                      sx={{ fontSize: "16px", color: "#F2F8FA" }}
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptate nisi exercitationem,
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AboutTop;
