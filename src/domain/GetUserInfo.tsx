import FirebaseService from "../service/FirebaseService";

export default class GetUserInfo {
  static execute(userId: string) {
    return FirebaseService.getUserInfo(userId);
  }
}
