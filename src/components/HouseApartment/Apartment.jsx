import { Box, Grid, Hidden, Typography } from "@mui/material";
import aprtGroup from "../../assets/images/apartment-group.png";

const Apartment = () => {
  return (
    <Box
      sx={{
        border: "1px solid #10C4FD",
        padding: "6% 9% 10.5% 5%",
      }}
    >
      <Typography
        sx={{ color: "#10C4FD", textAlign: "center", marginBottom: "2%" }}
        variant="h2"
      >
        Apartment
      </Typography>
      <Typography
        sx={{ color: "#10C4FD", textAlign: "center", fontSize: "17px" }}
      >
        We work with many commercial flats
      </Typography>
      <Box sx={{ marginTop: "5%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 6, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ color: "#10C4FD", textAlign: "center", marginTop: "10%" }}
            >
              Different types of apartments we offer and how they are useful to
              work with. Please reach out to us if you have any more info
            </Typography>
            <Hidden only={"xs"}>
              <Typography
                sx={{
                  color: "#10C4FD",
                  rotate: "90deg",
                  position: "relative",
                  right: "-60%",
                }}
              >
                Text blocker here to fill 675
              </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              srcSet={`${aprtGroup}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${aprtGroup}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Apartment;
