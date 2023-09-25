import { Box, Typography } from "@mui/material";
import TopHeader from "../topHeader/TopHeader";

const NotFound = () => {
  return (
    <Box>
      <TopHeader />
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          color: "#ffffff",
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        404 Page
      </Typography>
    </Box>
  );
};

export default NotFound;
