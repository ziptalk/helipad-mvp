import firebase from '../service/FirebaseService';
export default class UpdateProcess {
  static async updateProcess(userId: string, assetId: string, step: string) {
    return firebase.updateProcess(userId, assetId, step);
  }
}
