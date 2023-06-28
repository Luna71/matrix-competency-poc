import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { InsertCommentOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";
const drawerWidth = 240;
const links = [
  {
    text: "User",
  },
  {
    text: "Profile",
    icon: <PersonIcon />,
    link: "/profile",
  },
  {
    text: "Create Matrix",
    icon: <CreateIcon />,
    link: "/create",
  },
  {
    text: "Review Matrix",
    icon: <InsertCommentOutlined />,
    link: "/review",
  }
];

function SideBar({ isSideBarOpen, setIsSideBarOpen }) {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="persistent"
      open={isSideBarOpen}
      onClose={() => setIsSideBarOpen(false)}
      sx={{
        width: { drawerWidth },
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box width="100%">
        <List>
          {links.map((link) => {
            return link.link ? (
              <ListItem key={link.text}>
                <ListItemButton onClick={() => navigate(link.link)}>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItemButton>
              </ListItem>
            ) : (
              <Typography
                marginTop="20px"
                marginBottom="5px"
                variant="h6"
                fontWeight=""
                key={link.text}
              >
                {link.text}
              </Typography>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;
