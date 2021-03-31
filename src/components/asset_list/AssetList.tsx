import * as React from "react";
import "./AssetList.css";
import AssetCard from "./AssetCard";

export default class AssetList extends React.Component<any, any> {
    render() {
        return (
            <div className="assetListWrapper">
                <div className="assetCategory">
                    <div>
                        Investment Recommendations
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        Living Recommendations
                    </div>
                </div>
                <div className="sortWrapper">
                    Sort by Price
                </div>
                <div className="assetListGrid">
                    <AssetCard />
                    <AssetCard />
                    <AssetCard />
                    <AssetCard />
                    <AssetCard />
                    <AssetCard />
                </div>
            </div>
        );
    }
}