import { processStore } from '../../shared/Firebase';
import { stepChecker } from '../../views/MyPage/components/process/processService';
export default class ProcessService {
  static async updateProcess(userId: string, assetId: string, step: string) {
    let firebaseResult = await processStore
      .where('userId', '==', userId)
      .where('assetId', '==', assetId)
      .get();
    return firebaseResult.docs[0].ref.update({
      step: step,
    });
  }

  static async getProcessInfo(userId: string, assetId: string) {
    let firebaseResult = await processStore
      .where('userId', '==', userId)
      .where('assetId', '==', assetId)
      .get();
    return firebaseResult.docs[0].data();
  }
}
