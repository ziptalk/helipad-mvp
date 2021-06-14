import Asset from "../model/Asset";
import FirebaseService from "../service/FirebaseService";

interface location {
  assetLen: number;
  assetLng: number;
  assetLabel: string;
}

export default class GetAsset {
  static async getAssetList(): Promise<Asset[]> {
    return await FirebaseService.getAssetList();
  }

  // static async getAssetLocateList(): Promise<[]> {

  // }

  static async getAsset(id: string): Promise<Asset> {
    return await FirebaseService.getAsset(id);
  }
  static async getAssetListByNeighborhood(
    neighborhood: string
  ): Promise<Asset[]> {
    return await FirebaseService.getAssetListByNeighborhood(neighborhood);
  }
}
