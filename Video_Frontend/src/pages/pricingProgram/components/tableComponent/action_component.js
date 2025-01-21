import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { action_type } from "redux/action_type";
import { deletePricing } from "redux/actions/pricing";

function ActionComponent({ pricing_id }) {
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);
    const pricing_update_modal_status = useSelector((state) => state.pricingReducer.pricingUpdateModalStatus);

    const tooglePricingModal = (id) => {
        dispatch({ type: action_type.SELECT_FOR_UPDATE_PRICING, pricing_id: id });
        dispatch({ type: action_type.PRICING_UPDATE_MODAL_STATUS, status: !pricing_update_modal_status });
    }

    const deleteHandleChange = (pricing_id) => {
        dispatch(deletePricing(pricing_id, userdata.access));
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
                onClick={() => tooglePricingModal(pricing_id)}
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
                    deleteHandleChange(pricing_id);
                }}
            >
                Delete
            </VuiButton>

        </VuiBox>
    );
}

ActionComponent.propTypes = {
    pricing_id: PropTypes.number.isRequired
}
export default ActionComponent;
