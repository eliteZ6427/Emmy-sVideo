import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import UserInfo from 'pages/authentication/signup/components/UserInfo';
import VuiBox from 'components/VuiBox';
import VuiButton from 'components/VuiButton';
import form from 'pages/authentication/signup/schemas/form';
import initialValues from 'pages/authentication/signup/schemas/initialValues';
import validations from 'pages/authentication/signup/schemas/validations';

import { register } from 'redux/actions/register';
import { getAllTourPlace } from 'redux/actions/tourplace'
import logolg from 'assets/images/logo-lg.png';
import Footer from 'pages/authentication/components/Footer';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function ADDISPPage() {

  const { formId, formField } = form;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    values['level'] = 1
    values['usertype'] = 2
    dispatch(register(values, navigate));
  };

  useEffect(() => {
    dispatch(getAllTourPlace());
  }, [])
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
            <Formik
              initialValues={initialValues}
              validationSchema={validations[0]}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: '100%' }}>
                    <VuiBox
                      component='img'
                      src={logolg}
                      sx={({ breakpoints }) => ({
                        alignSelf: 'center',
                        paddingTop: '20px',
                        [breakpoints.down('xs')]: {
                          width: '200px',
                        },
                        [breakpoints.between('xs', 'md')]: {
                          width: '250px',
                        },
                        [breakpoints.up('lg')]: {
                          width: '350px',
                        },
                      })}
                    />
                    <VuiBox>
                      <VuiBox>
                        <UserInfo formData={{ values, touched, formField, errors }} />
                        <Grid item xs={12} sm={12}>
                          <VuiBox ml="auto" mt="10px" sx={{textAlign:'center'}}>
                            <VuiButton variant="outlined" sx={{ width: '100%' }} color="info" size="small">
                              Submit
                            </VuiButton>
                          </VuiBox>
                        </Grid>
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

export default ADDISPPage;
