import { useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import SelectTourplace from "pages/components/selectTourplace";

import VuiTypography from "components/VuiTypography";
import PricingCards from "pages/paymentProgram/components/PricingCards";
import { useDispatch, useSelector } from "react-redux";
import { getAllPricing } from "redux/actions/pricing";
import { getTourplaceByISP } from "redux/actions/tourplace";
import { useState } from "react";
import SquareModalComponent from "./components/squareModalComponent";
import { getValidInvoice } from "redux/actions/invoice";

function PaymentProgram() {
  const dispatch = useDispatch();
  const pricing_data = useSelector((state) => state.pricingReducer.pricingData);
  const validPriceList = useSelector((state) => state.invoiceReducer.validInvoiceData);
  const userdata = useSelector((state) => state.auth.userData);
  const access_token = userdata.access;
  const selectTourPlace = useSelector((state) => state.tourplaceReducer.tourplaceData);
  const tourplacedata = selectTourPlace.map((item) => ({ value: item.id, label: item.place_name }))

  const [selectedTourplace, setSelectedTourplace] = useState();
  useEffect(() => {
    dispatch(getAllPricing(access_token, selectedTourplace));
    dispatch(getValidInvoice(access_token, selectedTourplace));
    if(userdata.usertype !== 3)
      dispatch(getTourplaceByISP(access_token));
  }, []);

  useEffect(() => {
    dispatch(getAllPricing(access_token, selectedTourplace));
    dispatch(getValidInvoice(access_token, selectedTourplace));
  }, [selectedTourplace])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={12}>
            <VuiBox mb={1}>
              <VuiTypography fontSize={32} color="white" fontWeight="bold">
                See our pricing
              </VuiTypography>
            </VuiBox>
            <VuiBox
              mb={2}
              textAlign="center"
              display="flex"
              justifyContent="center"
              flexDirection="row"
            >
              <VuiTypography
                variant="body2"
                color="white"
                fontWeight="regular"
                sx={{ maxWidth: "340px" }}
              >
                You have free camera view on each version.
              </VuiTypography>
            </VuiBox>
          </Grid>
          {userdata.usertype !== 3 ? 
            <Grid item xs={10} lg={12}>
              <SelectTourplace tourplacedata={tourplacedata} setTourPlace={setSelectedTourplace} />
            </Grid>: <div></div>
          }
          <Grid item xs={10} lg={12}>
            <PricingCards prices={pricing_data} valid_price_list={validPriceList} user_type={userdata.usertype}/>
          </Grid>
        </Grid>
        <SquareModalComponent/>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default PaymentProgram;
