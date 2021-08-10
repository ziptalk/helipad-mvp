import { assetStore, contactStore, contactUsStore } from '../../shared/Firebase';
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

  static async contactUsSendMessage(name: string, email: string, regard: string, phone: string, message: string, date:Date) {
    let doc = await contactUsStore.get();
    console.log(doc);
    console.log(doc.size);
    console.log("여기는 와?")

    return contactUsStore.add({
      name: name,
      email: email,
      regard: regard,
      phone: phone,
      message: message,
      date: date
    })

  }

  static async sendMessage(userId: string, agentId: string, message: string, asset: string, type: string) {
    let doc = await contactStore
      .where('user', '==', userId)
      .where('agent', '==', agentId)
      .get();
    console.log(doc);
    console.log(doc.size);
    if (doc.size === 1) {
      let docId = doc.docs[0].id;
      return contactStore.doc(docId).update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          timestamp: new Date(),
          contact: message,
          type: type,
        }),
      });
    } else if (doc.size === 0) {
      let assetDoc2 = await (await assetStore.where('id', '==', asset).get()).docs[0].ref;
      let assetDoc =  await (await assetStore.where('id', '==', asset).get());
      if (assetDoc.size === 1){
        return contactStore.add({
          user: userId,
          agent: agentId,
          messages: firebase.firestore.FieldValue.arrayUnion({
            timestamp: new Date(),
            contact: message,
            type: type,
          }),          
          asset: assetDoc2
        })
      }
    }
    return undefined;
  }
}
