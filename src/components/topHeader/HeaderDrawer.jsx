import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
const pages = [
  {
    link: "/home",
    page: "Home",
  },
  {
    link: "/about",
    page: "About",
  },
  {
    link: "/team",
    page: "Pricing",
  },
  {
    link: "/",
    page: "Product",
  },
];
const HeaderDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((p, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <NavLink to={p.link}>{p.page}</NavLink>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <Stack margin={2}>
          <Button variant="contained">Contact Us</Button>
        </Stack>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default HeaderDrawer;
