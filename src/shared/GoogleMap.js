import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import React from "react";
import styled from "styled-components";
import Geocode from "react-geocode";
import Asset from '../model/Asset';
// import Marker from "../views/Asset/components/asset_list/Marker"

Geocode.setApiKey('AIzaSyAHHYSWgQGMPHXYRqCMMUSlxTvqrDepyeA')
Geocode.setLanguage('en')
Geocode.setRegion('es')
Geocode.enableDebug()


export class MapContainer extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            address : "66 North 1st Street, Unit 3B, Williamsburg, Brooklyn, NY 11249",
            latState : 0,
            lngState : 30,
            fetchingServices: true,
        }
        this.fetchServices = this.fetchServices.bind(this);
    }

    componentWillMount(){
        this.fetchServices();
     }

    fetchServices(){
        const GoogleMapLocate = async (currentAddr) => {

            Geocode.setApiKey('AIzaSyAHHYSWgQGMPHXYRqCMMUSlxTvqrDepyeA')
            Geocode.setLanguage('en')
            Geocode.setRegion('es')
            Geocode.enableDebug()

            return Geocode.fromAddress(currentAddr)
              .then( response => {
                const { lat, lng } = response.results[0].geometry.location;
                // console.log(lat)
                // console.log(lng)
                this.setState({
                    latState: lat,
                    lngState: lng,
                    fetchingServices: false,
                });
                return {lat, lng}
              })
              .catch(err => console.log(err))
          }

        GoogleMapLocate(this.state.address)
    }

    render() {
        const { data } = this.props
        console.log(data)
        data.map((asset) => console.log(asset.buildingInformation.address))

        const mapStyles = {
            width: 'calc(100vw - 512px)',
            height: '100vh'
        };

        return (
            <Container>
                <div>{this.state.latState}</div>
                <div>{this.state.lngState}</div>
                {/* <div>{
                data.map((asset) => asset)
                }</div> */}
                <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                    initialCenter={{
                        lat: 40.7164377,
                        lng: -73.9644072
                        // lat: this.state.latState,
                        // lng: this.state.lngState
                    }}>
                    {/* <Marker
                        lat={0}
                        lng={0}
                        name="My Marker"
                        color="blue"
                    /> */}
                    <Marker key="marker_1"
                     icon={{
                        url: 'https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/7661.png.transform/cc-width-720-height-540/image.png',
                        anchor: new window.google.maps.Point(17, 46),
                        scaledSize: new window.google.maps.Size(150, 37)
                    }}
                    position={{
                        lat: this.state.latState,
                        lng: this.state.lngState
                    }}
                    label="1,234,567,809,000"
                    >
                    </Marker>
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