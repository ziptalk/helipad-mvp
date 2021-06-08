export const COLUMNS = {
  THUMBNAIL: "thumbnail",
  ADDRESS: "address",
  STREET: "street",
  N_BED_ROOMS: "nBedrooms",
  N_BATH_ROOMS: "nBathrooms",
  N_ROOMS: "nRooms",
  SQUARE: "square",
  COUNTY: "county",
  BUILDING_NAME: "buildingName",
  FLOOR: "floor",
  STORIES: "stories",
  RESIDENCES: "residences",
  PET_POLICY: "petPolicy",
  YEAR_BUILT: "yearBuilt",
  BUILDING_AGE: "buildingAge",
  BUILDING_TYPE: "buildingType",
  VIRTUAL_TOUR: "virtualTour",
};

export default class BuildingInformation {
  constructor(
    readonly thumbnail: string,
    readonly address: string,
    readonly street: string,
    readonly nBedrooms: number,
    readonly nBathrooms: number,
    readonly nRooms: number,
    readonly square: number,
    readonly county: string,
    readonly buildingName: string,
    readonly floor: number,
    readonly stories: number,
    readonly residences: number,
    readonly petPolicy: string,
    readonly yearBuilt: number,
    readonly buildingAge: string,
    readonly buildingType: string,
    readonly virtualTour: string
  ) {}

  static fromObject(obj: any): BuildingInformation {
    return new BuildingInformation(
      obj[COLUMNS.THUMBNAIL] as string,
      obj[COLUMNS.ADDRESS] as string,
      obj[COLUMNS.STREET] as string,
      obj[COLUMNS.N_BED_ROOMS] as number,
      obj[COLUMNS.N_BATH_ROOMS] as number,
      obj[COLUMNS.N_ROOMS] as number,
      obj[COLUMNS.SQUARE] as number,
      obj[COLUMNS.COUNTY] as string,
      obj[COLUMNS.BUILDING_NAME] as string,
      obj[COLUMNS.FLOOR] as number,
      obj[COLUMNS.STORIES] as number,
      obj[COLUMNS.RESIDENCES] as number,
      obj[COLUMNS.PET_POLICY] as string,
      obj[COLUMNS.YEAR_BUILT] as number,
      obj[COLUMNS.BUILDING_AGE] as string,
      obj[COLUMNS.BUILDING_TYPE] as string,
      obj[COLUMNS.VIRTUAL_TOUR] as string
    );
  }

  toMap(): Map<string, any> {
    let map = new Map<string, any>();
    map.set(COLUMNS.THUMBNAIL, this.thumbnail);
    map.set(COLUMNS.ADDRESS, this.address);
    map.set(COLUMNS.STREET, this.street);
    map.set(COLUMNS.N_BED_ROOMS, this.nBedrooms);
    map.set(COLUMNS.N_BATH_ROOMS, this.nBathrooms);
    map.set(COLUMNS.N_ROOMS, this.nRooms);
    map.set(COLUMNS.SQUARE, this.square);
    map.set(COLUMNS.COUNTY, this.county);
    map.set(COLUMNS.BUILDING_NAME, this.buildingName);
    map.set(COLUMNS.FLOOR, this.floor);
    map.set(COLUMNS.STORIES, this.stories);
    map.set(COLUMNS.RESIDENCES, this.residences);
    map.set(COLUMNS.PET_POLICY, this.petPolicy);
    map.set(COLUMNS.YEAR_BUILT, this.yearBuilt);
    map.set(COLUMNS.BUILDING_AGE, this.buildingAge);
    map.set(COLUMNS.BUILDING_TYPE, this.buildingType);
    map.set(COLUMNS.VIRTUAL_TOUR, this.virtualTour);
    return map;
  }
}
