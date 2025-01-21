import Card from "@mui/material/Card";
import DataTable from "./DataTable";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useSelector } from "react-redux";
import VuiBadgeDot from "components/VuiBadgeDot";
import { action_type } from "redux/action_type";
import { useDispatch } from "react-redux";

const BadgeComponent = (flag) => {
  return flag.flag ?
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" badgeContent="Verified" />
    </VuiBox> :
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" color="error" badgeContent="Non Verified" />
    </VuiBox>
}

function ISPUsersTable() {
  const dispatch = useDispatch();
  
  const users = useSelector((state) => state.ispUsersReducer.ispUsersData);
  const tour_place = useSelector((state) => state.tourplaceReducer.tourplaceData);
  const addIspModalStatus = useSelector((state) => state.ispUsersReducer.addIspModalStatus);

  const handleAddbutton = () => dispatch({ type: action_type.TOOGLE_ISP_ADD_MODAL, status: !addIspModalStatus });

  const userTableData = {
    columns: [
      { Header: "User Name", accessor: "username", align: 'center' },
      { Header: "Email", accessor: "email", align: 'center' },
      { Header: "Phone Number", accessor: "phone_number", align: 'center' },
      { Header: "Tour Place", accessor: "tour_place" },
      { Header: "Email Verified", accessor: "is_active", align: 'center' },
      { Header: "Status", accessor: "status", align: 'center' },
      { Header: "Action", accessor: "action", align: 'center' },
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
      is_active: (<BadgeComponent flag={user.is_active} />),
      status: (<BadgeComponent flag={user.status} />),
    };
  });

  return (
    <VuiBox pt={6} pb={3}>
      <Card>
        <VuiBox p={3} pl={0} lineHeight={1}>
          <VuiTypography variant="h5" fontWeight="medium" color="white">
            ISP Users Table
          </VuiTypography>
        </VuiBox>
        <DataTable table={userTableData} canSearch addHandleButtonChange={handleAddbutton}/>
      </Card>
    </VuiBox>
  );
}

export default ISPUsersTable;
