import { Box, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../themes";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Rightsidebar from "../../scenes/global/Rightsidebar"; // Ensure the import path is correct

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define screen breakpoints for responsive behavior
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-960px

  // Determine appropriate grid columns based on screen size
  const gridColumns = isSmallScreen ? 1 : isMediumScreen ? 6 : 12;
  const apiKey = "";

  return (
    <Box display="flex">
      <Box flexGrow={1} m="20px" mr="270px">
        {/* HEADER */}
        {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns={`repeat(${gridColumns}, 1fr)`} // Adjust grid based on screen size
          gridAutoRows="minmax(100px, auto)"
          gap="20px"
        >
          {/* ROW 1 */}
          {/* Example StatBoxes */}
          {/* <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="431,225"
              subtitle="Sales Obtained"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box> */}

          {/* ROW 2 */}
          <Box
            gridColumn="span 12" //{isSmallScreen ? "span 1" : "span 8"}
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            ></Box>
            <Box height={isSmallScreen ? "400px" : "600px"} overflow="hidden">
              <GeographyChart apiKey={apiKey} isDashboard={false} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Rightsidebar />
    </Box>
  );
};

export default Dashboard;
