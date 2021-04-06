import Asset from "../model/Asset";
import {store} from "../shared/Firebase";

export default class FirebaseService {
    async getAssetList() {
        let item = await store.get();
        console.log("size: ", item.size);
        item.forEach((t) => {
            console.log(t.data());
        });
    }
}