import { useDispatch, useSelector } from "react-redux";
import ISPUsersTable from "./components/ispUsersTable";
import ISPADDComponent from "./components/ispAddComponent";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import UsersList from "./components/UsersList";
import VuiBox from "components/VuiBox";
import { getISPUsers } from "redux/actions/ispUsers";
import { useEffect } from "react";
import { getAllTourPlace } from "redux/actions/tourplace";
import { Modal } from 'react-responsive-modal';
import { Card, CardContent } from "@mui/material";
import { action_type } from "redux/action_type";

function ISPUsersManagement() {
  const dispatch = useDispatch();

  const userdata = useSelector((state) => state.auth.userData);
  const addIspModalStatus = useSelector((state) => state.ispUsersReducer.addIspModalStatus);

  const toogleAddISPModal = () => dispatch({ type: action_type.TOOGLE_ISP_ADD_MODAL, status: !addIspModalStatus });

  const param = {
    start_row_index: 0,
    end_row_index: 9
  }

  useEffect(() => {
    dispatch(getISPUsers(userdata.access, param));
    dispatch(getAllTourPlace());
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox pt={6}>
        <UsersList />
      </VuiBox>
      <ISPUsersTable />
      <Modal open={addIspModalStatus} center styles={{ modal: { background: '#171a42', minWidth: '30%', marginTop: 100, maxWidth: '20%' }, closeButton: { display: 'none' } }} onClose={toogleAddISPModal}>
        <Card sx={{ minHeight: "490px" }}>
          <CardContent sx={{ padding: 0 }}>
            <ISPADDComponent toogleModal={toogleAddISPModal} />
          </CardContent>
        </Card>
      </Modal>
      <Footer />
    </DashboardLayout>
  );
}

export default ISPUsersManagement;
