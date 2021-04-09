import Asset, {COLUMNS} from "../model/Asset";
import FirebaseService from "../service/FirebaseService";

export default class GetAsset {
    async getAssetList(): Promise<Asset[]> {
        let assets = await new FirebaseService().getAssetList();
        return assets.map((asset) => {
            let data = asset.data();
            let assetMap = new Map(Object.entries(data));
            let buildingInfoObject = data.buildingInformation;
            assetMap.set(COLUMNS.BUILDING_INFORMATION, new Map(Object.entries(buildingInfoObject)));
            return Asset.fromMap(assetMap);
        });
    }

    async getAsset(id: string): Promise<Asset> {
        let asset = await new FirebaseService().getAsset(id);
        if (asset.docs.length === 1) {
            let data = asset.docs[0].data();
            let assetMap = new Map(Object.entries(data));
            let buildingInfoObject = data.buildingInformation;
            assetMap.set(COLUMNS.BUILDING_INFORMATION, new Map(Object.entries(buildingInfoObject)));
            return Asset.fromMap(assetMap);
        } else {
            console.log("TODO : throw error and handle in UI");
            return Asset.emptyAsset();
        }
    }
}