import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RightFooter = () => {
  return (
    <Box>
      <Grid container rowSpacing={1}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{ color: "#ffffff", fontWeight: "bold", marginBottom: "20%" }}
          >
            Explor
          </Typography>
          <Box sx={{ paddingLeft: "20%" }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Go Pro</Link>
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Explor Designs</Link>
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Create Designs</Link>
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Playoffs</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{ color: "#ffffff", fontWeight: "bold", marginBottom: "20%" }}
          >
            Innovate
          </Typography>
          <Box sx={{ paddingLeft: "20%" }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Tags</Link>
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">API</Link>
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Places</Link>
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Creative Markets</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{ color: "#ffffff", fontWeight: "bold", marginBottom: "20%" }}
          >
            About
          </Typography>
          <Box sx={{ paddingLeft: "20%" }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Community</Link>
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Designers</Link>
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Support</Link>
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "20%",
              }}
            >
              <Link to="/">Tearm of service</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightFooter;
