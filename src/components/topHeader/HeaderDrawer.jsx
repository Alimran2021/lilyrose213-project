import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// const pages = ["Home", "About Us", "Team", "What We Have To Offer"];
const pages = [
  {
    link: "/home",
    page: "Home",
  },
  {
    link: "/paint",
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
            <ListItemButton to={p.link} key={index}>
              <ListItemIcon>
                <ListItemText>{p.page}</ListItemText>
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
