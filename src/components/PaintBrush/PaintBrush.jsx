import { Box, Container, Grid, Typography } from "@mui/material";
import Img from "../../assets/images/paint-brush.png";
const paints = [
  {
    img: "../../assets/images/paint-brush.png",
    headTitle: "PaintBrush",
    title: "Text 1",
  },
  {
    img: "../../assets/images/paint-brush.png",
    headTitle: "PaintBrush",
    title: "Text 2",
  },
  {
    img: "../../assets/images/paint-brush.png",
    headTitle: "PaintBrush",
    title: "Text 3",
  },
];
const PaintBrush = () => {
  return (
    <Box sx={{ marginTop: "-4%", marginBottom: "10%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 4 }}>
        {paints.map((paint, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ textAlign: "center", marginTop: "5%" }}>
              <img
                srcSet={`${Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${Img}?w=248&fit=crop&auto=format`}
                loading="lazy"
              />
              <Typography
                sx={{
                  position: "relative",
                  top: "-60px",
                  color: "#10C4FD",
                }}
              >
                {paint.headTitle}
              </Typography>
              <Typography
                sx={{ color: "#10C4FD", fontSize: "20px", fontWeight: "bold" }}
              >
                {paint.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PaintBrush;
