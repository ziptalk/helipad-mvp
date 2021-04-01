import * as React from "react";
import "./AssetList.css";
import AssetCard from "./AssetCard";
import styled from "styled-components";

// export default class AssetList extends React.Component<any, any> {
//     render() {
//         return (
//
//         );
//     }
// }

type AssetListProperties = {

}

const AssetList: React.FC<AssetListProperties> = () => {
    return (
        <Container>
            <Category>
                <div>
                    Investment Recommendations
                </div>
                <div>
                    |
                </div>
                <div>
                    Living Recommendations
                </div>
            </Category>
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
        </Container>
    )
}

const Container = styled.div`

`;

const Category = styled.div`

`;

export default AssetList;