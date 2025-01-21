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

function CustomerTable() {

  const customers = useSelector((state) => state.customers.customerData);

  const userTableData = {
    columns: [
      { Header: "User Name", accessor: "username", width: "7%" },
      { Header: "Email", accessor: "email", width: "7%" },
      { Header: "Phone Number", accessor: "phone_number", width: "7%" },
      { Header: "Address", accessor: "street", width: "15%" },
      { Header: "Contact Name", accessor: "contact_email" },
      { Header: "Contact Email", accessor: "contact_name" },
      { Header: "Contact Phone Number", accessor: "contact_phone_number" },
      { Header: "Status", accessor: "status" },
      { Header: "Action", accessor: "action", width: "10%" },
    ],
    rows:[]
  };

  userTableData.rows = customers.map((customer) => {
    customer.street = customer.street.replaceAll('_', ' ');
    return {
      ...customer,
      status: (
        <BadgeComponent flag={customer.status} />
      ),
    
    };
  });

  return (
    <VuiBox pt={6} pb={3}>
    <Card>
        <VuiBox p={3} pl={0} lineHeight={1}>
        <VuiTypography variant="h5" fontWeight="medium" color="white">
            Customers Table
        </VuiTypography>
        </VuiBox>
        <DataTable table={userTableData} canSearch />
    </Card>
    </VuiBox>
  );
}

export default CustomerTable;
