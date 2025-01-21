import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import VuiBadgeDot from "components/VuiBadgeDot";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import breakpoints from "assets/theme/base/breakpoints";

import { checkCameraStatus, getAllCamera } from "redux/actions/camera";
import { getTourplaceByISP } from "redux/actions/tourplace";

import ActionComponent from "./components/tableComponent/action_component";
import { Modal } from 'react-responsive-modal';
import { Card, CardContent } from "@mui/material";
import CameraAddComponent from "./components/cameraAddComponent";
import CameraUpdateComponent from "./components/cameraUpdateComponent";
import Table from "./components/tableComponent";
import { action_type } from "redux/action_type";
import SelectTourplace from "pages/components/selectTourplace";
import { useState } from "react";

const BadgeComponent = (flag) => {
  return flag.flag ?
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" badgeContent="Connected" />
    </VuiBox> :
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" color="error" badgeContent="Non-Connected" />
    </VuiBox>
}

function CameraProgram() {
  const { values } = breakpoints;

  const dispatch = useDispatch();

  const camera_data = useSelector((state) => state.cameraReducer.cameraData);
  const camera_add_modal_status = useSelector((state) => state.cameraReducer.cameraAddModalStatus);
  const camera_update_modal_status = useSelector((state) => state.cameraReducer.cameraUpdateModalStatus);
  const selectForUpdateCamera = useSelector((state) => state.cameraReducer.selectForUpdateCamera);
  const userdata = useSelector((state) => state.auth.userData);
  const access_token = userdata.access;
  const [selectedTourplace, setSelectedTourplace] = useState();

  const selectTourPlace = useSelector((state) => state.tourplaceReducer.tourplaceData);
  const tourplacedata = selectTourPlace.map((item) => ({ value: item.id, label: item.place_name }))

  const toogleAddCameraModal = () => dispatch({ type: action_type.CAMERA_ADD_MODAL_STATUS, status: !camera_add_modal_status });

  const toogleCameraModal = (id) => {
    dispatch({ type: action_type.SELECT_FOR_UPDATE_CAMERA, status: id });
    dispatch({ type: action_type.CAMERA_UPDATE_MODAL_STATUS, status: !camera_update_modal_status });
  }

  useEffect(() => {
    if (userdata.usertype !== 3)
      dispatch(getTourplaceByISP(access_token));
    dispatch(getAllCamera(access_token));
  }, [dispatch, access_token]);
  
  useEffect(() => {
    dispatch(getAllCamera(access_token, selectedTourplace))
  }, [selectedTourplace])

  const cameraTableData = {
    columns: [
      { name: "tour_place", align: "center" },
      { name: "camera_name", align: "center" },
      { name: "rtsp_url", align: "center" },
      { name: "action", align: "center" },
    ],
    rows: camera_data.map((item) => ({
      camera_name: item.camera_name,
      rtsp_url: item.rtsp_url,
      tour_place: (<>{item.tourplace.map((each_item, key) => { return <li key={key}> { each_item.place_name } </li> })}</>),
      action: <ActionComponent camera_id={item.id} />,
    })),
  };

  const { columns, rows } = cameraTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mb={3} p={1}>
        <VuiTypography
          variant={window.innerWidth < values.sm ? "h3" : "h2"}
          textTransform="capitalize"
          fontWeight="bold"
          color="white"
        >
          Camera Program
        </VuiTypography>
      </VuiBox>
      <VuiBox py={3}>
        <SelectTourplace tourplacedata={tourplacedata} setTourPlace={setSelectedTourplace} />
        <Modal open={camera_update_modal_status} center styles={{ modal: { background: '#171a42', minWidth: '30%', marginTop: 100, maxWidth: '20%' }, closeButton: { display: 'none' } }} onClose={() => toogleCameraModal(-1)}>
          <Card sx={{ minHeight: "490px" }}>
            <CardContent sx={{ padding: 0 }}>
              <CameraUpdateComponent camera_id={selectForUpdateCamera} />
            </CardContent>
          </Card>
        </Modal>
        <Modal open={camera_add_modal_status} center styles={{ modal: { background: '#171a42', minWidth: '30%', marginTop: 100, maxWidth: '20%' }, closeButton: { display: 'none' } }} onClose={toogleAddCameraModal}>
          <Card sx={{ minHeight: "490px" }}>
            <CardContent sx={{ padding: 0 }}>
              <CameraAddComponent toogleModal={toogleAddCameraModal} />
            </CardContent>
          </Card>
        </Modal>
        <Table columns={columns} rows={rows} />
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CameraProgram;
