import { Box, Card, Grid, Typography } from "@mui/material";
import ArrowImg from "../../assets/images/arrow.png";
import BrushImg from "../../assets/images/brush.png";
const paintHelps = [
  {
    arrowImg: ArrowImg,
    burshImg: BrushImg,
    title: "Different types of paints",
  },
  {
    arrowImg: ArrowImg,
    burshImg: BrushImg,
    title: "Text 45",
  },
  {
    arrowImg: ArrowImg,
    burshImg: BrushImg,
    title: "Different types of paints",
  },
  {
    arrowImg: ArrowImg,
    burshImg: BrushImg,
    title: "Costing of the job",
  },
  {
    arrowImg: ArrowImg,
    burshImg: BrushImg,
    title: "Paintbrush",
  },
];
const ResponsivePaintHelp = () => {
  return (
    <div>
      <Box sx={{ textAlign: "center", marginTop: "10%" }}>
        <Typography
          sx={{
            width: "310px",
            fontSize: "30px",
            margin: "auto",
            padding: "10% 0",
            color: "#10C4FD",
          }}
          variant="h2"
        >
          {" "}
          How does painting help you ?
        </Typography>
      </Box>
      <Grid
        sx={{
          // padding: "0px 24px",
          margin: "15% 15%",
          backgroundColor: "#0f0f0f !important",
          textAllign: "center",
        }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {paintHelps.map((paintHelp, index) => (
          <Grid item rowSpacing={0} xs={12} sm={4} md={4} key={index}>
            <Card sx={{ border: "1px solid #1446F4", borderRadius: "3px" }}>
              <Box
                sx={{
                  textAlign: "center",
                  backgroundColor: "#0f0f0f",
                  paddingTop: "20%",
                  border: "1px solid #0f0f0f",
                }}
              >
                <img
                  srcSet={`${paintHelp.arrowImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${paintHelp.arrowImg}?w=248&fit=crop&auto=format`}
                  loading="lazy"
                />
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  backgroundColor: "#0f0f0f",
                  paddingTop: "5%",
                  border: "1px solid #0f0f0f",
                }}
              >
                <img
                  srcSet={`${paintHelp.burshImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${paintHelp.burshImg}?w=248&fit=crop&auto=format`}
                  loading="lazy"
                />
                <Box>
                  <Typography
                    sx={{ color: "#10C4FD" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {paintHelp.title}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ResponsivePaintHelp;
