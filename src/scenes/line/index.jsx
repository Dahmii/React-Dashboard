import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;

// import { Box, useTheme, useMediaQuery } from "@mui/material";
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";

// const Line = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

//   // Adjust the chart height based on the screen size
//   const chartHeight = isSmallScreen ? "50vh" : isMediumScreen ? "60vh" : "75vh";

//   return (
//     <Box m="20px">
//       <Header title="Line Chart" subtitle="Simple Line Chart" />
//       <Box
//         height={chartHeight}
//         sx={{
//           overflowX: "auto",
//           margin: isSmallScreen ? "0" : "20px 0",
//           padding: isSmallScreen ? "0 10px" : "0",
//         }}
//       >
//         <LineChart />
//       </Box>
//     </Box>
//   );
// };

// export default Line;
