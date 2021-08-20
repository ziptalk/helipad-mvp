import { processStore } from '../../shared/Firebase';
import Process  from '../../model/Process';
import firebase from 'firebase';

export default class AssetProcessService {
  static async getAssetProcess(userId: string, assetId: string) {
    console.log(
      'getAssetProcess, userId : ' + userId + ', assetId : ' + assetId
    );
    // let doc = await processStore
    //   .where('assetId', '==', assetId)
    //   .get();
    // console.log('doc: ' + doc);
    
    let result = await processStore.where("assetId", "==", assetId).get();
    if (result.docs.length === 1) {
      return Process.fromObject(result.docs[0].data());
    } else {
      return Process.emptyProcess();
    }
  }
}
