import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import featurePartImg from "../../assets/images/feature-part-1.png";
import plusImg from "../../assets/images/plus.png";
import happyClientImg from "../../assets/images/feature-part-1.png";
import experianceImg from "../../assets/images/feature-part-2.png";
import doctorImg from "../../assets/images/feature-part-3.png";
import appointmentImg from "../../assets/images/feature-part-4.png";
const partFeatures = [
  {
    head: "1,200",
    title: "Happy Client",
    img: happyClientImg,
  },
  {
    head: "15",
    title: "Year Experience",
    img: experianceImg,
  },
  {
    head: "70",
    title: "Doctor & Staff",
    img: doctorImg,
  },
  {
    head: "340",
    title: "Online Appointment",
    img: appointmentImg,
  },
];
const FeaturePart = () => {
  return (
    <Box sx={{ margin: "15% 0% 22% 0%" }}>
      <Grid container rowSpacing={1}>
        {partFeatures.map((part, index) => (
          <Grid xs={12} md={3} key={index}>
            {/* <img
              srcSet={`${part.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${part.img}?w=248&fit=crop&auto=format`}
              loading="lazy"
            /> */}
            {/* <Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "38px",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  {part.head} <span style={{ color: "#07A4FD" }}>+</span>
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "#F2F8FA" }}>
                  {part.title}
                </Typography>
              </Box>
            </Box> */}

            <Card
              sx={{
                display: "flex",
                marginBottom: "5px",
                backgroundColor: "#000000",
                height: 90,
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 80, height: 80 }}
                image={part.img}
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
                      fontSize: "38px",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    {part.head} <span style={{ color: "#07A4FD" }}>+</span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ fontSize: "16px", color: "#F2F8FA" }}
                  >
                    {part.title}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="play/pause"></IconButton>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* test */}
    </Box>
  );
};

export default FeaturePart;
