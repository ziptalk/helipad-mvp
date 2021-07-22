import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import videoUrl from "../../../video/helipad_mainmov.mp4";
import styled from "styled-components";
const VideoPlayerPresenter = () => {
  const [videoFileUrl, setVideoFileUrl] = useState("");
  useEffect(() => {
    videoUrl && setVideoFileUrl(videoUrl);
  }, []);
  return (
    <Container>
      <video id="video" muted autoPlay={true} loop={true}>
        <source src={videoFileUrl} type="video/mp4" />
      </video>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  #video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
export default VideoPlayerPresenter;
