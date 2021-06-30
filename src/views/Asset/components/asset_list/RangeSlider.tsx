import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import GetAsset from "../../../../domain/GetAsset";
import Asset from "../../../../model/Asset";

import {
	ReactiveBase,
	RangeSlider,
	SelectedFilters,
	ResultList,
	ReactiveList,
} from '@appbaseio/reactivesearch';
import AssetCard from "./AssetCard";


// import './index.css';

const RangeSliders = () => {
    const [assets, setAssets] = useState<Asset[]>([]);
    const [assetsJson, setAssetsJson] = useState('');

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
    
    return (
	// <ReactiveBase
	// 	app="good-books-ds"
	// 	// url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
    //     url={assetsJson}
	// 	enableAppbase
	// >
    <>
		<div className="row">
			<div className="col">
				<RangeSlider
					dataField="ratings_count"
					componentId="Price"
					range={{
						start: 0,
						end: 1234567890,
					}}
					rangeLabels={{
						start: '$0',
						end: '$1,234,567,809',
					}}
				/>
			</div>

			<div className="col">
				<SelectedFilters />
				<ReactiveList
					componentId="SearchResult"
					dataField="original_title"
					// from={0}
					size={3}
					className="result-list-container"
					pagination
					react={{
						and: 'BookSensor',
					}}
				// 	render={({ data }) => (
				// 		<ReactiveList.ResultListWrapper>
				// 			{data.map((item:any) => (
				// 				<ResultList key={item._id}>
				// 					<ResultList.Image src={item.image} />
				// 					<ResultList.Content>
				// 						<ResultList.Title>
				// 							<div
				// 								className="book-title"
				// 								dangerouslySetInnerHTML={{
				// 									__html: item.original_title,
				// 								}}
				// 							/>
				// 						</ResultList.Title>
				// 						<ResultList.Description>
				// 							<div className="flex column justify-space-between">
				// 								<div>
				// 									<div>
				// 										by{' '}
				// 										<span className="authors-list">
				// 											{item.authors}
				// 										</span>
				// 									</div>
				// 									<div className="ratings-list flex align-center">
				// 										<span className="stars">
				// 											{Array(item.average_rating_rounded)
				// 												.fill('x')
				// 												.map((
				// 													item, // eslint-disable-line
				// 													index,
				// 												) => (
				// 													<i
				// 														className="fas fa-star"
				// 														key={index} // eslint-disable-line
				// 													/>
				// 												))}
				// 										</span>
				// 										<span className="avg-rating">
				// 											({item.average_rating} avg)
				// 										</span>
				// 									</div>
				// 								</div>
				// 								<span className="pub-year">
				// 									Pub {item.original_publication_year}
				// 								</span>
				// 							</div>
				// 						</ResultList.Description>
				// 					</ResultList.Content>
				// 				</ResultList>
				// 			))}
				// 		</ReactiveList.ResultListWrapper>
				// 	)}

                render={() => (
                    <ReactiveList.ResultListWrapper>
                        {assets.map((asset) => (
                            <AssetCard data={asset} />
                        ))}
                    </ReactiveList.ResultListWrapper>)}
				/>
			</div>
		</div>
    </>
	// </ReactiveBase>
)};

export default RangeSliders
// ReactDOM.render(<RangeSliders />, document.getElementById('root'));
