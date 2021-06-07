import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import React from "react";
import styled from "styled-components";
import Geocode from "react-geocode";
import Asset from '../model/Asset';
import { decorate, observable, action, makeObservable } from 'mobx';
import { observer } from 'mobx-react';
import usePromise from 'react-promise'
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
                    assetLat : 40.7164377,
                    assetLng : -73.9644072,
                    assetLabel: "1,234,567,890,001"
                },
                // {
                //     assetId: 1,
                //     assetAddress : "",
                //     assetLat : 40.716,
                //     assetLng : -73.961,
                //     assetLabel: "1,234,567,890,002"
                // },
                // {
                //     assetId: 2,
                //     assetAddress : "",
                //     assetLat : 40.716,
                //     assetLng : -73.962,
                //     assetLabel: "1,234,567,890,003"
                // },
                // {
                //     assetId: 3,
                //     assetAddress : "",
                //     assetLat : 40.71,
                //     assetLng : -73.963,
                //     assetLabel: "1,234,567,890,004"
                // },
            ],
            fetchingServices: true,
        }
        // 변이를 추적할 상태 지정
        // decorate(this, {state: observable})
        this.fetchServices();

        makeObservable(this, {
            state: observable,
        })

        //변화에 따른 효과를 정의
        // reaction(() => this.state.assetState, () => {
        //     this.forceUpdate();
        // })

        
        // this.fetchServices = this.fetchServices.bind(this);
    }
    // componentWillMount(){
    //     this.fetchServices();
    // }

    async fetchServices(){
        let assetStateList = [
            {
                assetId: 0,
                assetAddress : "",
                assetLat : 40.7164377,
                assetLng : -73.9644072,
                assetLabel: "1,234,567,890,001"
            },
        ]

        const GoogleMapLocate = async (currentAddr, index) => {

            return Geocode.fromAddress(currentAddr)
              .then( response => {
                const { lat, lng } = response.results[0].geometry.location;
               
                // this.setState({
                //     latState: lat,
                //     lngState: lng,
                //     fetchingServices: false,
                // });
                
                this.state.latState = lat
                this.state.lngState = lng
                this.state.fetchingServices = false

                assetStateList[index].assetLat = lat;
                assetStateList[index].assetLng= lng;

                return {lat, lng}
              })
              .catch(err => console.log(err))
          }

        GoogleMapLocate(this.state.address, 0)

        const { data } = this.props
        console.log(data)
        let id = 1

        // await  data.map(function(asset){
        //     assetStateList = assetStateList.concat({
        //         assetId: id,
        //         assetAddress: asset.buildingInformation.address,
        //         assetLabel: (asset.price*1000).toString()
        //         .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        //     })
        //     id++;
        // })
        
        // await data.map((asset, index) => GoogleMapLocate(asset.buildingInformation.address, index + 1))
        
        // this.setState({
        //     assetState : assetStateList,
        //     fetchingServices: false
        // })

        this.state.assetState = assetStateList
        console.log(assetStateList)
        console.log(this.state.assetState)
        this.state.fetchingServices = false
    }

    render() {
        const mapStyles = {
            width: 'calc(100vw - 512px)',
            height: '100vh'
        };

        let assetStateList2 = [
            {
                assetId: 0,
                assetAddress : "",
                assetLat : 40.7164377,
                assetLng : -73.9644072,
                assetLabel: "1,234,567,890,001"
            },
        ]
        let latValue = 0
        let lngValue = 0
        let id = 1;

        const GoogleMapLocate2 = async (currentAddr, index) => {
            await Geocode.fromAddress(currentAddr)
              .then( response => {
                const { lat, lng } = response.results[0].geometry.location;               
                // console.log("we act")
                // console.log(lat)
                // console.log(lng)
                assetStateList2[index].assetLat = lat;
                assetStateList2[index].assetLng= lng;
                latValue = lat
                lngValue = lng
                // return {lat, lng}
                return "hello"
              })
              .catch(err => console.log(err))
            
            return "hello"
            //   return {latValue, lngValue}
        }

        // this.props.data.map(function(asset){
        //     assetStateList2 = assetStateList2.concat({
        //         assetId: id,
        //         assetAddress: asset.buildingInformation.address,
        //         assetLabel: (asset.price*1000).toString()
        //         .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        //     })
        //     id++;
        // })
        
        // this.props.data.map((asset, index) => GoogleMapLocate2(asset.buildingInformation.address, index + 1))

        setTimeout(() => {
            console.log(GoogleMapLocate2('66 North 1st Street, Unit 3B, Williamsburg, Brooklyn, NY 11249'))
        });
        console.log(latValue)
        console.log(lngValue)
        console.log(assetStateList2)


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
                {/* {this.state.fetchingServices ? <> */}

                    {/* {this.state.assetState.map(asset => 
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
                    )}  */}

                {/* </> : null } */}

                {assetStateList2.map(asset=>
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
                   label={asset.assetLabel}
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