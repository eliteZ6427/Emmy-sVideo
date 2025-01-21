import Table from "../tableComponent";
import { BarLoader } from "react-spinners";
import Icon from "@mui/material/Icon";
import VuiButton from "components/VuiButton";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompletedVideos } from "redux/actions/tour_management";
import { useEffect } from "react";
function CompletedVideoTable({tourplace}) {
    const dispatch = useDispatch()
    const table_data = useSelector((state) => state.tourReducer.completed_videos)
    const userdata = useSelector((state) => state.auth.userData);
    const access_token = userdata.access;
    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(getAllCompletedVideos(access_token, tourplace));
        }, 10000);
        return () => clearInterval(intervalId);
    }, [dispatch, access_token, tourplace]);

    const completeTableData = {
        columns: [
            { name: "id", align: "center" },
            { name: "client_name", align: "center" },
            { name: "tour_place_name", align: "center" },
            { name: "video", align: "center" },
            { name: "status", align: "center" },
        ],
        rows: []
    };
    completeTableData.rows = table_data.map((item) => {
        return {
            id: (item.id),
            client_name: (item.client),
            tour_place_name: (item.tourplace),
            video: (item.video_path),
            status: (item.status ?
                <VuiButton
                    variant="contained"
                    color="info"
                    sx={{ borderRadius: "50px" }}
                    iconOnly
                    size='small'
                >
                    <Icon>check</Icon>
                </VuiButton> :
                <BarLoader color="#36d7b7" />
            ),
        }
    })
    const { columns, rows } = completeTableData;
    return (
        <Table columns={columns} rows={rows} />
    );
}
export default CompletedVideoTable;