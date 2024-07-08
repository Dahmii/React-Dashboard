import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Login from "./scenes/login/index.jsx";
import Signup from "./scenes/signup/index";
// import Topbar from "./scenes/global/Topbar.jsx";
import Sidebar from "./scenes/global/Sidebar.jsx";
import Rightsidebar from "./scenes/global/Rightsidebar.jsx"; // Import Rightsidebar
import Settings from "./scenes/settings/index.jsx";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Assets from "./scenes/assets";
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation(); // Get the current route location

  // Paths where the sidebar/topbar should be hidden
  const hideSidebarTopbarPaths = ["/", "/login", "/signup"];
  const showSidebarTopbar = !hideSidebarTopbarPaths.includes(location.pathname);

  // Paths where the right sidebar should be shown
  const showRightsidebarPaths = [
    "/dashboard",
    "/team",
    "/contacts",
    "/invoices",
    "/form",
    "/calendar",
    "/bar",
    "/pie",
    "/line",
    "/geography",
    "/assets",
  ];

  const showRightsidebar = showRightsidebarPaths.includes(location.pathname);

  // State to manage user assets
  const [userAssets, setUserAssets] = useState([
    "Asset 1",
    "Asset 2",
    "Asset 3",
  ]);

  // Function to remove an asset
  const handleRemoveAsset = (asset) => {
    setUserAssets(userAssets.filter((item) => item !== asset));
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ display: "flex", height: "100vh" }}>
          {/* Conditionally render the Sidebar */}
          {showSidebarTopbar && <Sidebar />}
          <main
            className="content"
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            {/* Conditionally render the Topbar */}
            {/* {showSidebarTopbar && <Topbar />} */}
            <Box style={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                {/* <Route path="/faq" element={<FAQ />} /> */}
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/assets" element={<Assets />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </Box>
          </main>
          {/* Conditionally render the Rightsidebar */}
          {showRightsidebar && (
            <Rightsidebar
              userAssets={userAssets}
              onRemoveAsset={handleRemoveAsset}
            />
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
