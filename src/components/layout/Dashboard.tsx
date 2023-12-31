"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { LoginButton } from "../ui/LoginButton";
import DashboardDrawer from "../ui/DashboardDrawer";

interface DashboardProps {
  children: React.ReactNode;
}

/**
 * Build a side bar on the left containing the available sections as well as a top bar.
 * The side bar is expected to collapse if displayed on a small screen
 *
 * @param props - children
 * @return an dashboard layout
 */
export default function Dashboard(props: DashboardProps) {
  /** State management for mobile drawer */
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /** Drawer width */
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "white",
        }}
      >
        <Stack direction="row">
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
              data-testid="drawer-toggle-button"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <div />
            <LoginButton />
          </Toolbar>
        </Stack>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="side bar"
      >
        {/* Here two types of drawers are rendered:
           1. Temporary drawer: Visible on small screens (xs) and is collapsible.
           2. Permanent drawer: Visible on larger screens (sm) and stays fixed.
          Depending on the screen size, only one will be visible at a time. */}
        <DashboardDrawer
          variant="temporary"
          mobileOpen={mobileOpen}
          width={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <DashboardDrawer
          variant="permanent"
          mobileOpen={mobileOpen}
          width={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
      <Box
        component="main"
        sx={{ pt: 10, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
