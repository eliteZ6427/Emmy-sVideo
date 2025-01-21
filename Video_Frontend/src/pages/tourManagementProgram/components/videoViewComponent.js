import { Container, Grid } from "@mui/material";
import { useSelector } from 'react-redux'
import MediaPlayer from "./MediaPlayer";

const VideoViewComponent = () => {

  return (
    <Container style={{
      width: '100%',
      height: window.innerHeight * 0.35,
      overflowX: 'auto',
      scrollbarWidth: 'thin',
    }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{marginTop: '0px !important'}}>
      </Grid>
    </Container>
  );
};

export default VideoViewComponent;
