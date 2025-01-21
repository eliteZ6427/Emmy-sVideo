import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

// @material-ui core components
import Card from "@mui/material/Card";
import CustomerEditInfo from "./components";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { updateCustomer } from "redux/actions/customers";
import { useNavigate } from "react-router-dom";
import validations from "./schemas/validations";

// Settings page components

// Data
function CustomerEditComponent(user) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancelChange = () => {
    return navigate("/customerManagement")
  }
  const selectedCustomerData = useSelector((state) => state.customers.selectedCustomerData);
  const userdata = useSelector((state) => state.auth.userData);

  const handleSubmit = async (values, actions) => {
    values.user_id = user.user_id;
    dispatch(updateCustomer(userdata.access, values))
      .finally(() => {
        return navigate("/customerManagement")
      })
  };

  const { formId, formField } = form;

  if (selectedCustomerData.length != 0) {
    initialValues.username = selectedCustomerData.username
    initialValues.email = selectedCustomerData.email
    initialValues.phone_number = selectedCustomerData.phone_number
    initialValues.street = selectedCustomerData.street
    initialValues.country = selectedCustomerData.country
    initialValues.state = selectedCustomerData.state
    initialValues.zipcode = selectedCustomerData.zipcode
    initialValues.city = selectedCustomerData.city
    initialValues.contact_name = selectedCustomerData.contact_name
    initialValues.contact_email = selectedCustomerData.contact_email
    initialValues.contact_phone_number = selectedCustomerData.contact_phone_number
    initialValues.status = selectedCustomerData.status
  }

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <VuiBox mb="40px">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Edit User Info
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
              <CustomerEditInfo formData={{ values, touched, formField, errors, selectedCustomerData }} />
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

export default CustomerEditComponent;
