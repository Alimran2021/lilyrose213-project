import { Box, Card, Grid, Hidden, Typography } from "@mui/material";
import aboutMoreImg1 from "../../assets/images/about-more-1.png";
import aboutMoreImg2 from "../../assets/images/about-more-2.png";
import aboutMoreImg3 from "../../assets/images/about-more-3.png";

const aboutMores = [
  {
    title: "Lorem ipmsum is simply",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem commodi nulla iste doloribus odio enim modi maiores rem beatae corrupti. Fuga nostrum.",
    btn: "Learn More",
    img: aboutMoreImg1,
  },

  {
    title: "Lorem ipmsum is simply",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem commodi nulla iste doloribus odio enim modi maiores rem beatae corrupti. Fuga nostrum.",
    btn: "Learn More",
    img: aboutMoreImg2,
  },
  {
    title: "Lorem ipmsum is simply",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem commodi nulla iste doloribus odio enim modi maiores rem beatae corrupti. Fuga nostrum.",
    btn: "Learn More",
    img: aboutMoreImg3,
  },
];
const AboutMore = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ color: "#10C4FD", fontWeight: "bold" }}>
        WHO WE ARE
      </Typography>
      <Hidden only={"lg"}>
        <Typography
          sx={{
            color: "#9F9E9E",
            fontSize: "19px",
            width: "100%",
            margin: "auto",
            padding: "4% 0 3% 0",
          }}
        >
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          nisi exercitationem, dolorum reiciendis suscipit aperiam amet omnis
          explicabo optio, sed molestias possimus debitis dolore quo unde
          commodi eveniet expedita cupiditate?{" "}
        </Typography>
      </Hidden>
      <Hidden only={"xs"}>
        <Typography
          sx={{
            color: "#9F9E9E",
            fontSize: "19px",
            width: 800,
            margin: "auto",
            padding: "4% 0 3% 0",
          }}
        >
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
          Voluptate nisi exercitationem, dolorum reiciendis suscipit aperiam
          amet omnis explicabo optio, sed molestias possimus debitis dolore quo
          unde commodi eveniet expedita cupiditate?{" "}
        </Typography>
      </Hidden>
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
          {aboutMores.map((about, index) => (
            <Grid item rowSpacing={0} xs={6} sm={4} md={4} key={index}>
              <Card>
                <Box
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#07A4FD",
                    padding: "10%",
                    // marginBottom: "-22%",
                    border: "1px solid #000000",
                  }}
                >
                  <img
                    style={{ width: "115px", height: "115px" }}
                    srcSet={`${about.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${about.img}?w=248&fit=crop&auto=format`}
                    loading="lazy"
                  />
                  <Box>
                    <Typography
                      sx={{
                        color: "#000000",
                        fontWeight: 600,
                        margin: "30px 0 60px 0",
                      }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {about.title}
                    </Typography>
                    <Typography
                      sx={{ color: "#000000", fontSize: "17px" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {about.des}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMore;
