import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SelectTourplace from "pages/components/selectTourplace";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import breakpoints from "assets/theme/base/breakpoints";
import { getAllPricing } from "redux/actions/pricing";
import { getTourplaceByISP } from "redux/actions/tourplace";
import ActionComponent from "./components/tableComponent/action_component";
import { Modal } from 'react-responsive-modal';
import { Card, CardContent } from "@mui/material";
import PricingAddComponent from "./components/pricingAddComponent";
import PricingUpdateComponent from "./components/pricingUpdateComponent";
import Table from "./components/tableComponent";
import { action_type } from "redux/action_type";

function PricingProgram() {
  const { values } = breakpoints;

  const dispatch = useDispatch();

  const pricing_data = useSelector((state) => state.pricingReducer.pricingData);
  const pricing_add_modal_status = useSelector((state) => state.pricingReducer.pricingAddModalStatus);
  const pricing_update_modal_status = useSelector((state) => state.pricingReducer.pricingUpdateModalStatus);
  const selectForUpdatePricing = useSelector((state) => state.pricingReducer.selectForUpdatePricing);
  const userdata = useSelector((state) => state.auth.userData);
  const selectTourPlace = useSelector((state) => state.tourplaceReducer.tourplaceData);
  const tourplacedata = selectTourPlace.map((item) => ({ value: item.id, label: item.place_name }))

  const access_token = userdata.access;

  const [selectedTourplace, setSelectedTourplace] = useState();
  const toogleAddPricingModal = () => dispatch({ type: action_type.PRICING_ADD_MODAL_STATUS, status: !pricing_add_modal_status });

  const tooglePricingModal = (id) => {
    dispatch({ type: action_type.SELECT_FOR_UPDATE_PRICING, status: id });
    dispatch({ type: action_type.PRICING_UPDATE_MODAL_STATUS, status: !pricing_update_modal_status });
  }

  useEffect(() => {
    dispatch(getTourplaceByISP(access_token));
    dispatch(getAllPricing(access_token, selectedTourplace));
  }, []);

  useEffect(() => {
    dispatch(getAllPricing(access_token, selectedTourplace));
  }, [selectedTourplace])
  
  const pricingTableData = {
    columns: [
      { name: "title", align: "center" },
      { name: "level", align: "center" },
      { name: "price", align: "center" },
      { name: "record_time", align: "center" },
      { name: "record_limit", align: "center" },
      { name: "snapshot_limit", align: "center" },
      { name: "id", align: "center" },
      { name: "action", align: "center" },
    ],
    rows: pricing_data.map((item) => ({
      title: item.title,
      level: item.level,
      price: item.price,
      record_time: item.record_time,
      record_limit: item.record_limit,
      snapshot_limit: item.snapshot_limit,
      id: item.id,
      action: <ActionComponent pricing_id={item.id} />,
    })),
  };

  const { columns, rows } = pricingTableData;

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
          Pricing Program
        </VuiTypography>
      </VuiBox>
      <VuiBox py={3}>
        <Modal open={pricing_update_modal_status} center styles={{ modal: { background: '#171a42', minWidth: '50%', marginTop: 100, maxWidth: '80%' }, closeButton: { display: 'none' } }} onClose={() => tooglePricingModal(-1)}>
          <Card sx={{ minHeight: "490px" }}>
            <CardContent sx={{ padding: 0 }}>
              <PricingUpdateComponent pricing_id={selectForUpdatePricing} />
            </CardContent>
          </Card>
        </Modal>
        <Modal open={pricing_add_modal_status} center styles={{ modal: { background: '#171a42', minWidth: '50%', marginTop: 100, maxWidth: '80%' }, closeButton: { display: 'none' } }} onClose={toogleAddPricingModal}>
          <Card sx={{ minHeight: "490px" }}>
            <CardContent sx={{ padding: 0 }}>
              <PricingAddComponent toogleModal={toogleAddPricingModal} tourplace={selectedTourplace}/>
            </CardContent>
          </Card>
        </Modal>
        <SelectTourplace tourplacedata={tourplacedata} setTourPlace={setSelectedTourplace} />
        <Table columns={columns} rows={rows} />
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default PricingProgram;
