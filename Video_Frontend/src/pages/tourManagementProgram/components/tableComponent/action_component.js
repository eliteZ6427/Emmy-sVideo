import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { action_type } from "redux/action_type";
import { deleteClient } from "redux/actions/client_manage";

function ActionComponent(user) {
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);
    const client_update_modal_status = useSelector((state) => state.clientReducer.clientUpdateModalStatus);

    const toogleClientModal = (id) => {
        dispatch({ type: action_type.SELECT_FOR_UPDATE_CLIENT, client_id: id });
        dispatch({ type: action_type.CLIENT_UPDATE_MODAL_STATUS, status: !client_update_modal_status });
    }

    const deleteHandleChange = (user) => {
        dispatch(deleteClient(user.user, userdata.access));
    }

    return (
        <VuiBox>
            <VuiButton
                component="button"
                variant="gradient"
                color="dark"
                sx={({ breakpoints }) => ({
                    [breakpoints.up("md")]: {
                        minWidth: "30px",
                    },
                    [breakpoints.only("lg")]: {
                        minWidth: "auto",
                    },
                })}
                size="small"
                onClick={() => toogleClientModal(user.user)}
            >
                Send
            </VuiButton>
            <VuiButton
                component="button"
                variant="gradient"
                color="error"
                sx={({ breakpoints }) => ({
                    [breakpoints.up("md")]: {
                        minWidth: "30px",
                    },
                    [breakpoints.only("lg")]: {
                        minWidth: "auto",
                    },
                })}
                size="small"
                onClick={() => {
                    deleteHandleChange(user);
                }}
            >
                Delete
            </VuiButton>

        </VuiBox>
    );
}

ActionComponent.propTypes = {
    user: PropTypes.number.isRequired
}
export default ActionComponent;
