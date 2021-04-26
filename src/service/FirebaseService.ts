import Asset from '../model/Asset';
import AssetService from "./asset/AssetService";
import UserService from "./user/UserService";
import ContactService from "./contact/ContactService";
import {MessageContainer} from "../model/MessageContainer";
import User from "../model/User";

export default class FirebaseService {
    static async getAssetList(): Promise<Asset[]> {
        return AssetService.getAssetList();
    }

    static async getAsset(id: string): Promise<Asset> {
        return AssetService.getAsset(id);
    }

    static async signUpWithEmailAndPassword(email: string, password: string, firstName: string, lastName: string, isAgent: boolean) {
        return UserService.signUpWithEmailAndPassword(email, password, firstName, lastName, isAgent);
    }

    static async logInWithEmailAndPassword(email: string, password: string) {
        return UserService.logInWithEmailAndPassword(email, password);
    }

    static logout() {
        return UserService.logout();
    }

    static async registerAuthStateChangeListener(onChange: (user: any) => void) {
        return UserService.registerAuthStateChangeListener(onChange);
    }

    static async getUserInfo(userId: string): Promise<User> {
        return UserService.getUser(userId);
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

    static sendMessage(from: string, to: string, message: string) {
        return ContactService.sendMessage(from, to, message);
    }

    static getContactHistory(userId: string, agentId: string) {
        return ContactService.getContactHistory(userId, agentId);
    }

    static getMyContactHistory(userId: string): Promise<MessageContainer[]> {
        return ContactService.getMyContactHistory(userId);
    }
}
