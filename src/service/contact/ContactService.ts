import { contactStore } from '../../shared/Firebase';
import { MessageContainer } from '../../model/MessageContainer';
import firebase from 'firebase';

export default class ContactService {
  static async getContactHistory(userId: string, agentId: string) {
    console.log(
      'getContactHistory, userId : ' + userId + ', agentId : ' + agentId
    );
    let doc = await contactStore
      .where('user', '==', userId)
      .where('agent', '==', agentId)
      .get();
    console.log('doc: ' + doc);

    // if (doc.size === 1) {
    //   return MessageContainer.fromObject(doc.docs[0].data());
    // } else {
    //   throw Error();
    // }
  }

  static async getMyContactHistory(
    userId: string
  ): Promise<MessageContainer[]> {
    let contacts = await contactStore.where('user', '==', userId).get();
    // let contacts = await contactStore.doc(userId).get();
    return Promise.all(
      contacts.docs.map((doc) => {
        return MessageContainer.fromObject(doc.data());
      })
      // return MessageContainer.fromObject(contacts.data());
    );
      
  }

  static async sendMessage(userId: string, agentId: string, message: string) {
    let doc = await contactStore
      .where('user', '==', userId)
      .where('agent', '==', agentId)
      .get();
    if (doc.size === 1) {
      let docId = doc.docs[0].id;
      return contactStore.doc(docId).update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          timestamp: new Date(),
          message: message,
          type: 'question',
        }),
      });
    }
    return undefined;
  }
}
