import * as React from 'react';
import styled from 'styled-components';
import Summary from './Summary';
import Asset from '../../model/Asset';
import Detail from './Detail';
import { RouteComponentProps } from "react-router-dom";
import BuildingInformation from '../../model/BuildingInformation';
import {useEffect, useState} from "react";
import GetAsset from "../../domain/GetAsset";

interface MatchParams {
    assetId: string;
}

const AssetDetail = ({ match }: RouteComponentProps<MatchParams>) => {
    let id = match.params.assetId;
    console.log("asset id : ", id);
    const [asset, setAsset] = useState<Asset>(Asset.emptyAsset());

    new GetAsset().getAsset(id).then(value => {
        setAsset(value);
    });

    return (
        <Container>
            <Summary data={asset} />
            <Divider />
            <Detail data={asset} />
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  border: 1px solid #000000;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export default AssetDetail;