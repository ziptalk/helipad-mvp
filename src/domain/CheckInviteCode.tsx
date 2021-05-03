import firebase from '../service/FirebaseService';
export class CheckInviteCode {
  static async checkInviteCode(inviteCode: string) {
    return await firebase.checkInviteCode(inviteCode);
  }
}
