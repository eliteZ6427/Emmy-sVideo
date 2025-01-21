import Card from "@mui/material/Card";
import DataTable from "./DataTable";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useSelector } from "react-redux";
import VuiBadgeDot from "components/VuiBadgeDot";

const BadgeComponent = (flag) => {
  return flag.flag ?
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" badgeContent="Verified" />
    </VuiBox> :
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" color="error" badgeContent="Non Verified" />
    </VuiBox>
}

function ClientsTable({tourplace}) {

  const users = useSelector((state) => state.clientReducer.clientsData);

  const userTableData = {
    columns: [
      { Header: "User Name", accessor: "username", align: 'center' },
      { Header: "Email", accessor: "email", align: 'center' },
      { Header: "Phone Number", accessor: "phone_number", align: 'center' },
      { Header: "Tour Place", accessor: "tour_place" },
      { Header: "Email Verified", accessor: "is_active", align: 'center' },
    ],
    rows: []
  };

  userTableData.rows = users.map((user) => {
    return {
      ...user,
      tour_place: (
        user.tourplace.map((item, key) => {
          return <li key={key}>{item.place_name}</li>
        })
      ),
      is_active:(<BadgeComponent flag={user.is_active} />),
    };
  });

  return (
    <VuiBox pt={6} pb={3}>
      <Card>
        <VuiBox p={3} pl={0} lineHeight={1}>
          <VuiTypography variant="h5" fontWeight="medium" color="white">
            Clients Table
          </VuiTypography>
        </VuiBox>
        <DataTable 
          table={userTableData} 
          canSearch 
          pagination={{ variant: "gradient", color:"info" }}
          entriesPerPage={{ defaultValue: 10, entries: [5, 10, 15, 20, 25] }}
          showTotalEntries={true}
          tourplace={tourplace}
          isSelectable={true}
          />
      </Card>
    </VuiBox>
  );
}

export default ClientsTable;
