import MypageService from "../service/mypageList/MypageService";
import MypageList from "../model/MypageList";

export default class MypageListDomain {
  static async addPotentialList(list: any, userId: any, assetId: any) {
    const result = await MypageService.addPotentialList(list, userId, assetId);
    return result;
  }
  static async addEscrowList(list: any, userId: any, assetId: any) {
    const result = await MypageService.addEscrowList(list, userId, assetId);
    return result;
  }
  static async removePotentialList(list: any, userId: any, assetId: any) {
    await MypageService.removePotentialList(list, userId, assetId);
  }
  static async removeEscrowList(list: any, userId: any, assetId: any) {
    await MypageService.removeEscrowList(list, userId, assetId);
  }
  static async moveToPotentialList(list: any, userId: any, assetId: any) {
    await MypageService.moveToPotentialList(list, userId, assetId);
  }
  static async moveToEscrowList(list: any, userId: any, assetId: any) {
    await MypageService.moveToEscrowList(list, userId, assetId);
  }

  static async getPotentialList() {
    const result = await MypageService.getPotentialList();
    return result;
  }

  static async getEscrowList() {
    const result = await MypageService.getEscrowList();
    return result;
  }

  static async getFavoriteList(userId: any) {
    const result = await MypageService.getFavoriteList(userId);
    return result;
  }
  static async getOnGoingList(userId: any) {
    const result = await MypageService.getOnGoingList(userId);
    return result;
  }
  // mypage에 user list 초기화
  static async initUserMypageList(userId: any) {
    await MypageService.initUserMypageList(userId);
  }

  static async addFavoriteList(list: any, userId: any, assetId: any) {
    await MypageService.addFavoriteList(list, userId, assetId);
  }
  static async removeFavoriteList(list: any, userId: any, assetId: any) {
    return await MypageService.removeFavoriteList(list, userId, assetId);
  }

  static async addOnGoingList(list: any, userId: any, assetId: any) {
    await MypageService.addOnGoingList(list, userId, assetId);
  }
  static async removeOnGoingList(list: any, userId: any, assetId: any) {
    return await MypageService.removeOnGoingList(list, userId, assetId);
  }

  static async getMypageList(userId: any, assetId: any) {
    const favoriteList = await MypageService.getMypageList(userId);
    return favoriteList;
  }
  static async moveToFavoriteList(list: any, userId: any, assetId: any) {
    await MypageService.moveToFavoriteList(list, userId, assetId);
  }
  static async moveToOnGoingList(list: any, userId: any, assetId: any) {
    await MypageService.moveToOnGoingList(list, userId, assetId);
  }
  static async checkUserExistence(userId: any) {
    return await MypageService.checkUserExistence(userId);
  }
}
