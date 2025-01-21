import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'

import MediaPlayer from "../MediaPlayer";
import { getFooters } from "redux/actions/footerVideo";
import { useEffect } from "react";

const FileList = ({ tourplace }) => {
  const dispatch = useDispatch()
  const userdata = useSelector((state) => state.auth.userData);
  const footerVideo = useSelector((state) => state.footerVideos.footer_video);

  useEffect(() => {
    dispatch(getFooters(userdata.access, tourplace));
  }, [tourplace])

  const footerItem = (videos) => {
    const videocomponents = videos.map((item, index) => {
      return <Grid item xs={2} sm={3} md={3} key={index}> <MediaPlayer props={item} /> </Grid>
    });

    return <>{videocomponents}</>

  }
  return (
    <Container style={{
      width: '100%',
      height: window.innerHeight * 0.43,
      overflowX: 'auto',
      scrollbarWidth: 'thin',
    }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {footerItem(footerVideo)}
      </Grid>
    </Container>
  );
};

export default FileList;
