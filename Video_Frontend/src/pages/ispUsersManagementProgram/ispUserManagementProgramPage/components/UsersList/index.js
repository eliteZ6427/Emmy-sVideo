import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import VuiAvatar from "components/VuiAvatar";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";
import man_avatar from "assets/images/male-avatar.png";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { action_type } from "redux/action_type";

const UsersList = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.ispUsersReducer.ispUsersData);
  const addIspModalStatus = useSelector((state) => state.ispUsersReducer.addIspModalStatus);

  const { borderWidth } = borders;

  const handleClickChange = (id) => {
    return navigate(`/ispUsersManagement/edit/${id}`)
  }
  
  const handleAddbutton = () => dispatch({ type: action_type.TOOGLE_ISP_ADD_MODAL, status: !addIspModalStatus });

  const renderStories = users.map(({ user_avatar, username, id }, key) => (
    <Grid key={key} item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
      <VuiBox
        borderRadius="50%"
        width="3.625rem"
        height="3.625rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        mx="auto"
        border={`${borderWidth[1]} solid ${colors['info'].main}`}
        sx={{ cursor: "pointer" }}
        onClick={() => handleClickChange(id)}
      >
        <VuiAvatar src={user_avatar ? user_avatar : man_avatar} alt={username} />
      </VuiBox>
      <VuiBox mt={0.75} textAlign="center" lineHeight={1}>
        <VuiTypography fontSize={12} color="text" fontWeight="regular">
          {username}
        </VuiTypography>
      </VuiBox>
    </Grid>
  ));

  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.down("lg")]: {
          overflowX: "scroll",
        },
      })}
    >
      <VuiBox width="100%">
        <Grid container justifyContent="start" wrap="nowrap">
          <Grid item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
            <VuiBox
              bgColor="info"
              borderRadius="50%"
              width="3.625rem"
              height="3.625rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mx="auto"
              sx={{ cursor: "pointer" }}
              onClick={handleAddbutton}
            >
              <AiOutlinePlus color="white" size="24px" />
            </VuiBox>
            <VuiBox mt={0.75} textAlign="center" lineHeight={1}>
              <VuiTypography fontSize={12} color="text" fontWeight="regular">
                Add ISP
              </VuiTypography>
            </VuiBox>
          </Grid>
          {renderStories}
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default UsersList;
