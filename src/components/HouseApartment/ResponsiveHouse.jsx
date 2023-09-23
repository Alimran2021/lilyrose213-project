import { Box, Grid, Typography } from "@mui/material";
import HouseImg from "../../assets/images/house.png";
const ResponsiveHouse = () => {
  return (
    <Box sx={{ border: "1px solid #10C4FD", padding: "0% 5%" }}>
      <Typography
        sx={{
          color: "#10C4FD",
          textAlign: "center",
          marginBottom: "10%",
          marginTop: "5%",
        }}
        variant="h2"
      >
        House
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 6, md: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: "#10C4FD",
              textAlign: "center",
              fontSize: "16px",
              marginBottom: "2%",
            }}
          >
            The different types of houses we work with
            <br />
            <br />
            Why these houses are better than normal houses
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <img
              srcSet={`${HouseImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${HouseImg}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
          </Box>
          <Typography
            sx={{
              position: "relative",
              fontWeight: "bold",
              top: "-13rem",
              left: "10rem",
              width: "103px",
              textAlign: "center",
              color: "#DCFD10",
              fontSize: "20px",
            }}
          >
            This is an example of the house
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResponsiveHouse;
