export default class Asset {
    constructor(
        readonly name: string,
        readonly address: string,
        readonly thumbnailUrl: string,
        readonly price: string,
        readonly nBedrooms: number,
        readonly nBathrooms: number,
        readonly square: number
    ) {}

    static fromMap(map: Map<string, any>): Asset {
        return new Asset(
            map.get("name") as string,
            map.get("address") as string,
            map.get("thumbnailUrl") as string,
            map.get("price") as string,
            map.get("nBedrooms") as number,
            map.get("nBathrooms") as number,
            map.get("square") as number
        );
    }
}