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
        let newURL = window.location.href + "/test_id_" + id.toString()
        document.location.href = newURL
    }

    render(){
        const mapStyles = {
            width: 'calc(100vw - 512px)',
            height: '100vh'
        };

        console.log(this.props.data)

        return (
            <Container>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 40.7164377,
                        lng: -73.9644072
                    }}>
                {this.props.data.map(asset=>
                    <Marker key="marker_1"
                    icon={{
                       url: 'https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/7661.png.transform/cc-width-720-height-540/image.png',
                       anchor: new window.google.maps.Point(17, 46),
                       scaledSize: new window.google.maps.Size(50, 37)
                   }}
                   position={{
                       lat: asset.assetLat,
                       lng: asset.assetLng
                   }}
                   label={asset.assetLabel}
                   onClick={()=>this.onclickToLink(asset.assetId)}
                   >
                   </Marker>
                )}

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
