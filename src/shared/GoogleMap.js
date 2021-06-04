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
            assetState : [
                {
                    assetId: 0,
                    assetAddress : "",
                    assetLat : 0,
                    assetLng : 31,
                    assetLabel: "1,234,567,890,000"

                },
            ],
            fetchingServices: true,
        }
        this.fetchServices = this.fetchServices.bind(this);
    }

    componentWillMount(){
        this.fetchServices();
     }

    async fetchServices(){
        let assetStateList = [
            {
                assetId: 0,
                assetAddress : "",
                assetLat : 0,
                assetLng : 31,
                assetLabel: "1,234,567,890,000"
            },
        ]
        const GoogleMapLocate = async (currentAddr, index) => {

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

                // this.state.assetState.map(data =>
                //     data.assetId === index ?
                //     ({ ...data, assetLat: lat, assetLng: lng})
                //     : data
                // )

                // assetStateList.map(data =>
                //     data.assetId === index ?
                //     ({ ...data, assetLat: lat, assetLng: lng})
                //     : data
                // )

                assetStateList[index].assetLat = lat;
                assetStateList[index].assetLng= lng;

                return {lat, lng}
              })
              .catch(err => console.log(err))
          }

        GoogleMapLocate(this.state.address, 0)

        const { data } = this.props
        // const { assetState } = this.state.assetState

        let id = 1

        // console.log(data)

        await  data.map(function(asset){
            // console.log(asset.buildingInformation.address)

            // this.setState({
            //     assetState : this.state.assetState.concat({ 
            //         assetId: id,
            //         assetAddress: asset.buildingInformation.address,
            //     })
            // });
            assetStateList = assetStateList.concat({
                assetId: id,
                assetAddress: asset.buildingInformation.address,
                assetLabel: (asset.price*1000).toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            })
            id++;
            // console.log(id)
        })

        await  data.map((asset, index) => GoogleMapLocate(asset.buildingInformation.address, index + 1))
        
        // console.log(assetStateList)

        await this.setState({
            assetState : assetStateList
        })
        // console.log("hererer")
        // console.log(this.state.assetState)
    }

    render() {
        const mapStyles = {
            width: 'calc(100vw - 512px)',
            height: '100vh'
        };

        // console.log(this.state.assetState)

        return (
            <Container>
                {/* <div>{this.state.latState}</div>
                <div>{this.state.lngState}</div>
                <div>
                    {
                    this.state.assetState.map((asset) => asset.assetAddress)
                    }
                </div> */}

                {/* <div>{
                data.map((asset) => asset)
                }</div> */}
                <Map
                    google={this.props.google}
                    zoom={14}
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
                    {this.state.assetState.map(asset => 
                        <Marker key="marker_1"
                        icon={{
                           url: 'https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/7661.png.transform/cc-width-720-height-540/image.png',
                           anchor: new window.google.maps.Point(17, 46),
                           scaledSize: new window.google.maps.Size(150, 37)
                       }}
                       position={{
                           lat: asset.assetLat,
                           lng: asset.assetLng
                       }}
                       label={String(asset.assetLabel)}
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