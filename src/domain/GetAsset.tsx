import Asset from "../model/Asset";
import FirebaseService from "../service/FirebaseService";

export default class GetAsset {
    async getAssetList(): Promise<Asset[]> {
        return await new FirebaseService().getAssetList();
    }

    async getAsset(id: string): Promise<Asset> {
        return await new FirebaseService().getAsset(id);
    }
}