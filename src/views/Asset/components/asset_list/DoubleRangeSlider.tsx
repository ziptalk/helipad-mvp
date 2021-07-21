import React, { useEffect, useState } from "react";
import GetAsset from "../../../../domain/GetAsset";
import Asset from "../../../../model/Asset";
import AssetCard from "./AssetCard";
import Slider from 'react-rangeslider'
// import RangeSlider, { RangeSliderPosition, RangeSliderProps } from '@gilbarbara/react-range-slider';
import RangeSlider, { RangeSliderPosition, RangeSliderProps }  from '../asset_slider';

const DoubleRangeSlider = () => {
    const [assets, setAssets] = useState<Asset[]>([]);

    const [sliderWidth, setSliderWidth] = useState(0)
    const [offsetSliderWidth, setOffsetSliderWidth] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(200)
    const [minValueBetween, setMinValueBetween] = useState(10)
    const [currentMin, setcurrentMin] = useState(55)
    const [inputMin, setInputMin] = useState(55)
    const [currentMax, setCurrentMax] = useState(100)
    const [inputMax, setInputMax] = useState(100)
    const [fullAssets, setFullAssets] = useState<Asset[]>([]);

    const [x, setX] = useState(500000000);

    useEffect(() => {
        // console.log(x)
        let tmpAsset: Asset[] = [];
        fullAssets.map((asset)=> {
            if(asset.price <= x){
                tmpAsset.push(asset)
                // console.log(asset)
            }
        })
        setAssets(tmpAsset)
        // console.log(assets.length)
    }, [x])

    useEffect(() => {
        async function wholeFunction(){
          GetAsset.getAssetList().then((value) => {
            console.log(value);
            setAssets(value);
            setFullAssets(value);
            console.log('data', value);
    
            let assetStateList = [
              {
                  assetId: "",
                  assetAddress : "",
                  assetLat : 1000,
                  assetLng : 1000,
                  // assetLabel: "1,234,567,890,001"
                  assetLabel: "996K"
              },
          ]
        
          async function forSettingLocation(){
            // setLocationsDone(true);
            let id = 1;
            const listSetting = 
                value.map(async function(asset){
                  let price = asset.price/1000 //won -> dollar
                  let priceLabel = ""
                  if(1000000 > price && price >= 1000){
                    priceLabel = (price/1000).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "K"
                  } else if(price >= 1000000){
                    priceLabel = (price/1000000).toFixed(1).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "M"
                  } else {
                    priceLabel = price.toString()
                  }
                  assetStateList = assetStateList.concat({
                      assetId: asset.id,
                      assetAddress: asset.buildingInformation.address,
                      assetLat: 0,
                      assetLng: 0,
                      assetLabel: priceLabel
                  })
                  id++;
                  return id;
              })
        
            await Promise.all(listSetting).then(res => console.log(`${res}`))
          }
        
        forSettingLocation();
          });
        }
        wholeFunction();
      }, []);

    const handleChange = (position: RangeSliderPosition, props: RangeSliderProps) => {
		setX(position.x);
	};

    return(
        <div>
            <div style={{display:"flex", paddingLeft:"30px", paddingRight:"30px",fontSize:"12px", justifyContent:"space-between", color:"#212121", marginBottom:"-10px"}}>
                <div>min</div>
                <div>max</div>
            </div>
            <RangeSlider 
                style={{padding:"20px", paddingLeft:"30px", paddingRight:"30px"}} 
                // styles={{rangeColor:"black"}} 
                axis="x" 
                x={x} 
                xMin={0}
                xMax={1234567890}
                xStep={100}
                onChange={handleChange} />
            <div style={{display:"flex"}}>
                <div style={{fontSize:"14px", padding:"20px", paddingLeft:"30px", paddingRight:"0px", display:"flex"}}>
                    <div style={{fontWeight:600, marginRight:"3px"}}>{assets.length}</div>
                    <div style={{fontWeight:400, marginRight:"3px"}}>of</div>
                    <div style={{fontWeight:600, marginRight:"3px"}}>{fullAssets.length}</div>
                    <div style={{fontWeight:400}}>Homes</div>
                </div>
                {/* <div style={{fontSize:"14px", padding:"20px", paddingLeft:"5px"}}></div> */}
                <div style={{fontSize:"14px", padding:"20px", paddingLeft:"5px",color:"#B69142"}}>Sort by Recommended</div>
            </div>
            {assets.map((asset) => (
            <AssetCard data={asset} />
            ))}
        </div>
    )
}

export default DoubleRangeSlider;