import FirebaseService from '../service/FirebaseService';
import Asset from "../model/Asset";

type SaveAssetProps = {
  userId: number;
  assetId: number;
};

export default class SaveAsset {
  static saveOrUnSaveAsset(assetId: string, userId: string) {
    console.log('assetId: ', assetId);
    console.log('userId: ', userId);
    return FirebaseService.saveOrUnSaveAsset(userId, assetId);
  }

  static async isSaved(assetId: string, userId: string) {
    return await FirebaseService.isSavedAsset(userId, assetId);
  }

  static async getSavedAsset(userId: string): Promise<Asset[]> {
    return FirebaseService.getSavedAsset(userId);
  }

  static async getAsset(id: string) {
    return await FirebaseService.getAsset(id);
  }

  static async getLikedAssets(assetsId: string[]) {
    return await Promise.all(
      assetsId.map((id) => {
        return FirebaseService.getAsset(id).then((info) => info);
      })
    );
  }
}
