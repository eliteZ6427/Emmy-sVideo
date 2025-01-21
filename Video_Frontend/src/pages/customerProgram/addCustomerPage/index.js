import { Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux'

import Address from "pages/customerProgram/addCustomerPage/components/Address";
import Card from "@mui/material/Card";
import ContactInfo from "pages/customerProgram/addCustomerPage/components/ContactInfo";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// Vision UI Dashboard PRO React example components
// @mui material components
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
// NewUser page components
import UserInfo from "pages/customerProgram/addCustomerPage/components/UserInfo";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import form from "pages/customerProgram/addCustomerPage/schemas/form";
import initialValues from "pages/customerProgram/addCustomerPage/schemas/initialValues";
import { register } from "redux/actions/register";
import { useState } from "react";
// NewUser layout schemas for form and form feilds
import validations from "pages/customerProgram/addCustomerPage/schemas/validations";

function getSteps() {
  return ["User Info", "Address", "Contact Info"];
}

function getStepContent(stepIndex, formData) {
  switch (stepIndex) {
    case 0:
      return <UserInfo formData={formData} />;
    case 1:
      return <Address formData={formData} />;
    case 2:
      return <ContactInfo formData={formData} />;
    default:
      return null;
  }
}

function NewUser() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const dispatch = useDispatch()

  const handleBack = () => setActiveStep(activeStep - 1);
  const submitForm = async (values, actions) => {
    // eslint-disable-next-line no-alert
    values.usertype = 2;
    dispatch(register(values));
    actions.setSubmitting(false);
    actions.resetForm();
    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <VuiBox>
                      <VuiBox>
                        {getStepContent(activeStep, {
                          values,
                          touched,
                          formField,
                          errors,
                        })}
                        <VuiBox mt={2} width="100%" display="flex" justifyContent="space-between">
                          {activeStep === 0 ? (
                            <VuiBox />
                          ) : (
                            <VuiButton
                              variant="gradient"
                              sx={{ minWidth: "100px" }}
                              color="light"
                              onClick={handleBack}
                            >
                              prev
                            </VuiButton>
                          )}
                          <VuiButton
                            disabled={isSubmitting}
                            type="submit"
                            sx={{ minWidth: "100px" }}
                            color="info"
                          >
                            {isLastStep ? "send" : "next"}
                          </VuiButton>
                        </VuiBox>
                      </VuiBox>
                    </VuiBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewUser;
