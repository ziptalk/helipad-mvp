import {GoogleApiWrapper, Map} from "google-maps-react";
import React from "react";
import styled from "styled-components";

export class MapContainer extends React.Component {
    render() {
        const mapStyles = {
            width: 'calc(100vw - 512px)',
            height: '100vh'
        };

        return (
            <Container>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807
                    }}>

                </Map>
            </Container>
        );
    }
}

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAHHYSWgQGMPHXYRqCMMUSlxTvqrDepyeA'
})(MapContainer);