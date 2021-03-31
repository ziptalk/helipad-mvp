export default class BuildingInformation {
    constructor(
        readonly thumbnailUrl: string,
        readonly address: string,
        readonly street: string,
        readonly nBedrooms: number,
        readonly nBathrooms: number,
        readonly nRooms: number,
        readonly square: number,
        readonly country: string,
        readonly buildingName: string,
        readonly floor: number,
        readonly stories: number,
        readonly residences: number,
        readonly petPolicy: string,
        readonly yearBuilt: number,
        readonly buildingAge: string,
        readonly buildingType: string
    ) {
    }

    static fromMap(map: Map<string, any>): BuildingInformation {
        return new BuildingInformation(
            map.get("thumbnailUrl") as string,
            map.get("address") as string,
            map.get("street") as string,
            map.get("nBedrooms") as number,
            map.get("nBathrooms") as number,
            map.get("nRooms") as number,
            map.get("square") as number,
            map.get("country") as string,
            map.get("buildingName") as string,
            map.get("floor") as number,
            map.get("stories") as number,
            map.get("residences") as number,
            map.get("petPolicy") as string,
            map.get("yearBuilt") as number,
            map.get("buildingAge") as string,
            map.get("buildingType") as string
        );
    }

}