import Asset from "../../model/Asset";
import { assetStore, userStore } from "../../shared/Firebase";
import firebase from "firebase";

export default class AssetService {
  static async getAssetList(): Promise<Asset[]> {
    let store = await assetStore.get();
    return store.docs.map((snapshot) => Asset.fromObject(snapshot.data()));
  }

  static async getAsset(id: string): Promise<Asset> {
    console.log("getAsset");
    let result = await assetStore.where("id", "==", id).get();
    if (result.docs.length === 1) {
      return Asset.fromObject(result.docs[0].data());
    } else {
      return Asset.emptyAsset();
    }
  }

  static async getAssetListByNeighborhood(neighborhood: string) {
    console.log("neighborhood :", neighborhood);
    if(neighborhood == undefined){
      let store =  await assetStore.get();
      return store.docs.map((snapshot) => Asset.fromObject(snapshot.data()));
    }else{
      let store = await assetStore
        .where("neighborhood", "==", neighborhood)
        .get();
      console.log(
        "firestore result:",
        store.docs.map((snapshot) => Asset.fromObject(snapshot.data()))
      );
      return store.docs.map((snapshot) => Asset.fromObject(snapshot.data()));
    }
  }

  static async saveOrUnSaveAsset(
    userId: string,
    assetId: string
  ): Promise<void> {
    let userDocument = userStore.doc(userId);
    let originalData = await userDocument.get();
    if (originalData === null || originalData.data() === null) {
      throw Error("Can't find user data");
    }

    let likesField = originalData.get("likes").map((item: any) => item.id);
    let assetDocumentId = await this.getAssetDocumentId(assetId);
    let assetReference = assetStore.doc(assetDocumentId);
    if (likesField.includes(assetDocumentId)) {
      return userDocument.update({
        likes: firebase.firestore.FieldValue.arrayRemove(assetReference),
      });
    } else {
      return userDocument.update({
        likes: firebase.firestore.FieldValue.arrayUnion(assetReference),
      });
    }
  }

  static async isSavedAsset(userId: string, assetId: string): Promise<boolean> {
    let userDocument = userStore.doc(userId);
    let user = await userDocument.get();
    let thisAssetDocumentId = await this.getAssetDocumentId(assetId);
    if (user !== undefined && user.data() !== undefined) {
      let likesField = user.get("likes");
      let idList = likesField.map((like: any) => like.id);
      return idList.includes(thisAssetDocumentId);
    }
    return false;
  }

  static async getSavedAsset(userId: string): Promise<Asset[]> {
    let userDocument = await userStore.doc(userId).get();
    let myAssetDocumentId = userDocument.get("likes");
    return Promise.all(
      myAssetDocumentId.map(async (docRef: any) => {
        let ref = await docRef.get();
        return Asset.fromObject(ref.data());
      })
    );
  }

  private static async getAssetDocumentId(assetId: string): Promise<string> {
    let assetDocument = await assetStore.where("id", "==", assetId).get();
    if (assetDocument.size === 0) {
      throw Error("Cannot find asset id " + assetId);
    }
    return assetDocument.docs[0].id;
  }
}
