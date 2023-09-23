import { Box, Hidden, Typography } from "@mui/material";
import paintHelpImg from "../../assets/images/paint-help.png";
import paintBrushImg from "../../assets/images/paintHelp-brush.png";
import ResponsivePaintHelp from "./ResponsivePaintHelp";

const PaintHelp = () => {
  return (
    <>
      <Hidden only={"xs"}>
        <Box
          sx={{ textAlign: "center", marginTop: "10%", marginBottom: "-20%" }}
        >
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
          <img
            srcSet={`${paintHelpImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${paintHelpImg}?w=248&fit=crop&auto=format`}
            loading="lazy"
          />
        </Box>
        <Box>
          <Box sx={{ position: "relative", left: "2cm", top: "15rem" }}>
            <img
              srcSet={`${paintBrushImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${paintBrushImg}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
            <Typography
              sx={{
                color: "#10C4FD",
                width: "106px",
                textAlign: "center",
                position: "relative",
                top: "-4rem",
                left: "4rem",
              }}
            >
              Different types of paints{" "}
            </Typography>
          </Box>
          <Box sx={{ position: "relative", left: "1cm", top: "-2rem" }}>
            <img
              srcSet={`${paintBrushImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${paintBrushImg}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
            <Typography sx={{ color: "#10C4FD" }}>Text 45</Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              left: "3.5cm",
              top: "-18rem",
            }}
          >
            <img
              srcSet={`${paintBrushImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${paintBrushImg}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
            <Typography
              sx={{
                color: "#10C4FD",
                width: "106px",
                textAlign: "center",
                position: "relative",
                top: "-4rem",
                left: "-7rem",
              }}
            >
              Different types of paints{" "}
            </Typography>
          </Box>
          <Box sx={{ position: "relative", left: "10.5cm", top: "-4cm" }}>
            <img
              srcSet={`${paintBrushImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${paintBrushImg}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
            <Typography
              sx={{
                color: "#10C4FD",
                position: "relative",
                bottom: "9rem",
                left: "6rem",
              }}
            >
              Costing of the job
            </Typography>
          </Box>
          <Box sx={{ position: "relative", left: "21.5cm", top: "-6cm" }}>
            <img
              srcSet={`${paintBrushImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${paintBrushImg}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
            <Typography
              sx={{
                color: "#10C4FD",
                position: "relative",
                bottom: "12rem",
                left: "-7rem",
              }}
            >
              Paintbrush
            </Typography>
          </Box>
        </Box>
      </Hidden>
      <Hidden only={"lg"}>
        <Box>
          <ResponsivePaintHelp />
        </Box>
      </Hidden>
    </>
  );
};

export default PaintHelp;
