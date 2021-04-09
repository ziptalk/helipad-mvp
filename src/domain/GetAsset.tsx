import Asset, {COLUMNS} from "../model/Asset";
import FirebaseService from "../service/FirebaseService";
import firebase from "firebase";
import DocumentData = firebase.firestore.DocumentData;

export default class GetAsset {
    async getAssetList(): Promise<Asset[]> {
        let assets = await new FirebaseService().getAssetList();
        return assets.map((asset) => {
            return this.parseAsset(asset.data());
        });
    }

    async getAsset(id: string): Promise<Asset> {
        let asset = await new FirebaseService().getAsset(id);
        if (asset.docs.length === 1) {
            return this.parseAsset(asset.docs[0].data());
        } else {
            console.log("TODO : throw error and handle in UI");
            return Asset.emptyAsset();
        }
    }

    private parseAsset(asset: DocumentData): Asset {
        let assetMap = new Map(Object.entries(asset));
        let buildingInfoObject = asset.buildingInformation;
        assetMap.set(COLUMNS.BUILDING_INFORMATION, new Map(Object.entries(buildingInfoObject)));
        return Asset.fromMap(assetMap);
    }
}