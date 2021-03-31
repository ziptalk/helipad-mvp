import BuildingInformation from "./BuildingInformation";

export default class Asset {
    constructor(
        readonly price: number,
        readonly status: string,
        readonly daysOnMarket: number,
        readonly taxPerMonth: number,
        readonly commonChargePerMonth: number,
        readonly minDownPymt: number,
        readonly compassType: string,
        readonly mlsType: string,
        readonly expectedMonthlyPayment: number,
        readonly expectedMonthlyRent: number,
        readonly information: string,
        readonly amenities: string[],
        readonly buildingInformation: BuildingInformation
    ) {}

    static fromMap(map: Map<string, any>): Asset {
        return new Asset(
            map.get("price") as number,
            map.get("status") as string,
            map.get("daysOnMarket") as number,
            map.get("taxPerMonth") as number,
            map.get("commonChargePerMonth") as number,
            map.get("minDownPymt") as number,
            map.get("compassType") as string,
            map.get("mlsType") as string,
            map.get("expectedMonthlyPayment") as number,
            map.get("expectedMonthlyRent") as number,
            map.get("information") as string,
            map.get("amenities") as string[],
            BuildingInformation.fromMap(map.get("buildingInformation"))
        );
    }
}