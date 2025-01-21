import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from "react";

import Grid from "@mui/material/Grid";
import VuiAvatar from "components/VuiAvatar";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { action_type } from 'redux/action_type';
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";
import man_avatar from "assets/images/male-avatar.png";
import { useDraggable } from "react-use-draggable-scroll";

const ClientSelectList = () => {
    const dispatch = useDispatch();

    const ref = useRef();
    const { events } = useDraggable(ref);

    const clientData = useSelector((state) => state.clientReducer.clientData);

    const { borderWidth } = borders;
    const setSelectClientStore = (id) => dispatch({ type: action_type.SET_SELECT_CLIENT, client_id: id });
    const initSelectClientStore = () => dispatch({ type: action_type.SET_SELECT_CLIENT, client_id: -1 });

    const handleClickChange = (id) => {
        setColorIndex(id);
        setSelectClientStore(id);
    }
    useEffect(() => {
        return () => {
            initSelectClientStore();
        }
    }, [])
    const [colorIndex, setColorIndex] = useState(-1);
    const renderStories = clientData.map(({ id, client_name, photos }, key) => (
        <Grid key={key} item>
            <VuiBox
                borderRadius="50%"
                width="3.625rem"
                height="3.625rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                mx="auto"
                border={`${borderWidth[1]} solid ${colorIndex === id ? colors['error'].main : colors['info'].main}`}
                sx={{ cursor: "pointer" }}
                onClick={() => handleClickChange(id)}
            >
                <VuiAvatar src={photos[0].img_url ? process.env.REACT_APP_BASE_URL + photos[0].img_url : man_avatar} alt={client_name} />
            </VuiBox>
            <VuiBox mt={0.75} textAlign="center" lineHeight={1}>
                <VuiTypography fontSize={12} color="text" fontWeight="regular">
                    {client_name}
                </VuiTypography>
            </VuiBox>
        </Grid>
    ));

    return (
        <VuiBox width="100%" sx={{ overflowX: 'scroll', overflowX: 'hidden' }} ref={ref} {...events}>
            <Grid container justifyContent="start" wrap="nowrap" spacing={1}>
                {renderStories}
            </Grid>
        </VuiBox>
    );
}

export default ClientSelectList;
