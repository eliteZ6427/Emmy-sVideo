import { useDispatch, useSelector } from "react-redux";

import CustomerEditComponent from "./customerForm";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "components/VuiBox";
import { getCustomerByID } from "redux/actions/customers";
import { useEffect } from "react";
import { useParams } from "react-router";

function EditCustomerPage() {
    const param = useParams();
    const userdata = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCustomerByID(userdata.access, param.user_id));
    }, [])

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container="true" justifyContent={"center"} spacing={3} mt="2px">
                <CustomerEditComponent user_id={param.user_id} />
            </Grid>
            <Footer />
        </DashboardLayout>
    )
}

export default EditCustomerPage;