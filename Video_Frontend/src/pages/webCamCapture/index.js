/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import 'react-responsive-modal/styles.css';

import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import AppBar from "@mui/material/AppBar";
import ChildAddComponent from './components/childAddComponent';
import ClientAddComponent from './components/clientAddComponent';
// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Divider from '@mui/material/Divider';
// icons
import Footer from "examples/Footer";
import { MdOutlineChildCare } from "react-icons/md";
import { Modal } from 'react-responsive-modal';
import PropTypes from 'prop-types';
import { RiParentFill } from "react-icons/ri";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
// @mui material components
import VuiBox from "components/VuiBox";
import VuiButton from 'components/VuiButton';
import VuiTypography from 'components/VuiTypography';
import WebCamCameraCompoent from './components/webCamComponent';
import { action_type } from 'redux/action_type';
import image from "assets/images/product-page.png";
import image1 from "assets/images/male-avatar.png";

function WebCamCapture() {

  const camera_allow_status = useSelector((state) => state.webCamReducer.camera_allow);
  const storePhotos = useSelector((state) => state.webCamReducer.client_photos);
  const dispatch = useDispatch();

  const allowCamera = () => dispatch({ type: action_type.ALLOW_CAMERA, allow_status: true });
  const set_permission_status = (status) => dispatch({ type: action_type.SET_PERMISSION_STATUS, permission_status: status });

  const toogleClientModal = () => setModalStatus(!modalStatus);
  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  const resetPhotos = () => dispatch({ type: action_type.RESET_CLIENT_PHOTO });

  const reloadPage = async () => {
    await resetPhotos();
    window.location.reload();
  }
  const [tabValue, setTabValue] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);

  const checkCameraPermission = async () => {
    try {
      const res = await navigator.permissions.query({ name: 'camera' });
      if (res.state === 'granted') {
        set_permission_status('granted');
      } else if (res.state === 'prompt') {
        set_permission_status('undetermined');
      }
    } catch (error) {
      set_permission_status('undetermined');
    }
  };

  const requestPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      set_permission_status('granted');
      allowCamera();
    } catch (error) {
      set_permission_status('undetermined');
    }
  };
  useEffect(() => {
    checkCameraPermission()
  }, [])

  const client_menu_item = () => {
    return <Grid item xs={12} md={6} lg={6.5} xl={6} xxl={4} sx={{ ml: "auto" }}>
      <AppBar>
        <Tabs
          value={tabValue}
          onChange={handleSetTabValue}
          variant='fullWidth'
          sx={{ padding: 1, background: "transparent", display: "flex", justifyContent: "space-between" }}
        >
          <Tab
            label="Client"
            icon={<RiParentFill size="16px" color="white" fontWeight="bold" />}
          />
          <Tab
            label="Child"
            icon={<MdOutlineChildCare size="16px" color="white" fontWeight="bold" />}
          />
        </Tabs>
      </AppBar>
    </Grid>
  }

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <VuiBox
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <VuiBox sx={{ p: 3 }}>
            {children}
          </VuiBox>
        )}
      </VuiBox>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Grid container justifyContent={'center'} spacing={3}>
          <Modal open={modalStatus} center styles={{ modal: { background: '#171a42', minWidth: '30%', marginTop: 100, maxWidth: '20%' }, closeButton: { display: 'none' } }} onClose={toogleClientModal}>
            <Card sx={{ minHeight: "490px" }}>
              <CardHeader component={client_menu_item} />
              <Divider light sx={{ marginTop: 5 }} />
              <CardContent sx={{ padding: 0 }}>
                <TabPanel value={tabValue} index={0}>
                  <ClientAddComponent toogleModal={toogleClientModal} />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <ChildAddComponent toogleModal={toogleClientModal} />
                </TabPanel>
              </CardContent>
            </Card>
          </Modal>
          <Grid item justifyContent={"space-around"} mt="2px" width={'47%'}>
            {camera_allow_status ?
              <Card sx={{ justifyContent: 'center' }} >
                <CardContent>
                  <WebCamCameraCompoent />
                </CardContent>
                <CardContent>
                  <Typography variant="body2" color="red">
                    Please take your faces at 3 position. (front, left side, right side)
                  </Typography>
                </CardContent>
              </Card> :
              <Modal open={!camera_allow_status} center styles={{ modal: { background: 'none', minWidth: '30%' }, closeButton: { display: 'none' }, overlay: { background: '#171a42' } }}>
                <Card>
                  <VuiBox lineHeight={0} display="flex" flexDirection="column" mb="24px">
                    <VuiTypography color="white" fontWeight="bold">Notifications</VuiTypography>
                    <VuiTypography color="text" fontWeight="regular">
                      You can access this page after allow the camera in this website.
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox >
                    <Grid container spacing={3} justifyContent={'center'}>
                      <Grid item xs={12} sm={6} lg={3}>
                        <VuiButton color='info' onClick={requestPermission} >
                          Allow
                        </VuiButton>
                      </Grid>
                    </Grid>
                  </VuiBox>
                </Card>
              </Modal>
            }
          </Grid>
          <Grid item width={'50%'}>
            <Card sx={{ justifyContent: 'center' }} >
              <CardContent>
                <Grid container justifyContent={'start'} width={'100%'} spacing={1}>
                  <Grid item width={'50%'}>
                    <VuiBox>
                      <VuiTypography variant="h5" fontWeight="bold" color="white">
                        Front (1)
                      </VuiTypography>
                      <VuiBox
                        component="img"
                        src={storePhotos.find((item) => item.side == 1)?.imageURL ? storePhotos.find((item) => item.side == 1)?.imageURL : image}
                        alt="Product Image"
                        borderRadius="lg"
                        shadow="lg"
                        width="100%"
                        my={3}
                      />
                    </VuiBox>
                  </Grid>
                  <Grid item width={'50%'}>
                    <VuiBox>
                      <VuiTypography variant="h5" fontWeight="bold" color="white">
                        Front (2)
                      </VuiTypography>
                      <VuiBox
                        component="img"
                        src={storePhotos.find((item) => item.side == 1)?.imageURL ? storePhotos.find((item) => item.side == 1)?.imageURL : image}
                        alt="Product Image"
                        borderRadius="lg"
                        shadow="lg"
                        width="100%"
                        my={3}
                      />
                    </VuiBox>
                  </Grid>
                </Grid>
                <Grid container justifyContent={'start'} width={'100%'} spacing={1}>
                  <Grid item width={'50%'}>
                    <VuiBox>
                      <VuiTypography variant="h5" fontWeight="bold" color="white">
                        Left
                      </VuiTypography>
                      <VuiBox
                        component="img"
                        src={storePhotos.find((item) => item.side == 2)?.imageURL ? storePhotos.find((item) => item.side == 2)?.imageURL : image}
                        alt="Product Image"
                        borderRadius="lg"
                        shadow="lg"
                        width="100%"
                        my={3}
                      />
                    </VuiBox>
                  </Grid>
                  <Grid item width={'50%'}>
                    <VuiBox>
                      <VuiTypography variant="h5" fontWeight="bold" color="white">
                        Right
                      </VuiTypography>
                      <VuiBox
                        component="img"
                        src={storePhotos.find((item) => item.side == 3)?.imageURL ? storePhotos.find((item) => item.side == 3)?.imageURL : image}
                        alt="Product Image"
                        borderRadius="lg"
                        shadow="lg"
                        width="100%"
                        my={3}
                      />
                    </VuiBox>
                  </Grid>
                </Grid>
                <Divider light />
                <VuiButton
                  variant="outlined"
                  size="small"
                  color={'error'}
                  sx={{ width: '100%', marginTop: '10px' }}
                  onClick={reloadPage}
                >
                  Reset Photos
                </VuiButton>

                <VuiButton
                  variant="outlined"
                  size="small"
                  color={'white'}
                  sx={{ width: '100%', marginTop: '10px' }}
                  onClick={toogleClientModal}
                >
                  Add Client
                </VuiButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default WebCamCapture;
