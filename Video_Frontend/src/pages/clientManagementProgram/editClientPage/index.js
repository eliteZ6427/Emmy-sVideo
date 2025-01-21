import { useDispatch, useSelector } from "react-redux";

import ClientEditComponent from "./clientForm";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "components/VuiBox";
import { getClientByID } from "redux/actions/client";
import { useEffect } from "react";
import { useParams } from "react-router";

function EditClientPage() {
    const param = useParams();
    const userdata = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClientByID(userdata.access, param.user_id));
    }, [])

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container="true" justifyContent={"center"} spacing={3} mt="2px">
                <ClientEditComponent user_id={param.user_id} />
            </Grid>
            <Footer />
        </DashboardLayout>
    )
}

export default EditClientPage;