import styled from "styled-components";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
import { Loader } from "@googlemaps/js-api-loader";
import Geocode from "react-geocode";
import { useEffect, useRef } from "react";
const apiKey = process.env.REACT_APP_GOOGLE_MAP_API as string;
Geocode.setApiKey(apiKey);
Geocode.setLanguage("en");
Geocode.setRegion("en");
// Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();
type MapPresenterProps = {
  regionInfo: NeighborhoodItem;
};

const MapPresenter = ({ regionInfo }: MapPresenterProps) => {
  const mapContainer = useRef<HTMLElement>();
  const loader = new Loader({
    apiKey: apiKey,
    libraries: ["drawing", "geometry", "places", "visualization"],
    version: "weekly",
    language: "en",
  });
  useEffect(() => {
    const getLocation = async () => {
      const response = await Geocode.fromAddress(regionInfo.regionName);
      const location = response.results[0].geometry.location;
      loader.load().then(() => {
        const map = new window.google.maps.Map(
          mapContainer.current as HTMLElement,
          {
            center: location,
            zoom: 10,
          }
        );
        let point: google.maps.Point;
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
        });
        const rectangle = new window.google.maps.Rectangle({
          bounds: new google.maps.LatLngBounds(location),
          map: map,
        });
      });
    };
    getLocation();
  }, []);

  return (
    <Container>
      <MapBlock ref={mapContainer}></MapBlock>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1904px;
  margin-bottom: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MapBlock: any = styled.div`
  position: relative;
  height: 880px;
  width: 100vw;
  background: gray;
  margin-left: 0;
  margin-right: 0;
`;

export default MapPresenter;
