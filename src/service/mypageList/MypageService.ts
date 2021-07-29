import { mypageStore, userStore, assetStore } from "../../shared/Firebase";
import MypageList from "../../model/MypageList";
import firebase from "firebase";
export default class MypageService {
  // add potential list
  static async addPotentialList(list: any, userId: any, assetId: any) {
    const result = await mypageStore.doc("admin").update({
      potentialList: firebase.firestore.FieldValue.arrayUnion({
        list,
        userId,
        assetId,
      }),
    });
    return "Success add adminList";
  }
  // add escrow list
  static async addEscrowList(list: any, userId: any, assetId: any) {
    const result = await mypageStore.doc("admin").update({
      inEscrowList: firebase.firestore.FieldValue.arrayUnion({
        list,
        userId,
        assetId,
      }),
    });
    return "Success add in escrow list";
  }
  static async removePotentialList(list: any, userId: any, assetId: any) {
    const removeValue = await mypageStore.doc("admin").update({
      potentialList: firebase.firestore.FieldValue.arrayRemove({
        list,
        userId,
        assetId,
      }),
    });
  }
  static async removeEscrowList(list: any, userId: any, assetId: any) {
    const removeValue = await mypageStore.doc("admin").update({
      inEscrowList: firebase.firestore.FieldValue.arrayRemove({
        list,
        userId,
        assetId,
      }),
    });
  }
  static async moveToPotentialList(list: any, userId: any, assetId: any) {
    // escrow => potential

    await this.removeEscrowList(list, userId, assetId);
    list.inEscrow = false;
    await this.addPotentialList(list, userId, assetId);
  }
  static async moveToEscrowList(list: any, userId: any, assetId: any) {
    // potential => escrow

    await this.removePotentialList(list, userId, assetId);
    list.inEscrow = true;
    await this.addEscrowList(list, userId, assetId);
  }
  static async getAdminPageList() {}

  // get potential list
  static async getPotentialList() {
    const potentialList: any[] = [];
    const result = await mypageStore.doc("admin").get();
    return result.get("potentialList");
  }

  static async getEscrowList() {
    const escrowList: any[] = [];
    const result = await mypageStore.doc("admin").get();
    return result.get("inEscrowList");
  }

  // update list
  static async getUser(userId: any) {
    this.initUserMypageList(userId);
  }
  static async initUserMypageList(userId: any) {
    await mypageStore.doc("user").collection("userInfo").doc(userId).set({
      favoriteList: [],
      onGoingList: [],
    });
  }
  static async addFavoriteList(list: any, userId: any, assetId: any) {
    await mypageStore
      .doc("user")
      .collection("userInfo")
      .doc(userId)
      .update({
        favoriteList: firebase.firestore.FieldValue.arrayUnion({
          list,
          userId,
          assetId,
        }),
      });
  }

  static async removeFavoriteList(list: any, userId: any, assetId: any) {
    const removeValue = await mypageStore
      .doc("user")
      .collection("userInfo")
      .doc(userId)
      .update({
        favoriteList: firebase.firestore.FieldValue.arrayRemove({
          list,
          userId,
          assetId,
        }),
      });
    return removeValue;
  }

  static async addOnGoingList(list: any, userId: any, assetId: any) {
    await mypageStore
      .doc("user")
      .collection("userInfo")
      .doc(userId)
      .update({
        onGoingList: firebase.firestore.FieldValue.arrayUnion({
          list,
          userId,
          assetId,
        }),
      });
  }
  static async removeOnGoingList(list: any, userId: any, assetId: any) {
    const removeValue = await mypageStore
      .doc("user")
      .collection("userInfo")
      .doc(userId)
      .update({
        onGoingList: firebase.firestore.FieldValue.arrayRemove({
          list,
          userId,
          assetId,
        }),
      });

    return removeValue;
  }

  static async getMypageList(userId: any) {
    const userMypageList = await mypageStore
      .doc("user")
      .collection("userInfo")
      .doc(userId)
      .get();
    return userMypageList.data();
  }

  static async moveToFavoriteList(list: any, userId: any, assetId: any) {
    // ongoing => favorite

    await this.removeOnGoingList(list, userId, assetId);
    list.inEscrow = false;
    await this.addFavoriteList(list, userId, assetId);
  }
  static async moveToOnGoingList(list: any, userId: any, assetId: any) {
    // favorite => ongoing

    await this.removeFavoriteList(list, userId, assetId);
    list.inEscrow = true;
    await this.addOnGoingList(list, userId, assetId);
  }

  static async getFavoriteList(userId: any) {
    const result = await mypageStore
      .doc("user")
      .collection("userInfo")
      .doc(userId)
      .get();
    const favoriteList = await result.get("favoriteList");
    return favoriteList;
  }
  static async getOnGoingList(userId: any) {
    const result = await mypageStore
      .doc("user")
      .collection("userInfo")
      .doc(userId)
      .get();
    const onGoingList = await result.get("onGoingList");
    return onGoingList;
  }

  static async checkUserExistence(userId: any) {
    const result = await mypageStore
      .doc("user")
      .collection("userInfo")
      .doc(userId)
      .get();
    return result.exists;
  }
}
