import Asset from "../model/Asset";
import AssetService from "./asset/AssetService";
import UserService from "./user/UserService";
import ContactService from "./contact/ContactService";
import ProcessService from "./process/ProcessService";
import AssetProcessService from "./assetProcess/AssetProcessService";
import { MessageContainer } from "../model/MessageContainer";
import User from "../model/User";
import Process from "../model/Process";

export default class FirebaseService {
  static async getAssetList(): Promise<Asset[]> {
    return AssetService.getAssetList();
  }

  static async getAsset(id: string): Promise<Asset> {
    return AssetService.getAsset(id);
  }

  static async getProcess(userId: string, assetId: string): Promise<Process> {
    return AssetProcessService.getAssetProcess(userId, assetId);
  }
  static async getAssetListByNeighborhood(
    neighborhood: string
  ): Promise<Asset[]> {
    return AssetService.getAssetListByNeighborhood(neighborhood);
  }
  static async signUpWithEmailAndPassword({ ...props }) {
    return UserService.signUpWithEmailAndPassword(props);
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
    return await UserService.getUser(userId);
  }

  static async contactToAgent(userEmail: string, assetId: string) {
    return await UserService.contactToAgent(userEmail, assetId);
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

  static sendMessage(
    from: string,
    to: string,
    message: string,
    asset: string,
    type: string
  ) {
    return ContactService.sendMessage(from, to, message, asset, type);
  }

  static contactUsSendMessage(
    name: string,
    email: string,
    regard: string,
    phone: string,
    message: string,
    date: Date
  ){
    return ContactService.contactUsSendMessage(name, email, regard, phone, message, date)
  }

  static getContactHistory(userId: string, agentId: string) {
    return ContactService.getContactHistory(userId, agentId);
  }

  static getMyContactHistory(userId: string): Promise<MessageContainer[]> {
    return ContactService.getMyContactHistory(userId);
  }

  static checkInviteCode(inviteCode: string): Promise<any> {
    return UserService.checkInviteCode(inviteCode);
  }

  static async updateProcess(userId: string, assetId: string, step: string) {
    return ProcessService.updateProcess(userId, assetId, step);
  }

  static async getProcessInfo(userId: string, assetId: string) {
    return ProcessService.getProcessInfo(userId, assetId);
  }
}
