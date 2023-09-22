import Img from "../../assets/images/img-1.png";
import { Box, Grid, Typography } from "@mui/material";

function BottomHeader() {
  return (
    <>
      <Box sx={{ padding: "0px 24px", marginTop: "15%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                fontSize: "55px",
                color: "#10C4FD",
                fontWeight: 500,
                textAlign: "center",
                lineHeight: "55px",
              }}
            >
              {" "}
              In work truculency <br /> abhorrent be list jazzy <br />{" "}
              jacarandas in a fizzy jinx <br /> fig jump jukebox zappy <br />{" "}
              jupe
              <br />
              <br />
              <Typography>abhorrent be list jazzy jacarandasthis</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ textAlign: "center" }}>
              <img
                srcSet={`${Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${Img}?w=248&fit=crop&auto=format`}
                loading="lazy"
              />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default BottomHeader;
