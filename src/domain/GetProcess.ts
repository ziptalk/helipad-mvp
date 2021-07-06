import FirebaseService from "../service/FirebaseService";
import Process from "../model/Process";

export default class ProcessUseCase {
    static getProcess(userId: string, assetId: string): Promise<Process> {
        return FirebaseService.getProcess(userId, assetId);
    }
}