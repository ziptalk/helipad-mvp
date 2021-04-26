import FirebaseService from "../service/FirebaseService";
import {MessageContainer} from "../model/MessageContainer";

export default class ContactUseCase {
    static send(userId: string, agentId: string, message: string) {
        return FirebaseService.sendMessage(userId, agentId, message);
    }

    static getMyContactHistory(userId: string): Promise<MessageContainer[]> {
        return FirebaseService.getMyContactHistory(userId);
    }

    static getContactHistory(userId: string, agentId: string) {
        return FirebaseService.getContactHistory(userId, agentId);
    }
}