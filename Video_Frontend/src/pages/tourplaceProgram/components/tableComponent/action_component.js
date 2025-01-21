import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { action_type } from "redux/action_type";
import { deleteTourplace } from "redux/actions/tourplace";

function ActionComponent({ tourplace_id }) {
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);
    const tourplace_update_modal_status = useSelector((state) => state.tourplaceReducer.tourplaceUpdateModalStatus);

    const toogleTourplaceModal = (id) => {
        dispatch({ type: action_type.SELECT_FOR_UPDATE_TOURPLACE, tourplace_id: id });
        dispatch({ type: action_type.TOURPLACE_UPDATE_MODAL_STATUS, status: !tourplace_update_modal_status });
    }

    const deleteHandleChange = (tourplace_id) => {
        dispatch(deleteTourplace(tourplace_id, userdata.access));
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
                onClick={() => toogleTourplaceModal(tourplace_id)}
            >
                Edit
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
                    deleteHandleChange(tourplace_id);
                }}
            >
                Delete
            </VuiButton>

        </VuiBox>
    );
}

ActionComponent.propTypes = {
    tourplace_id: PropTypes.number.isRequired
}
export default ActionComponent;
