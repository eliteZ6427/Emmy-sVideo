import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import breakpoints from "assets/theme/base/breakpoints";
import CameraItem from './components/cameraItem/index';
import { getAllCamera } from "redux/actions/camera";
import { Grid } from "@mui/material";
import CompletedVideoTable from "./components/completedVideoTable";
import SelectTourplace from "pages/components/selectTourplace";
import { getTourplaceByISP } from "redux/actions/tourplace";
import { getAllPricing } from "redux/actions/pricing";
import { getValidInvoice } from "redux/actions/invoice";

function TourManagementProgram() {
  const { values } = breakpoints;
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.auth.userData);
  const camera_data = useSelector((state) => state.cameraReducer.cameraData);

  const pricing_data = useSelector((state) => state.pricingReducer.pricingData);
  const validPriceList = useSelector((state) => state.invoiceReducer.validInvoiceData);

  const selectTourPlace = useSelector((state) => state.tourplaceReducer.tourplaceData);
  const tourplacedata = selectTourPlace.map((item) => ({ value: item.id, label: item.place_name }))

  const [selectedTourplace, setSelectedTourplace] = useState();

  const access_token = userdata.access;

  useEffect(() => {
    if (userdata.usertype !== 3)
      dispatch(getTourplaceByISP(access_token));
    dispatch(getAllCamera(access_token, selectedTourplace))
    dispatch(getAllPricing(access_token, selectedTourplace));
    dispatch(getValidInvoice(access_token, selectedTourplace));
  }, [])

  useEffect(() => {
    dispatch(getAllCamera(access_token, selectedTourplace))
    dispatch(getAllPricing(access_token, selectedTourplace));
    dispatch(getValidInvoice(access_token, selectedTourplace));
  }, [selectedTourplace])

  const camera_view = () => {
    return camera_data == null ? <></> : camera_data.map((item, key) => {
      return (
        <CameraItem camera_data={item} id={key} key={key} pricing_data={pricing_data} valid_price={validPriceList} selectedTourplace={selectedTourplace}></CameraItem>
      )
    })
  }
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
          Tour Management Program
        </VuiTypography>
        <VuiBox py={3}>
          {userdata.usertype !== 3? <SelectTourplace tourplacedata={tourplacedata} setTourPlace={setSelectedTourplace} /> : ""}
          <Grid container spacing={3}>
            {camera_view()}
          </Grid>
        </VuiBox>
      </VuiBox>
      <CompletedVideoTable tourplace={selectedTourplace}/>
      <Footer />
    </DashboardLayout>
  );
}

export default TourManagementProgram;