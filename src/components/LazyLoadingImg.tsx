import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PLACE_HOLDER from "../images/Neighborhood/placeholderImg.jpeg";
const LazyLoadingImg = ({ thumbnailUrl, width, height, children }: any) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();
  const [isLoad, setIsLoad] = useState(false);
  function onInterSection(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        setIsLoad(true);
      }
    });
  }
  useEffect(() => {
    const options = {
      root: null,
      threshold: [0, 1],
    };
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(onInterSection, options);
    }
    imgRef.current && observerRef.current.observe(imgRef.current);
  });
  return (
    <Container>
      {/* <Image
        ref={imgRef}
        isLoad={isLoad}
        thumbnailUrl={thumbnailUrl}
        PLACE_HOLDER={PLACE_HOLDER}
        width={width}
        height={height}
      /> */}
      <img
        className="image"
        ref={imgRef}
        src={isLoad ? thumbnailUrl : PLACE_HOLDER}
        width={width ? width : "100%"}
        height={height ? height : "auto"}
        alt=""
      ></img>
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  position: relative;
  z-index: 0;
  .image {
    position: relative;
    z-index: 0;
  }
`;
const Image: any = styled.img.attrs({
  src: `${(props: any) =>
    props.isLoad ? props.thumbnailUrl : props.PLACE_HOLDER}`,
})`
  width: ${(props: any) => (props.width ? props.width : "100%")};
  height: ${(props: any) => (props.height ? props.height : "auto")};
`;
export default LazyLoadingImg;
