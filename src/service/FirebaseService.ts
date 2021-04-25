import Asset from '../model/Asset';
import AssetService from "./asset/AssetService";
import UserService from "./user/UserService";

export default class FirebaseService {
    async getAssetList(): Promise<Asset[]> {
        return AssetService.getAssetList();
    }

    async getAsset(id: string): Promise<Asset> {
        return AssetService.getAsset(id);
    }

    static async signUpWithEmailAndPassword(email: string, password: string, firstName: string, lastName: string, isAgent: boolean) {
        return UserService.signUpWithEmailAndPassword(email, password, firstName, lastName, isAgent);
    }

    async logInWithEmailAndPassword(email: string, password: string) {
        return UserService.logInWithEmailAndPassword(email, password);
    }

    static logout() {
        return UserService.logout();
    }

    async registerAuthStateChangeListener(onChange: (user: any) => void) {
        return UserService.registerAuthStateChangeListener(onChange);
    }

    static async saveOrUnSaveAsset(userId: string, assetId: string) {
        return AssetService.saveOrUnSaveAsset(userId, assetId);
    }

    static async isSavedAsset(userId: string, assetId: string): Promise<boolean> {
        return AssetService.isSavedAsset(userId, assetId);
    }

    static async getSavedAsset(userId: string): Promise<Asset[]> {
        return AssetService.getSavedAsset(userId);
    }
}
