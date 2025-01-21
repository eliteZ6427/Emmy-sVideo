/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import ReactPlayer from "react-player";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { removeHeader } from "redux/actions/headerVideo";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'linear-gradient(127.09deg, rgb(62 0 159) 19.41%, rgb(63 64 64))',
  border: '0 solid rgba(0, 0, 0, 0.125)',
  borderRadius: '1.25rem',
  boxShadow: 24,
  color: 'white',
  pt: 2,
  px: 4,
  pb: 3,
};


function MediaPlayer({ props }) {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.auth.userData);

  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });
  const [open, setOpen] = useState(false);

  const thumbnaillink = process.env.REACT_APP_BASE_URL + props.thumbnail;
  const videopath = process.env.REACT_APP_BASE_URL + props.video_path;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const removeVideo = (id) => {
    dispatch(removeHeader(id, userdata.access));
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 700, color: 'white !important' }}>
          <ReactPlayer url={videopath} playing controls width={'100%'} />
        </Box>

      </Modal>

      <Card
        sx={{
          backgroundImage: `url(${thumbnaillink})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: '300px',
          height: '200px'
        }}
      >
        <VuiBox pb={3} position="relative" lineHeight={0} display="flex" flexDirection="column">
          <VuiBox display="flex" mt={5} pt={1} justifyContent="center">
            <VuiBox display="flex" alignItems="center" justifyContent="center">
              <VuiButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
                onClick={handleOpen}
              >
                <Icon>play_arrow</Icon>
              </VuiButton>
              <VuiButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
                onClick={() => removeVideo(props.id)}
              >
                <Icon>restore_from_trash</Icon>
              </VuiButton>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </Card>
    </>
  );
}

export default MediaPlayer;
