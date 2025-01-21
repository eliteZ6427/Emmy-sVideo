import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BasicLayout from 'pages/authentication/components/BasicLayout';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import UserInfo from 'pages/authentication/ispsignup/components/UserInfo';
import VuiBox from 'components/VuiBox';
import VuiButton from 'components/VuiButton';
import VuiTypography from 'components/VuiTypography';
import form from 'pages/authentication/ispsignup/schemas/form';
import initialValues from 'pages/authentication/ispsignup/schemas/initialValues';
import validations from 'pages/authentication/ispsignup/schemas/validations';

import { ispregister } from 'redux/actions/register';
import logolg from 'assets/images/logo-lg.png';
import Footer from 'pages/authentication/components/Footer';
import { useParams } from "react-router";

function ISPRegister() {

  const { formId, formField } = form;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();

  const handleSubmit = async (values, actions) => {
    const token = param.token;
    dispatch(ispregister(values, token, navigate));
  };

  return (
    <BasicLayout>
      <VuiBox py={3} mb={1}>
        <Grid container justifyContent="center" sx={{ height: '100%' }}>
          <Grid item xs={12} lg={8}>
            <Formik
              initialValues={ initialValues }
              validationSchema={ validations[0] }
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
                        <UserInfo formData={{values, touched, formField, errors}} />
                        <VuiBox mt={2} width="100%" display="flex" justifyContent="end">
                          <Grid container spacing={3} justifyContent={'center'}>
                            <Grid item xs={12} sm={4} lg={4}>
                              <VuiBox px='10px'>
                                <VuiTypography variant='button' color='text' fontWeight='regular'>
                                  Already have an account?{' '}
                                  <VuiTypography
                                    component={Link}
                                    to='/login'
                                    variant='button'
                                    color='white'
                                    fontWeight='medium'
                                  >
                                    Sign in
                                  </VuiTypography>
                                </VuiTypography>
                              </VuiBox>
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4}>
                              <VuiBox px='10px'>
                                <VuiButton
                                  disabled={isSubmitting}
                                  type='submit'
                                  sx={{ minWidth: '100px' }}
                                  color='info'
                                > Submit </VuiButton>
                              </VuiBox>
                            </Grid>
                          </Grid>
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
      <Footer full />
    </BasicLayout>
  );
}

export default ISPRegister;
