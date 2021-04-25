import Asset from "../model/Asset";
import FirebaseService from "../service/FirebaseService";

export default class GetAsset {
    static async getAssetList(): Promise<Asset[]> {
        return await FirebaseService.getAssetList();
    }

    static async getAsset(id: string): Promise<Asset> {
        return await FirebaseService.getAsset(id);
    }
}