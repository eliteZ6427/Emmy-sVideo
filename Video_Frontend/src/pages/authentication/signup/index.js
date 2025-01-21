import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BasicLayout from 'pages/authentication/components/BasicLayout';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import UserInfo from 'pages/authentication/signup/components/UserInfo';
import VuiBox from 'components/VuiBox';
import VuiButton from 'components/VuiButton';
import VuiTypography from 'components/VuiTypography';
import form from 'pages/authentication/signup/schemas/form';
import initialValues from 'pages/authentication/signup/schemas/initialValues';
import validations from 'pages/authentication/signup/schemas/validations';

import { register } from 'redux/actions/register';
import {getAllTourPlace} from 'redux/actions/tourplace'
import logolg from 'assets/images/logo-lg.png';
import Footer from 'pages/authentication/components/Footer';

function NewUser() {

  const { formId, formField } = form;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    values['level'] = 1
    values['usertype'] = 3
    dispatch(register(values, navigate));
  };

  useEffect(()=>{
    dispatch(getAllTourPlace());
  }, [])
  return (
    <BasicLayout>
      <VuiBox py={3} mb={1}>
        <Grid container justifyContent="center" sx={{ height: '100%' }}>
          <Grid item xs={12} lg={5}>
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
                    <VuiBox>
                      <VuiBox>
                        <UserInfo formData={{values, touched, formField, errors}} />
                        <VuiBox mt={2} width="100%" display="flex" justifyContent="end">
                          <Grid container spacing={3} justifyContent={'center'}>
                            <Grid item xs={12} sm={12} lg={12}>
                              <VuiButton
                                disabled={isSubmitting}
                                type='submit'
                                color='info'
                                size="small"
                                fullWidth
                              > Submit </VuiButton>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center'}}>
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

export default NewUser;
