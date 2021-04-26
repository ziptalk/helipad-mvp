export class MessageContainer {
    constructor(
        readonly user: string,
        readonly agent: string,
        readonly messages: Array<Message>
    ) {}

    static fromObject(object: any) {
        let convertedMessage: Array<Message> = object["messages"]
            .map((msg: any) => Message.fromObject(msg));

        return new MessageContainer(
            object["user"] as string,
            object["agent"] as string,
            convertedMessage
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
