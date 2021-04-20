import FirebaseService from '../service/FirebaseService';

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

  static async getSavedAsset(userId: string) {
    return await FirebaseService.getSavedAsset(userId);
  }

  static async getAsset(id: string) {
    return await new FirebaseService().getAsset(id);
  }

  static async getLikedAssets(assetsId: string[]) {
    let firebase = new FirebaseService();
    return await Promise.all(
      assetsId.map((id) => {
        return firebase.getAsset(id).then((info) => info);
      })
    );
  }
}
