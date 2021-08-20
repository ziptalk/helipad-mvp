import FirebaseService from "../service/FirebaseService";
import {MessageContainer} from "../model/MessageContainer";

export default class ContactUseCase {
    static send(userId: string, agentId: string, message: string, asset: string, type: string) {
        return FirebaseService.sendMessage(userId, agentId, message, asset, type);
    }

    static contactUsSend(name: string, email: string, regard: string, phone: string, message: string, date: Date) {
        return FirebaseService.contactUsSendMessage(name, email, regard, phone, message, date)
    }

    static getMyContactHistory(userId: string): Promise<MessageContainer[]> {
        return FirebaseService.getMyContactHistory(userId);
    }

    static getContactHistory(userId: string, agentId: string) {
        return FirebaseService.getContactHistory(userId, agentId);
    }
}