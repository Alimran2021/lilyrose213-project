import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeaderDrawer from "./HeaderDrawer";
import { NavLink } from "react-router-dom";
import BrushImg from "../../assets/images/print-brush.png";
import NavProduct from "./NavProduct";
const TopHeader = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "#0F0F0F",
          padding: "10px",
          border: "1px solid #10C4FD",
        }}
      >
        <Toolbar>
          <Box sx={{ marginRight: "10px", cursor: "pointer" }}>
            <img
              srcSet={`${BrushImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${BrushImg}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
          </Box>
          <Typography sx={{ cursor: "pointer" }}>
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
                <NavLink to="/paint" sx={{ color: "#fff" }} variant="outlined">
                  About
                </NavLink>
                <NavLink
                  // sx={{ color: "#fff !important", border: "1px solid #10C4FD" }}
                  // variant="outlined"
                  id="navLink"
                  to="/team"
                >
                  Pricing
                </NavLink>
                <NavLink sx={{ color: "#fff" }} variant="outlined">
                  <NavProduct />
                </NavLink>
              </Stack>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                <NavLink sx={{ color: "black" }} to="https://www.google.com/">
                  Contact Us
                </NavLink>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default TopHeader;
