import { Form, Formik } from "formik";

import GradientBorder from "examples/GradientBorder";
import { Link } from "react-router-dom";
import LoginInfo from "./components";
import LoginLayout from "pages/authentication/components/LoginLayout";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import borders from "assets/theme/base/borders";
import form from "pages/authentication/signin/schemas/form";
import initialValues from "./schemas/initialValues";
import { login } from "redux/actions/login";
import { useDispatch } from 'react-redux'
import validations from "pages/authentication/signin/schemas/validations";
import logolg from "assets/images/logo-lg.png";
import { Box, Modal } from "@mui/material";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { getAllTourPlace } from "redux/actions/tourplace";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'linear-gradient(127.09deg, rgb(62 0 159) 19.41%, rgb(63 64 64))',
  border: '0 solid rgba(0, 0, 0, 0.125)',
  borderRadius: '1.25rem',
  boxShadow: 24,
  color: 'white',
  pt: 2,
  px: 4,
  pb: 3,
};

function Basic() {
  const currentValidation = validations[0];
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.setSubmitting(false);
    actions.resetForm();
  };
  const [open, setOpen] = useState(false);
  const videopath = process.env.REACT_APP_BASE_URL + '/media/guide/tutorial.mp4';
  const { formId, formField } = form;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    dispatch(getAllTourPlace());
  }, [])
  return (
    <LoginLayout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 700, color: 'white !important' }}>
          <ReactPlayer url={videopath} playing controls width={'100%'} />
        </Box>

      </Modal>
      <GradientBorder borderRadius={borders.borderRadius.form} minWidth="100%" maxWidth="100%">
        <VuiBox
          borderRadius="inherit"
          p="45px"
          sx={({ palette: { secondary } }) => ({
            backgroundColor: secondary.main,
          })}
        >
          <VuiBox
            sx={{ textAlign: 'center' }}
          >
            <VuiBox
              component='img'
              src={logolg}
              sx={({ breakpoints }) => ({
                alignSelf: 'center',
                paddingTop: '20px',
                [breakpoints.down("xs")]: {
                  width: "200px",
                },
                [breakpoints.between("xs", "md")]: {
                  width: "250px",
                },
                [breakpoints.up("md")]: {
                  width: "350px",
                },
              })}
            />
          </VuiBox>
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidation}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form id={formId} autoComplete="off">
                <LoginInfo formData={{ values, touched, formField, errors }} />
                <VuiBox mt={4} mb={1}>
                  <VuiButton
                    disabled={isSubmitting}
                    type="submit"
                    color="info"
                    fullWidth
                  >
                    SIGN IN
                  </VuiButton>
                </VuiBox>
              </Form>
            )}
          </Formik>
          <VuiBox mt={3} textAlign="center">
            <VuiTypography variant="button" color="text" fontWeight="regular">
              Don't have an account?{" "}
              <VuiTypography
                component={Link}
                to="/register"
                variant="button"
                color="white"
                fontWeight="medium"
              >
                Sign up
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
          <VuiBox textAlign="center">
            <VuiTypography variant="button" color="text" fontWeight="regular" onClick={handleOpen} sx={{textDecoration: 'underline', cursor: 'pointer'}}>
              How to use our program?
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </GradientBorder>
    </LoginLayout>
  );
}

export default Basic;
