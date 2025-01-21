import { useDispatch, useSelector } from "react-redux";

import ISPUserEditComponent from "./ispUserForm";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "components/VuiBox";
import { getISPUserByID } from "redux/actions/ispUsers";
import { useEffect } from "react";
import { useParams } from "react-router";

function EditISPPage() {
    const param = useParams();
    const userdata = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getISPUserByID(userdata.access, param.user_id));
    }, [])

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container="true" justifyContent={"center"} spacing={3} mt="2px">
                <ISPUserEditComponent user_id={param.user_id} />
            </Grid>
            <Footer />
        </DashboardLayout>
    )
}

export default EditISPPage;