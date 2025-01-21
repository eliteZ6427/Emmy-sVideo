import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import VuiBox from "components/VuiBox";
import VuiBadgeDot from "components/VuiBadgeDot";
import VuiTypography from "components/VuiTypography";
import breakpoints from "assets/theme/base/breakpoints";

import { getAllTourPlace } from "redux/actions/tourplace";

import ActionComponent from "./components/tableComponent/action_component";
import { Modal } from 'react-responsive-modal';
import { Card, CardContent } from "@mui/material";
import TourplaceAddComponent from "./components/tourplaceAddComponent";
import TourplaceUpdateComponent from "./components/tourplaceUpdateComponent";
import Table from "./components/tableComponent";
import { action_type } from "redux/action_type";

const BadgeComponent = (flag) => {
  return flag.flag ?
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" badgeContent="Available" />
    </VuiBox> :
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" color="error" badgeContent="Non Available" />
    </VuiBox>
}

function TourplaceProgram() {
  const { values } = breakpoints;

  const dispatch = useDispatch();

  const tourplace_data = useSelector((state) => state.tourplaceReducer.tourplaceData);
  const tourplace_add_modal_status = useSelector((state) => state.tourplaceReducer.tourplaceAddModalStatus);
  const tourplace_update_modal_status = useSelector((state) => state.tourplaceReducer.tourplaceUpdateModalStatus);
  const selectForUpdateTourplace = useSelector((state) => state.tourplaceReducer.selectForUpdateTourplace);
  const userdata = useSelector((state) => state.auth.userData);
  const access_token = userdata.access;

  const toogleAddTourplaceModal = () => dispatch({ type: action_type.TOURPLACE_ADD_MODAL_STATUS, status: !tourplace_add_modal_status });

  const toogleTourplaceModal = (id) => {
    dispatch({ type: action_type.SELECT_FOR_UPDATE_TOURPLACE, status: id });
    dispatch({ type: action_type.TOURPLACE_UPDATE_MODAL_STATUS, status: !tourplace_update_modal_status });
  }

  useEffect(() => {
    dispatch(getAllTourPlace(access_token));
  }, []);

  const tourplaceTableData = {
    columns: [
      { name: "place_name", align: "center" },
      { name: "status", align: "center" },
      { name: "id", align: "center" },
      { name: "action", align: "center" },
    ],
    rows: tourplace_data.map((item) => ({
      place_name: item.place_name,
      status: (<BadgeComponent flag={item.status} />),
      id: item.id,
      action: <ActionComponent tourplace_id={item.id} />,
    })),
  };

  const { columns, rows } = tourplaceTableData;

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
          Tour Place Program
        </VuiTypography>
      </VuiBox>
      <VuiBox py={3}>
        <Modal open={tourplace_update_modal_status} center styles={{ modal: { background: '#171a42', minWidth: '50%', marginTop: 100, maxWidth: '80%' }, closeButton: { display: 'none' } }} onClose={() => toogleTourplaceModal(-1)}>
          <Card sx={{ minHeight: "490px" }}>
            <CardContent sx={{ padding: 0 }}>
              <TourplaceUpdateComponent tourplace_id={selectForUpdateTourplace} />
            </CardContent>
          </Card>
        </Modal>
        <Modal open={tourplace_add_modal_status} center styles={{ modal: { background: '#171a42', minWidth: '50%', marginTop: 100, maxWidth: '80%' }, closeButton: { display: 'none' } }} onClose={toogleAddTourplaceModal}>
          <Card sx={{ minHeight: "490px" }}>
            <CardContent sx={{ padding: 0 }}>
              <TourplaceAddComponent toogleModal={toogleAddTourplaceModal} />
            </CardContent>
          </Card>
        </Modal>
        <Table columns={columns} rows={rows} />
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default TourplaceProgram;
