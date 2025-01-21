import { useEffect, useState } from "react";
import { alert_proxy_not_working } from "redux/actions/warningMsgFunc";
import { useDispatch, useSelector } from "react-redux";
import { uploadClientVideoFile } from "redux/actions/tour_management";
import ReactiveButton from "reactive-button";
import VuiSelect from "components/VuiSelect";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { alert_select_version, alert_cannot_record, alert_tourplace_select_error } from "redux/actions/warningMsgFunc";
import { Grid, Card, CardContent, CardHeader, Typography, Divider } from '@mui/material';
import { Chip } from "@mui/material";
import Icon from "@mui/material/Icon";
import { stopCameraStreamOffer } from "redux/actions/camera";

let mediaRecorder;
let recordedChunks = [];


const startRecording = (access_token, cameraName, videoFileName, recording_time, tourplace_id, priceID, setRecordingStatus, setRecordingSeconds, dispatch) => {
    try {
        setRecordingStatus(recording_button_status_events.LOADING);
        setRecordingSeconds(recording_time);

        const img = document.getElementById(cameraName);
        img.crossOrigin = "anonymous";
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d', { alpha: false });
        context.imageSmoothingEnabled = true; 

        canvas.width = img.width;
        canvas.height = img.height;

        const captureFrame = () => {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(captureFrame);
        };

        captureFrame();

        const stream = canvas.captureStream(60);
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };
        mediaRecorder.onstop = async () => {
            const videoBlob = new Blob(recordedChunks, { type: 'video/webm' });
            downloadVideo(videoBlob, videoFileName);
            const formData = new FormData();
            await formData.append('video_path', videoBlob, videoFileName);
            await formData.append('tourplace_id', tourplace_id);
            await formData.append('pricing_id', priceID);
            dispatch(uploadClientVideoFile(access_token, formData));
            setRecordingStatus(recording_button_status_events.SUCCESS)
            recordedChunks = [];
        };

        mediaRecorder.start();

        setRecordingStatus(recording_button_status_events.LOADING);
        setRecordingSeconds(recording_time);
        const countdown = setInterval(() => {
            setRecordingSeconds(prev => {
                if (prev === 1) {
                    clearInterval(countdown);
                    stopRecording();
                }
                return prev - 1;
            });
        }, 1000);

    } catch (error) {
        console.log(error);
        dispatch(alert_proxy_not_working());
    }
};

const downloadVideo = (file, videoFileName) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = videoFileName;
    a.click();
    URL.revokeObjectURL(url);
}

const stopRecording = async () => {
    if (mediaRecorder) {
        await mediaRecorder.stop();
    }
}

const recording_button_status_events = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
}

const CustomOption = ({ entry, valid_data, user_type }) => {
    const valid_item = valid_data.find(item => item.price_id === entry.id);
    return (
        <VuiBox sx={{ display: 'flex', justifyContent: 'space-between' }}>

            {user_type !== 3 || valid_item ? (
                <VuiTypography variant={'caption'} color={'white'} sx={{ alignContent: 'center' }}>
                    {`${entry.record_time} S / ${entry.price}$`}
                </VuiTypography>
            ) : (
                <VuiTypography
                    variant={'caption'}
                    color={'white'}
                    sx={{ alignContent: 'center', textDecoration: 'line-through', textDecorationColor: 'red' }}
                >
                    {`${entry.record_time} S / ${entry.price}$`}
                </VuiTypography>
            )}
            {user_type === 3 && valid_item ? <StatusComponent item={valid_item} /> : null}
        </VuiBox>
    );
};


const StatusComponent = ({ item }) => {
    return (
        <Chip
            color={'success'}
            size={'small'}
            icon={<Icon fontSize={'small'} color="error">favorite</Icon>}
            label={`remain : ${item.remain}`}
        />
    );
};

const CameraItem = ({ camera_data, id, pricing_data, valid_price, selectedTourplace }) => {
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);
    const [recordingStatus, setRecordingStatus] = useState(recording_button_status_events.IDLE);
    const camera_name = `camera_${id}`;
    const access_token = userdata.access;
    const user_id = userdata.user_id;
    const user_type = userdata.usertype;
    const tourplace_id = userdata.tourplace;
    const [recordingSeconds, setRecordingSeconds] = useState();
    const [priceID, setPriceID] = useState();

    const options = pricing_data.map((item) => ({
        value: item.id,
        label: <CustomOption entry={item} valid_data={valid_price} user_type={user_type} />,
        isDisabled: user_type === 3 && !valid_price.find((valid_item) => valid_item.price_id === item.id)
    }));

    const onChangeStartBtn = () => {
        var fileName = `${Date.now()}.webm`;
        if (priceID !== null) {
            const recording_time = pricing_data.find(item => item.id === priceID)?.record_time;
            const tourplace_for_upload_video = user_type === 3 ? tourplace_id : selectedTourplace;
            if (tourplace_for_upload_video !== undefined) {
                if (recording_time > 0) {
                    startRecording(access_token, camera_name, fileName, recording_time, tourplace_for_upload_video, priceID, setRecordingStatus, setRecordingSeconds, dispatch);
                } else {
                    dispatch(alert_select_version());
                }
            } else {
                dispatch(alert_tourplace_select_error());
            }
        } else {
            dispatch(alert_cannot_record());
        }
    };

    const handleOnChange = (e) => {
        setPriceID(e.value);
    };

    useEffect(() => {
        return () => {
            dispatch(stopCameraStreamOffer(camera_data.id, user_id));
        };
    }, [])
    return (
        <Grid item xs={12} sm={6} lg={4} key={id} mt={8}>
            <Card>
                <CardHeader
                    title={<Typography color="primary">{camera_data.camera_name}</Typography>}
                />
                <Divider light sx={{ marginTop: 5 }} />
                <CardContent>
                    <img src={`${process.env.REACT_APP_BASE_API_URL}/camera/stream/start/${camera_data.id}/${user_id}`} alt="Camera stream" id={camera_name} style={{ width: '100%' }} />
                    <VuiBox sx={{ marginBottom: '10px' }}>
                        <VuiSelect
                            options={options}
                            size="small"
                            onChange={handleOnChange}
                        />
                    </VuiBox>
                    <ReactiveButton
                        buttonState={recordingStatus}
                        onClick={onChangeStartBtn}
                        idleText={'Start Recording'}
                        successText={'Recording Completed!'}
                        loadingText={`Recording ${recordingSeconds} S`}
                        rounded
                        shadow
                        outline
                        block
                        color="blue"
                    />
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CameraItem;
