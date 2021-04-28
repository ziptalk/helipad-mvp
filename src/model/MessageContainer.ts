import Asset from "./Asset";

export class MessageContainer {
    constructor(
        readonly user: string,
        readonly agent: string,
        readonly messages: Array<Message>,
        readonly asset: Asset
    ) {}

    static async fromObject(object: any) {
        return new MessageContainer(
            object["user"] as string,
            object["agent"] as string,
            object["messages"].map((msg: any) => Message.fromObject(msg)),
            Asset.fromObject((await object["asset"].get()).data())
        );
    }
}

class Message {
    constructor(
        readonly timestamp: Long,
        readonly message: string,
        readonly type: string
    ) {}

    static fromObject(object: any) {
        return new Message(
            object["timestamp"] as Long,
            object["message"] as string,
            object["type"] as string
        )
    }
}
