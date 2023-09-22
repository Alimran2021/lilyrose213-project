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
// import "./topHeader.css";
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import HeaderDrawer from "./HeaderDrawer";
import { NavLink } from "react-router-dom";

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
            <HeaderDrawer />
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
                {/*  eslint-disable-next-line react/no-unknown-property */}
                <NavLink to="/home">Home</NavLink>
                <NavLink sx={{ color: "#fff" }} variant="outlined">
                  About Us
                </NavLink>
                <NavLink
                  // sx={{ color: "#fff !important", border: "1px solid #10C4FD" }}
                  // variant="outlined"
                  id="navLink"
                  to="/team"
                >
                  Team
                </NavLink>
                <NavLink sx={{ color: "#fff" }} variant="outlined">
                  What We Have To Offer
                </NavLink>
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
