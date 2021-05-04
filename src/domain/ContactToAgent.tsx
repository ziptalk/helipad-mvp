import Firebase from '../service/FirebaseService';
export default class ContactToAgent {
  static async contactToAgent(userEmail: string, assetId: string) {
    return await Firebase.contactToAgent(userEmail, assetId);
  }
}
