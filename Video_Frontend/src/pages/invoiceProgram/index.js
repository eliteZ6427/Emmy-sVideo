import { useDispatch, useSelector } from "react-redux";
import InvoiceTable from "./components/invoiceTable";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import VuiBox from "components/VuiBox";
import { getAllInvoice } from "redux/actions/invoice";
import { useState, useEffect } from "react";
import breakpoints from "assets/theme/base/breakpoints";
import VuiTypography from "components/VuiTypography";
import SelectTourplace from "pages/components/selectTourplace";
import { getTourplaceByISP } from "redux/actions/tourplace";
import { createContext } from "react";


export const TourplaceContext = createContext();

function InvoiceProgram() {
  const { values } = breakpoints;
  const dispatch = useDispatch();

  const [selectedTourplace, setSelectedTourplace] = useState();
  const userdata = useSelector((state) => state.auth.userData);
  const selectTourPlace = useSelector((state) => state.tourplaceReducer.tourplaceData);
  const tourplacedata = selectTourPlace.map((item) => ({ value: item.id, label: item.place_name }))
  

  const access_token = userdata.access

  const param = {
    start_row_index: 0,
    end_row_index: 9
  }

  useEffect(() => {
    param.tourplace = selectedTourplace;
    dispatch(getAllInvoice(userdata.access, param));
    if(userdata.usertype !== 3)
      dispatch(getTourplaceByISP(access_token));
  }, [])

  useEffect(() => {
    param.tourplace = selectedTourplace;
    dispatch(getAllInvoice(access_token, param))
  }, [selectedTourplace])


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TourplaceContext.Provider value={selectedTourplace}>
        <VuiBox p={1}>
          <VuiTypography
            variant={window.innerWidth < values.sm ? "h3" : "h2"}
            textTransform="capitalize"
            fontWeight="bold"
            color="white"
          >
            Invoice Program
          </VuiTypography>
        </VuiBox>
        <VuiBox py={3}>
          {userdata.usertype !== 3? <SelectTourplace tourplacedata={tourplacedata} setTourPlace={setSelectedTourplace} /> : ""}
          <InvoiceTable />
        </VuiBox>
      </TourplaceContext.Provider>
      <Footer />
    </DashboardLayout>
  );
}

export default InvoiceProgram;
