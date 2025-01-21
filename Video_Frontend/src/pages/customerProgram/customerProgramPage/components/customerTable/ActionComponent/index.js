import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { deleteCustomer } from "redux/actions/customers";
import { useNavigate } from "react-router-dom";

function ActionComponent(user) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);

    const handleEditChange = () => {
        return navigate(`/customerManagement/edit/${user.user}`)
    }
    const deleteHandleChange = (user) => {
        dispatch(deleteCustomer(user.user, userdata.access));
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
                onClick={handleEditChange}
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
