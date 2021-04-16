import Asset, {COLUMNS} from "../model/Asset";
import {assetStore, userStore} from "../shared/Firebase";
import firebase from "firebase";

export default class FirebaseService {
    async getAssetList(): Promise<Asset[]> {
        return (await assetStore.get()).docs.map((rawData) => {
            return FirebaseService.parseAsset(rawData.data());
        });
    }

    async getAsset(id: string): Promise<Asset> {
        let firebaseResult = await assetStore.where("id", "==", id).get();
        if (firebaseResult.docs.length === 1) {
            return FirebaseService.parseAsset(firebaseResult.docs[0].data());
        } else {
            return Asset.emptyAsset();
        }
    }

    async signUpWithEmailAndPassword(email: string, password: string) {
        console.log("signUpWithEmailAndPassword");
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    async logInWithEmailAndPassword(email: string, password: string) {
        console.log("logInWithEmailAndPassword");
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    async registerAuthStateChangeListener(onChange: (user: any) => void) {
        firebase.auth().onAuthStateChanged(onChange);
    }

    static async saveOrUnSaveAsset(userId: string, assetId: string) {
        let userDocument = userStore.doc(userId);
        let original = (await userDocument.get());
        if (original === undefined || original.data() === undefined) {
            return undefined;
        }

        let likesField = original.get("likes");
        if (likesField.includes(assetId)) {
            let updatedData = likesField.slice();
            let deletedData = updatedData.filter((item: string) => item !== assetId);
            await userDocument.set({"likes": deletedData});
        } else {
            let updatedData = likesField.slice();
            await userDocument.set({"likes": updatedData});
        }
    }

    static async isSavedAsset(userId: string, assetId: string) {
        let userDocument = userStore.doc(userId);
        let original = (await userDocument.get());
        if (original !== undefined && original.data() !== undefined) {
            let likesField = original.get("likes");
            return likesField.includes(assetId);
        }
        return false;
    }

    static async getSavedAsset(userId: string) {
        let userDocument = userStore.doc(userId);
        return (await userDocument.get()).get("likes");
    }

    private static parseAsset(asset: firebase.firestore.DocumentData): Asset {
        let assetMap = new Map(Object.entries(asset));
        let buildingInfoObject = asset.buildingInformation;
        assetMap.set(COLUMNS.BUILDING_INFORMATION, new Map(Object.entries(buildingInfoObject)));
        return Asset.fromMap(assetMap);
    }
}