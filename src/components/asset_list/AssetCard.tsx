import React from "react";
import "./AssetCard.css";

export default class AssetCard extends React.Component<any, any> {
    render() {
        return (
            <div className="assetCardWrapper">
                <div className="assetCardGradient">
                    <div className="assetCardContent">
                        <div className="assetCardMainInfo">
                            <div className="assetCardPrice">
                                <div className="assetCardDollar">
                                    $ 12,345,000
                                </div>
                                <div className="assetCardWon">
                                    ₩ 12,345,000,000
                                </div>
                            </div>
                            <div className="assetCardAddress">
                                446 Kent Avenue, Unit 12C<br />
                                Williamsburg
                            </div>
                        </div>
                        <div className="assetCardDivider" />
                        <div className="assetCardRoomInfo">
                            <div>00 Bedrooms</div>
                            <div>00 Bathrooms</div>
                            <div>00 Sq m</div>
                            <div>00 Pyung</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}