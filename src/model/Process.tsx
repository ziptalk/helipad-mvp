import { High } from "../views/Asset/components/asset_detail/SchoolNearBy/component";

export default class Process {
    constructor(
        readonly assetId: string,
        readonly userId: string,
        readonly process: Array<Day>
        ) {}

    static async fromObject(object: any) {
        return new Process(
            object["assetId"] as string,
            object["userId"] as string,
            object["process"].map((msg: any) => Day.fromObject(msg))
        );
    }

    static emptyProcess(): Process {
        return new Process(
          "asset_id",
          "user_id",
          []
        //   new Day(
        //     new Task(
        //         "agent",
        //         14263748 as Long,
        //         "description",
        //         false,
        //         1
        //     )
        //   )
        );
      }
}

class Day {
    constructor(
        readonly task: Array<Task>,
    ){}

    static fromObject(object: any) {
        return new Day(
            object["task"].map((msg: any) => Task.fromObject(msg))
        )
    }
}

class Task {
    constructor(
        readonly agent: string,
        readonly deadline: Long,
        readonly description: string,
        readonly done: boolean,
        readonly day: number
    ) {}

    static fromObject(object: any) {
        return new Task(
            object["agent"] as string,
            object["deadline"] as Long,
            object["description"] as string,
            object["done"] as boolean,
            object["day"] as number
        )
    }
}
