import React, { useEffect, useState } from "react";
import GetAsset from "../../../../domain/GetAsset";
import Asset from "../../../../model/Asset";
import AssetCard from "./AssetCard";
import Slider from "react-rangeslider";
import styled from "styled-components";
// import RangeSlider, { RangeSliderPosition, RangeSliderProps } from '@gilbarbara/react-range-slider';
import RangeSlider, {
  RangeSliderPosition,
  RangeSliderProps,
} from "../asset_slider";

const DoubleRangeSlider = ({ assetData }: any) => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [offsetSliderWidth, setOffsetSliderWidth] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(200);
  const [minValueBetween, setMinValueBetween] = useState(10);
  const [currentMin, setCurrentMin] = useState(55);
  const [inputMin, setInputMin] = useState(55);
  const [currentMax, setCurrentMax] = useState(100);
  const [inputMax, setInputMax] = useState(100);
  const [fullAssets, setFullAssets] = useState<Asset[]>([]);
  const [listingState, setListingState] = useState(0);

  const [x, setX] = useState(10000000);

  useEffect(() => {
    let tmpAsset: Asset[] = [];
    fullAssets.map((asset) => {
      if (asset.price <= x) {
        tmpAsset.push(asset);
      }
    });
    // localStorage.setItem('xValue', x.toString())
    // console.log(localStorage.getItem('xValue'))
    setAssets(tmpAsset);
  }, [x]);

  useEffect(() => {
    async function wholeFunction() {
      // GetAsset.getAssetListByNeighborhood(history).then((value) => {
        console.log(assetData);

        setAssets(assetData);
        setFullAssets(assetData);
        console.log("data", assetData);

        var priceList: number[] = [];

        assetData.map((assetDatas: any) => {
          priceList.push(assetDatas.price);
        });

        var maxValue = Math.max.apply(null, priceList);
        var minValue = Math.min.apply(null, priceList);
        var stepValue = Math.floor((maxValue - minValue) / 100);
        var xValue = (maxValue + minValue) / 2;

        setCurrentMax(maxValue);
        setCurrentMin(minValue);
        setMinValueBetween(stepValue);
        // setX(xValue)
        setX(maxValue);
      // }
    }
    wholeFunction();
  }, [assetData]);

  const handleChange = (
    position: RangeSliderPosition,
    props: RangeSliderProps
  ) => {
    setX(position.x + currentMin);
  };

  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          display: "flex",
          paddingLeft: "30px",
          paddingRight: "30px",
          fontSize: "12px",
          justifyContent: "space-between",
          color: "#212121",
          marginBottom: "-10px",
        }}
      >
        <div>min</div>
        <div>max</div>
      </div>
      <RangeSlider
        style={{ padding: "20px", paddingLeft: "30px", paddingRight: "30px" }}
        // styles={{rangeColor:"black"}}
        axis="x"
        x={x}
        xMin={currentMin}
        xMax={currentMax}
        xStep={minValueBetween}
        onChange={handleChange}
      />
      <div style={{display:"flex", position:"relative", height:"50px", paddingTop:"15px"}}>
        {listingState == 0 ? <>
        <ListingButton style={{marginLeft:"30px", backgroundColor:"#AD0606", color:"white", zIndex:10}}>789 Agent Listings</ListingButton>
        <ListingButton onClick={()=>setListingState(1)} style={{marginLeft:"190px", zIndex:9}}>33 Other Listings</ListingButton></> : <>
        <ListingButton onClick={()=>setListingState(0)} style={{marginLeft:"30px", zIndex:9}}>789 Agent Listings</ListingButton>
        <ListingButton style={{marginLeft:"190px", backgroundColor:"#AD0606", color:"white", zIndex:10}}>33 Other Listings</ListingButton></>}
        
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            fontSize: "14px",
            padding: "20px",
            paddingLeft: "30px",
            paddingRight: "0px",
            display: "flex",
          }}
        >
          <div style={{ fontWeight: 600, marginRight: "3px" }}>
            {assets.length}
          </div>
          <div style={{ fontWeight: 400, marginRight: "3px" }}>of</div>
          <div style={{ fontWeight: 600, marginRight: "3px" }}>
            {fullAssets.length}
          </div>
          <div style={{ fontWeight: 400 }}>Homes</div>
        </div>
        {/* <div style={{fontSize:"14px", padding:"20px", paddingLeft:"5px"}}></div> */}
        <div
          style={{
            fontSize: "14px",
            padding: "20px",
            paddingLeft: "5px",
            color: "#B69142",
          }}
        >
          Sort by Recommended
        </div>
      </div>
      <Container>
        {assets.map((asset) => (
          <AssetCard data={asset} />
        ))}
      </Container>
    </div>
  );
};

const ListingButton = styled.button`
  position: absolute;
  border: 0;
  height: 42px;
  border-radius: 21px;
  width: 195px;
  font-size: 14px;
  text-align: center;
  background-color: #C4C4C4;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: minmax(300px, auto);
`;
export default DoubleRangeSlider;
