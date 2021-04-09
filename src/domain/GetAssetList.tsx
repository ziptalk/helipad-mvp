import Asset, { COLUMNS } from '../model/Asset';
import FirebaseService from '../service/FirebaseService';

export default class GetAssetList {
  // async getAssetList(): Promise<Asset[]> {
  //   let assets = await new FirebaseService().getAssetList();
  //   return assets.map((asset) => {
  //     let data = asset.data();
  //     let assetMap = new Map(Object.entries(data));
  //     let buildingInfoObject = data.buildingInformation;
  //     assetMap.set(
  //       COLUMNS.BUILDING_INFORMATION,
  //       new Map(Object.entries(buildingInfoObject))
  //     );
  //     return Asset.fromMap(assetMap);
  //   });
  // }
}
