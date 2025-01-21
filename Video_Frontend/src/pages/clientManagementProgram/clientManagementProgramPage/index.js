import { useDispatch, useSelector } from "react-redux";
import ClientsTable from "./components/clientsTable";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import VuiBox from "components/VuiBox";
import { getAllClients } from "redux/actions/client";
import { useState, useEffect } from "react";
import breakpoints from "assets/theme/base/breakpoints";
import VuiTypography from "components/VuiTypography";
import SelectTourplace from "pages/components/selectTourplace";
import { getTourplaceByISP } from "redux/actions/tourplace";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import { pushNotificationToClients } from "redux/actions/client";
import { alert_client_not_selected } from "redux/actions/warningMsgFunc";
import { alert_error_input_title } from "redux/actions/warningMsgFunc";
import { alert_error_input_content } from "redux/actions/warningMsgFunc";

function ClientManagement() {
  const { values } = breakpoints;
  const dispatch = useDispatch();

  const [selectedTourplace, setSelectedTourplace] = useState();
  const userdata = useSelector((state) => state.auth.userData);
  const selectTourPlace = useSelector((state) => state.tourplaceReducer.tourplaceData);
  const selectedClients = useSelector((state) => state.clientReducer.selectedClientsData);

  const tourplacedata = selectTourPlace.map((item) => ({ value: item.id, label: item.place_name }))
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const access_token = userdata.access

  const param = {
    start_row_index: 0,
    end_row_index: 9
  }

  useEffect(() => {
    param.tourplace = selectedTourplace;
    dispatch(getAllClients(userdata.access, param));
    dispatch(getTourplaceByISP(access_token));
  }, [])

  useEffect(() => {
    param.tourplace = selectedTourplace;
    dispatch(getAllClients(access_token, param))
  }, [selectedTourplace])

  const sendNotification = () => {
    if (selectedClients.length < 1) {
      dispatch(alert_client_not_selected());
    } else if (title === "") {
      dispatch(alert_error_input_title());
    } else if (content === "") {
      dispatch(alert_error_input_content());
    } else {
      const param = {
        ids: selectedClients,
        title: title,
        content: content
      }
      dispatch(pushNotificationToClients(access_token, param));
    }
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox p={1}>
        <VuiTypography
          variant={window.innerWidth < values.sm ? "h3" : "h2"}
          textTransform="capitalize"
          fontWeight="bold"
          color="white"
        >
          Client Program
        </VuiTypography>
      </VuiBox>
      <VuiBox py={3}>
        <SelectTourplace tourplacedata={tourplacedata} setTourPlace={setSelectedTourplace} />
        <VuiBox m={0.75}>
          <VuiInput
            placeholder="Title"
            value={title}
            onChange={({ currentTarget }) => {
              setTitle(currentTarget.value);
            }}
            sx={({ borders: { borderWidth }, palette: { inputColors } }) => ({
              border: `${borderWidth[1]} solid`,
              borderColor: inputColors.borderColor.main,
            })}
          />
        </VuiBox>
        <VuiBox m={0.75}>
          <VuiInput
            placeholder="Content"
            value={content}
            onChange={({ currentTarget }) => {
              setContent(currentTarget.value);
            }}
            sx={({ borders: { borderWidth }, palette: { inputColors } }) => ({
              border: `${borderWidth[1]} solid`,
              borderColor: inputColors.borderColor.main,
            })}
          />
        </VuiBox>
        <VuiBox m={0.75}>
          <VuiButton
            color="info"
            variant={"contained"}
            onClick={sendNotification}
            fullWidth
          >
            Push notification
          </VuiButton>
        </VuiBox>
        <ClientsTable tourplace={selectedTourplace}/>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ClientManagement;
