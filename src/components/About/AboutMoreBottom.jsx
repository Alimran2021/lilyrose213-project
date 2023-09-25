import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import aboutMoreBottomImg1 from "../../assets/images/about-more-bottom-1.png";
import aboutMoreBottomImg2 from "../../assets/images/about-more-bottom-2.png";
import aboutMoreBottomImg3 from "../../assets/images/about-more-bottom-3.png";

const services = [
  {
    img: aboutMoreBottomImg1,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore aspernatur quos a consequatur atque provident illo aliquid eos iure , aspernatur quos a consequatur atque provident illo aliquid eos iure??",
  },
  {
    img: aboutMoreBottomImg2,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore aspernatur quos a consequatur atque provident illo aliquid eos iure , aspernatur quos a consequatur atque provident illo aliquid eos iure??",
  },
  {
    img: aboutMoreBottomImg3,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore aspernatur quos a consequatur atque provident illo aliquid eos iure , aspernatur quos a consequatur atque provident illo aliquid eos iure??",
  },
];
const AboutMoreBottom = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
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
                  sx={{ width: 90, height: 80, marginTop: "15px" }}
                  image={service.img}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0px",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutMoreBottom;
