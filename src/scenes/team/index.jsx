import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../themes";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Rightsidebar from "../../scenes/global/Rightsidebar";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Adjust the column configuration based on the screen size
  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    {
      field: "name",
      headerName: "Name",
      flex: isSmallScreen ? 0.6 : isMediumScreen ? 0.8 : 1, // Adjust based on screen size
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: isSmallScreen ? 0.3 : isMediumScreen ? 0.4 : 0.5,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: isSmallScreen ? 0.6 : isMediumScreen ? 0.8 : 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: isSmallScreen ? 0.7 : isMediumScreen ? 0.9 : 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 0.8,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box display="flex">
      <Box flexGrow={1} m="20px" mr="270px">
        {/* <Header title="Simulations" subtitle="Manage simulations" /> */}
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              fontSize: isSmallScreen
                ? "0.75rem"
                : isMediumScreen
                ? "0.85rem"
                : "1rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          {/* Adjust density based on screen size */}
          <DataGrid
            checkboxSelection
            rows={mockDataTeam}
            columns={columns}
            density={
              isSmallScreen
                ? "compact"
                : isMediumScreen
                ? "standard"
                : "comfortable"
            }
          />
        </Box>
      </Box>
      <Rightsidebar />
    </Box>
  );
};

export default Team;
