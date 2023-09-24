import { Box, Hidden, Typography } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const LeftFooter = () => {
  return (
    <Box>
      <Typography sx={{ color: "white", fontWeight: "bold" }} variant="h4">
        Open Designers
      </Typography>
      <Hidden only={"xs"}>
        <Typography
          sx={{
            color: "white",
            margin: "5% 0",
            fontSize: "20px",
            width: "500px",
          }}
        >
          Open source is source code that is made freely available for possible
          modification that redistribution.Products include permission to use
          the source code, design documents, or content of the product.
        </Typography>
      </Hidden>
      <Hidden only={"lg"}>
        <Typography
          sx={{
            color: "white",
            margin: "5% 0",
            fontSize: "20px",
          }}
        >
          Open source is source code that is made freely available for possible
          modification that redistribution.Products include permission to use
          the source code, design documents, or content of the product.
        </Typography>
      </Hidden>
      <Box sx={{ color: "white" }}>
        <Link to="https://discord.com/">
          <RedditIcon sx={{ fontSize: "50px" }} />
        </Link>
        <Link to="https://www.instagram.com/">
          <InstagramIcon sx={{ fontSize: "50px", margin: "0 3%" }} />
        </Link>
        <Link to="https://web.facebook.com/">
          <FacebookRoundedIcon sx={{ fontSize: "50px", marginRight: "3%" }} />
        </Link>
        <Link to="https://twitter.com/">
          <TwitterIcon sx={{ fontSize: "50px" }} />
        </Link>
      </Box>
    </Box>
  );
};

export default LeftFooter;
