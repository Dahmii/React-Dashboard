import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../themes";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme, useMediaQuery } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: isSmallScreen ? 0.6 : isMediumScreen ? 0.8 : 1,
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
      field: "address",
      headerName: "Address",
      flex: isSmallScreen ? 0.7 : isMediumScreen ? 0.7 : 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: isSmallScreen ? 0.6 : isMediumScreen ? 0.7 : 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: isSmallScreen ? 0.6 : isMediumScreen ? 0.9 : 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future References"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
