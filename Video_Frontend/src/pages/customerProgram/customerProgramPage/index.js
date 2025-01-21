import { useDispatch, useSelector } from "react-redux";

import CustomerTable from "./components/customerTable";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// icons
import Footer from "examples/Footer";
import UsersList from "./components/UsersList";
import VuiBox from "components/VuiBox";
import { getCustomers } from "redux/actions/customers";
import { useEffect } from "react";

function CustomerManagement() {
  const dispatch = useDispatch();

  const userdata = useSelector((state) => state.auth.userData);

  const param = {
    start_row_index: 0,
    end_row_index: 9
  }

  useEffect(() => {
    dispatch(getCustomers(userdata.access, param));
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox pt={6}>
        <UsersList />
      </VuiBox>
      <CustomerTable />
      <Footer />
    </DashboardLayout>
  );
}

export default CustomerManagement;
