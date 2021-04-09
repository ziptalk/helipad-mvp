import Asset from "../model/Asset";
import {store} from "../shared/Firebase";

export default class FirebaseService {
    async getAssetList() {
        return (await store.get()).docs;
    }

    async getAsset(id: string) {
        return await store.where("id", "==", id).get();
    }
}