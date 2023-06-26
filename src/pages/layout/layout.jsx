import * as React from "react";
import Box from "@mui/material/Box";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Outlet />
    </Box>
  );
}
