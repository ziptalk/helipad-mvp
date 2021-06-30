import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import GetAsset from "../../../../domain/GetAsset";
import Asset from "../../../../model/Asset";
import AssetCard from "./AssetCard";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const RangeSliders = () => {
    const [assets, setAssets] = useState<Asset[]>([]);
    const [assetsJson, setAssetsJson] = useState('');
    const [volume, setVolume] = useState(0);

    useEffect(() => {
        async function wholeFunction(){
          GetAsset.getAssetList().then((value) => {
            console.log(value);
            setAssets(value);
            console.log('data', value);

            console.log(JSON.stringify(value))
            setAssetsJson(JSON.stringify(value));
    
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

    const handleOnchange = (e: Event,value: number) => {
        setVolume(value)
    }
    
    return (
	<>  
        <div style={{paddingLeft:"30px", paddingRight:"60px", marginBottom:"100px"}}>
            <Slider 
            value={1}
            orientation="horizontal"
            onChange={() => handleOnchange}
            min={0}
            max={1234567890}
            step={1000000}
            labels={{
                0: '$0',
                1234567890: '$1,234,567,890'
            }}
            />
        </div>
            
        {assets.map((asset) => (
            <AssetCard data={asset} />
            ))}
        
        </>
)};

export default RangeSliders