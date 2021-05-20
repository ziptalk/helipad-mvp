import * as React from "react";
import styled from "styled-components";
import Summary from "./Summary";
import Asset from "../../../../model/Asset";
import Detail from "./Detail";
import { RouteComponentProps } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import GetAsset from "../../../../domain/GetAsset";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import ContactUseCase from "../../../../domain/ContactUseCase";

interface MatchParams {
  assetId: string;
}

const AssetDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  let id = match.params.assetId;
  const { user } = useContext(AuthContext);
  const [asset, setAsset] = useState<Asset>(Asset.emptyAsset());

  useEffect(() => {
    GetAsset.getAsset(id).then((value) => {
      setAsset(value);
      if (user != null) {
        ContactUseCase.getContactHistory(user.uid, value.agent).then(
          (value) => {
            console.log("get contact history");
          }
        );
      }
      window.scroll({ top: 0 });
    });
  }, []);

  return (
    <Container>
      <Summary data={asset} />
      <Divider />
      <Detail data={asset} />
    </Container>
  );
};

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
