import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

// @material-ui core components
import Card from "@mui/material/Card";
import ClientEditInfo from "./components";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { updateClient } from "redux/actions/client";
import { useNavigate } from "react-router-dom";
import validations from "./schemas/validations";
import { useEffect } from "react";
import { getAllTourPlace } from "redux/actions/tourplace";

// Settings page components

// Data
function ClientEditComponent(user) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancelChange = () => {
    return navigate("/ispUsersManagement")
  }
  const selectedClientData = useSelector((state) => state.clientReducer.selectedClientData);
  const selectTourPlace = useSelector((state) => state.tourplaceReducer.tourplaceData);
  const tourplacedata = selectTourPlace.map((item) => ({value: item.id, label: item.place_name}))

  const userdata = useSelector((state) => state.auth.userData);

  const handleSubmit = async (values, actions) => {
    values.user_id = user.user_id;
    dispatch(updateClient(userdata.access, values))
      .finally(() => {
        return navigate("/clientManagement")
      })
  };
  useEffect(() => {
    dispatch(getAllTourPlace());
  }, [])
  const { formId, formField } = form;

  if (selectedClientData.length != 0) {
    initialValues.username = selectedClientData.username
    initialValues.email = selectedClientData.email
    initialValues.phone_number = selectedClientData.phone_number
    initialValues.tourplace = selectedClientData.tourplace
    initialValues.status = selectedClientData.status
  }
  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <VuiBox mb="40px">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Edit Client Info
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <Formik
          initialValues={initialValues}
          validationSchema={validations[0]}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form id={formId} autoComplete="off">
              <ClientEditInfo formData={{ values, touched, formField, errors, selectedClientData }} tourplacedata={tourplacedata}  />
              <VuiBox
                display="flex"
                justifyContent="end"
                alignItems={{ sm: "flex-start", md: "center" }}
                flexDirection={{ sm: "column", md: "row" }}
                p={1.4}
              >
                <VuiBox display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                  <VuiButton variant="outlined" color="white" size="small" onClick={handleCancelChange}>
                    Cancel
                  </VuiButton>
                  <VuiBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
                    <VuiButton
                      variant="contained"
                      color="error"
                      sx={{ height: "100%" }}
                      size="small"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      Save Change
                    </VuiButton>
                  </VuiBox>
                </VuiBox>
              </VuiBox>
            </Form>
          )}
        </Formik>
      </VuiBox>
    </Card>
  );
}

export default ClientEditComponent;
