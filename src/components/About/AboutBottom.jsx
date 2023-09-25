import { Box, Grid, Typography } from "@mui/material";
import aboutBottomImg from "../../assets/images/about-bottom.png";
const AboutBottom = () => {
  return (
    <Box sx={{ margin: "15% 0" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "90%" }}
            srcSet={`${aboutBottomImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${aboutBottomImg}?w=248&fit=crop&auto=format`}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ color: "#f5f5f5", fontSize: "20px", marginTop: "10%" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            voluptatibus quod voluptates officiis temporibus eos voluptatem
            rerum voluptas accusantium doloribus perferendis iusto voluptate
            eius, assumenda odio excepturi recusandae nam, ipsa consectetur et
            laudantium! Id libero voluptas at explicabo nemo natus consequatur
            ratione sunt doloremque, animi porro dolorum quasi consequuntur! Id
            libero voluptas at explicabo nemo natus consequatur ratione sunt
            doloremque, animi porro dolorum quasi consequuntur! Id libero
            voluptas at explicabo nemo natus consequatur ratione sunt
            doloremque, animi porro dolorum quasi consequuntur! Placeat!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutBottom;
