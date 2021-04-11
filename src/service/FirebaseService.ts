import Asset, {COLUMNS} from "../model/Asset";
import {store} from "../shared/Firebase";
import firebase from "firebase";

export default class FirebaseService {
    async getAssetList(): Promise<Asset[]> {
        return (await store.get()).docs.map((rawData) => {
            return FirebaseService.parseAsset(rawData.data());
        });
    }

    async getAsset(id: string): Promise<Asset> {
        let firebaseResult = await store.where("id", "==", id).get();
        if (firebaseResult.docs.length === 1) {
            return FirebaseService.parseAsset(firebaseResult.docs[0].data());
        } else {
            return Asset.emptyAsset();
        }
    }

    async signUpWithEmailAndPassword(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
            }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("error during signup with email: ", errorMessage);
        });
    }

    private static parseAsset(asset: firebase.firestore.DocumentData): Asset {
        let assetMap = new Map(Object.entries(asset));
        let buildingInfoObject = asset.buildingInformation;
        assetMap.set(COLUMNS.BUILDING_INFORMATION, new Map(Object.entries(buildingInfoObject)));
        return Asset.fromMap(assetMap);
    }
}