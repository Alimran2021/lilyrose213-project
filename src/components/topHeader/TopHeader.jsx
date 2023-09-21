import React, { useState } from "react";
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import HeaderDrawer from "./HeaderDrawer";

const TopHeader = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#0F0F0F" }}>
        <Toolbar>
          <Typography>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <span sx={{ color: "#fff" }}>
              {/* eslint-disable-next-line react/no-unknown-property */}
              PAINT
            </span>
            <Typography
              margin={{ display: "inline-block" }}
              sx={{ color: "#10C4FD", marginLeft: "5px" }}
            >
              {" "}
              CLOCK
            </Typography>
          </Typography>
          {"  "}
          {isMatch ? (
            <>
              <HeaderDrawer />
            </>
          ) : (
            <>
              <Stack
                direction="row"
                spacing={3}
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                columnSpacing={{ md: 5 }}
              >
                <Button sx={{ color: "#fff" }} variant="outlined">
                  Home
                </Button>
                <Button sx={{ color: "#fff" }} variant="outlined">
                  About Us
                </Button>
                <Button sx={{ color: "#fff" }} variant="outlined">
                  Team
                </Button>
                <Button sx={{ color: "#fff" }} variant="outlined">
                  What We Have To Offer
                </Button>
              </Stack>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Contact Us
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default TopHeader;
