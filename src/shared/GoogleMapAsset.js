import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import Geocode from "react-geocode";
import Asset from '../model/Asset';
import { decorate, observable, action, makeObservable } from 'mobx';
import { observer } from 'mobx-react';
import usePromise from 'react-promise'
// import Marker from "../views/Asset/components/asset_list/Marker"


export class MapContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : this.props.data
        }
        console.log(this.state.data)
    }
    onclickToLink = (id) => {
        let newURL = window.location.href + "/" + id
        document.location.href = newURL
    }

    render(){
        const mapStyles = {
            // width: 'calc(100vw - 470px)',
            width: "950px",
            height: '247px'
        };

        console.log(this.props.data.assetLabel)

        return (
            <Container id="google-map-container">
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    center={{
                        // lat: 40.711,
                        // lng: -73.955
                        lat: this.props.data.assetLat,
                        lng: this.props.data.assetLng
                    }}>
                    <Marker key="marker_1"
                        icon={{
                        url: 'https://ifh.cc/g/IlY3eY.png',
                        anchor: new window.google.maps.Point(17, 46),
                        scaledSize: new window.google.maps.Size(50, 37)
                    }}
                    position={{
                        lat: this.props.data.assetLat,
                        lng: this.props.data.assetLng
                    }}
                    label={this.props.data.assetLabel}
                    onClick={()=>this.onclickToLink(this.props.data.assetId)}
                    >
                   </Marker>
                </Map>
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAHHYSWgQGMPHXYRqCMMUSlxTvqrDepyeA'
})(MapContainer);
