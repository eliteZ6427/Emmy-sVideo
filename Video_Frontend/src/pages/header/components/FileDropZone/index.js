import { useDispatch, useSelector } from 'react-redux';

import VuiDropzone from "components/VuiDropzone";
import { action_type } from 'redux/action_type';
import { addHeader } from "redux/actions/headerVideo";
import { alert_error_from_server } from 'redux/actions/warningMsgFunc';
import { alert_forbiden_error } from 'redux/actions/warningMsgFunc';
import {alert_tourplace_select_error} from 'redux/actions/warningMsgFunc';
import { handleLogout } from 'redux/actions/login';

const FileDropZone = ({tourplace}) => {

  const dispatch = useDispatch();

  const userdata = useSelector((state) => state.auth.userData);

  return (
    <VuiDropzone options={{
      addRemoveLinks: true,
      autoProcessQueue: true,
      url: `${process.env.REACT_APP_BASE_API_URL}/video/header/add`,
      init: function () {
        this.on("sending", function (file, xhr, formData) {
          if(tourplace === undefined){
            dispatch(alert_tourplace_select_error())
            xhr.abort();
            this.removeFile(file);
          }else{
            formData.append("video_path", file)
            formData.append("tourplace", tourplace)
          }
        });
        this.on("complete", function ({ file, xhr, meta }) {
          try {
            if (xhr.status === 401) {
              dispatch(alert_session_terminated());
              dispatch(handleLogout());
            } else if (xhr.status === 200 || xhr.status === 201) {
              const returnData = JSON.parse(xhr.response).data;
              dispatch(addHeader(returnData));
            } else if (xhr.status === 403) {
              dispatch(alert_forbiden_error())
            } else {
              console.log(xhr.status)
              dispatch(alert_error_from_server())
            }
          } catch (error) {
            console.log(error);
            dispatch({ type: action_type.ALERT_SNACK_BAR, snack_bar_open: true, snack_bar_type: 'error', snack_bar_text: 'Error Occured in server' });
          }
        })
      },
      headers: {
        'Cache-Control': 'no-cache',
        'Authorization': 'Bearer ' + userdata.access,
      },
      complete: function (file) {
        this.removeFile(file);
      }
    }} />
  );
};

export default FileDropZone;
