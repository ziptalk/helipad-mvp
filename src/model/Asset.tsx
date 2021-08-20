import BuildingInformation from "./BuildingInformation";

export const COLUMNS = {
  ID: "id",
  AGENT: "agent",
  FOR_INVESTMENT: "forInvestment",
  PRICE: "price",
  STATUS: "status",
  DAYS_ON_MARKET: "daysOnMarket",
  TAX_PER_MONTH: "taxPerMonth",
  MIN_DOWN_PYMT: "minDownPymt",
  COMPASS_TYPE: "compassType",
  MLS_TYPE: "mlsType",
  EXPECTED_MONTHLY_PAYMENT: "expectedMonthlyPayment",
  INFORMATION: "information",
  AMENITIES: "amenities",
  NEIGHBORHOOD: "neighborhood",
  LOTSIZE: "lotSize",
  HOAFEE: "hoaFee",
  BUILDING_INFORMATION: "buildingInformation",
};

export default class Asset {
  constructor(
    readonly id: string,
    readonly agent: string,
    readonly forInvestment: boolean,
    readonly price: number,
    readonly status: string,
    readonly daysOnMarket: number,
    readonly taxPerMonth: number,
    readonly minDownPymt: number,
    readonly compassType: string,
    readonly mlsType: string,
    readonly expectedMonthlyPayment: number,
    readonly information: string,
    readonly amenities: string[],
    readonly neighborhood: string,
    readonly lotSize: number,
    readonly hoaFee: number,
    readonly buildingInformation: BuildingInformation
  ) {}

  static fromObject(obj: any): Asset {
    console.log("id : " + obj[COLUMNS.ID]);
    console.log("building info : " + obj[COLUMNS.BUILDING_INFORMATION]);
    return new Asset(
      obj[COLUMNS.ID] as string,
      obj[COLUMNS.AGENT] as string,
      obj[COLUMNS.FOR_INVESTMENT] as boolean,
      obj[COLUMNS.PRICE] as number,
      obj[COLUMNS.STATUS] as string,
      obj[COLUMNS.DAYS_ON_MARKET] as number,
      obj[COLUMNS.TAX_PER_MONTH] as number,
      obj[COLUMNS.MIN_DOWN_PYMT] as number,
      obj[COLUMNS.COMPASS_TYPE] as string,
      obj[COLUMNS.MLS_TYPE] as string,
      obj[COLUMNS.EXPECTED_MONTHLY_PAYMENT] as number,
      obj[COLUMNS.INFORMATION] as string,
      obj[COLUMNS.AMENITIES] as string[],
      obj[COLUMNS.NEIGHBORHOOD] as string,
      obj[COLUMNS.LOTSIZE] as number,
      obj[COLUMNS.HOAFEE] as number,
      BuildingInformation.fromObject(obj[COLUMNS.BUILDING_INFORMATION])
    );
  }

  static emptyAsset(): Asset {
    return new Asset(
      "test_id",
      "test_agent",
      false,
      0,
      "No",
      0,
      0,

      0,
      "",
      "",
      0,

      "",
      [],
      "",
      0,
      0,
      new BuildingInformation(
        "",
        "",
        "",
        0,
        0,
        0,
        0,
        "",
        "",
        0,
        0,
        0,
        "",
        0,
        "",
        "",
        ""
      )
    );
  }

  // toMap(): Map<string, any> {
  //   let map = new Map<string, any>();
  //   map.set(COLUMNS.FOR_INVESTMENT, this.forInvestment);
  //   map.set(COLUMNS.PRICE, this.price);
  //   map.set(COLUMNS.STATUS, this.status);
  //   map.set(COLUMNS.DAYS_ON_MARKET, this.daysOnMarket);
  //   map.set(COLUMNS.TAX_PER_MONTH, this.taxPerMonth);

  //   map.set(COLUMNS.MIN_DOWN_PYMT, this.minDownPymt);
  //   map.set(COLUMNS.COMPASS_TYPE, this.compassType);
  //   map.set(COLUMNS.MLS_TYPE, this.mlsType);
  //   map.set(COLUMNS.EXPECTED_MONTHLY_PAYMENT, this.expectedMonthlyPayment);

  //   map.set(COLUMNS.INFORMATION, this.information);
  //   map.set(COLUMNS.AMENITIES, this.amenities);
  //   map.set(COLUMNS.NEIGHBORHOOD, this.neighborhood);
  //   map.set(COLUMNS.HOAFEE, this.hoaFee);
  //   map.set(COLUMNS.LOTSIZE, this.lotSize);
  //   map.set(COLUMNS.BUILDING_INFORMATION, this.buildingInformation.toMap());
  //   return map;
  // }
}
