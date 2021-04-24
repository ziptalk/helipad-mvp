import Asset, {COLUMNS} from '../model/Asset';
import {assetStore, userStore} from '../shared/Firebase';
import firebase from 'firebase';

export default class FirebaseService {
    async getAssetList(): Promise<Asset[]> {
        return (await assetStore.get()).docs.map((rawData) => {
            return FirebaseService.parseAsset(rawData.data());
        });
    }

    async getAsset(id: string): Promise<Asset> {
        let firebaseResult = await assetStore.where('id', '==', id).get();
        if (firebaseResult.docs.length === 1) {
            return FirebaseService.parseAsset(firebaseResult.docs[0].data());
        } else {
            return Asset.emptyAsset();
        }
    }

    async signUpWithEmailAndPassword(email: string, password: string) {
        console.log('signUpWithEmailAndPassword');
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    async logInWithEmailAndPassword(email: string, password: string) {
        console.log('logInWithEmailAndPassword');
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    async registerAuthStateChangeListener(onChange: (user: any) => void) {
        firebase.auth().onAuthStateChanged(onChange);
    }

    static async saveOrUnSaveAsset(userId: string, assetId: string) {
        let userDocument = userStore.doc(userId);
        let original = await userDocument.get();
        if (original === undefined || original.data() === undefined) {
            return undefined;
        }

        let likesField = original.get("likes").map((item: any) => item.id);
        let assetDocumentId = await this.getAssetDocumentId(assetId);
        if (likesField.includes(assetDocumentId)) {
            await userDocument.update({likes: firebase.firestore.FieldValue.arrayRemove(assetStore.doc(assetDocumentId))});
        } else {
            await userDocument.update({likes: firebase.firestore.FieldValue.arrayUnion(assetStore.doc(assetDocumentId))});
        }
    }

    static async isSavedAsset(userId: string, assetId: string) {
        console.log("isSavedAsset");
        let userDocument = userStore.doc(userId);
        let original = (await userDocument.get());

        if (original !== undefined && original.data() !== undefined) {
            let likesField = original.get("likes");
            console.log("isSavedAsset-likesField : " + likesField);
            return likesField[assetId] !== undefined;
        }
        return false;
    }

    private static async getAssetDocumentId(assetId: string) {
        console.log("find asset : " + assetId);
        let assetDocument = await assetStore.where("id", "==", assetId).get();
        if (assetDocument.size === 0) {
            throw Error("Cannot find asset id " + assetId);
        }
        return assetDocument.docs[0].id;
    }

    static async getSavedAsset(userId: string): Promise<Asset[]> {
        let userDocument = userStore.doc(userId);
        let myAssetDocumentIds = (await userDocument.get()).get("likes");
        return Promise.all(myAssetDocumentIds.map(async (docRef: any) => {
            let ref = await docRef.get();
            return this.parseAsset(ref.data());
        }));
    }

    private static parseAsset(asset: firebase.firestore.DocumentData): Asset {
        let assetMap = new Map(Object.entries(asset));
        let buildingInfoObject = asset.buildingInformation;
        assetMap.set(COLUMNS.BUILDING_INFORMATION, new Map(Object.entries(buildingInfoObject)));
        return Asset.fromMap(assetMap);
    }

    static getMapOrEmpty(map: any): any {
        console.log("getMapOrEmpty : ", map);
        if (map === null || map === undefined || map === {}) {
            console.log("null");
            return {};
        }
        console.log("getMapOrEmpty: " + map + ", " + map.size);
        if (map.size === 0) {
            console.log("empty");
            return {};
        }
        console.log("not anything");
        return map;
    }
}
