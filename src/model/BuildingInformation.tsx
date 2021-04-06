export const COLUMNS = {
    THUMBNAIL_URL: "thumbnailUrl",
    ADDRESS: "address",
    STREET: "street",
    N_BED_ROOMS: "nBedrooms",
    N_BATH_ROOMS: "nBathrooms",
    N_ROOMS: "nRooms",
    SQUARE: "square",
    COUNTRY: "country",
    BUILDING_NAME: "buildingName",
    FLOOR: "floor",
    STORIES: "stories",
    RESIDENCES: "residences",
    PET_POLICY: "petPolicy",
    YEAR_BUILT: "yearBuilt",
    BUILDING_AGE: "buildingAge",
    BUILDING_TYPE: "buildingType"
};

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
            map.get(COLUMNS.THUMBNAIL_URL) as string,
            map.get(COLUMNS.ADDRESS) as string,
            map.get(COLUMNS.STREET) as string,
            map.get(COLUMNS.N_BED_ROOMS) as number,
            map.get(COLUMNS.N_BATH_ROOMS) as number,
            map.get(COLUMNS.N_ROOMS) as number,
            map.get(COLUMNS.SQUARE) as number,
            map.get(COLUMNS.COUNTRY) as string,
            map.get(COLUMNS.BUILDING_NAME) as string,
            map.get(COLUMNS.FLOOR) as number,
            map.get(COLUMNS.STORIES) as number,
            map.get(COLUMNS.RESIDENCES) as number,
            map.get(COLUMNS.PET_POLICY) as string,
            map.get(COLUMNS.YEAR_BUILT) as number,
            map.get(COLUMNS.BUILDING_AGE) as string,
            map.get(COLUMNS.BUILDING_TYPE) as string
        );
    }

}