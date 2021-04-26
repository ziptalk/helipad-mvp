import BuildingInformation from './BuildingInformation';

export const COLUMNS = {
  ID: "id",
  AGENT: "agent",
  FOR_INVESTMENT: "forInvestment",
  PRICE: "price",
  STATUS: "status",
  DAYS_ON_MARKET: "daysOnMarket",
  TAX_PER_MONTH: "taxPerMonth",
  COMMON_CHARGE_PER_MONTH: "commonChargePerMonth",
  MIN_DOWN_PYMT: "minDownPymt",
  COMPASS_TYPE: "compassType",
  MLS_TYPE: "mlsType",
  EXPECTED_MONTHLY_PAYMENT: "expectedMonthlyPayment",
  EXPECTED_MONTHLY_RENT: "expectedMonthlyRent",
  INFORMATION: "information",
  AMENITIES: "amenities",
  BUILDING_INFORMATION: "buildingInformation"
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
      map.get(COLUMNS.ID) as string,
      map.get(COLUMNS.AGENT) as string,
      map.get(COLUMNS.FOR_INVESTMENT) as boolean,
      map.get(COLUMNS.PRICE) as number,
      map.get(COLUMNS.STATUS) as string,
      map.get(COLUMNS.DAYS_ON_MARKET) as number,
      map.get(COLUMNS.TAX_PER_MONTH) as number,
      map.get(COLUMNS.COMMON_CHARGE_PER_MONTH) as number,
      map.get(COLUMNS.MIN_DOWN_PYMT) as number,
      map.get(COLUMNS.COMPASS_TYPE) as string,
      map.get(COLUMNS.MLS_TYPE) as string,
      map.get(COLUMNS.EXPECTED_MONTHLY_PAYMENT) as number,
      map.get(COLUMNS.EXPECTED_MONTHLY_RENT) as number,
      map.get(COLUMNS.INFORMATION) as string,
      map.get(COLUMNS.AMENITIES) as string[],
      BuildingInformation.fromMap(map.get(COLUMNS.BUILDING_INFORMATION))
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
        0,
        "",
        "",
        0,
        0,
        "",
        [],
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
            ""
        )
    );
  }

  toMap(): Map<string, any> {
    let map = new Map<string, any>();
    map.set(COLUMNS.FOR_INVESTMENT, this.forInvestment);
    map.set(COLUMNS.PRICE, this.price);
    map.set(COLUMNS.STATUS, this.status);
    map.set(COLUMNS.DAYS_ON_MARKET, this.daysOnMarket);
    map.set(COLUMNS.TAX_PER_MONTH, this.taxPerMonth);
    map.set(COLUMNS.COMMON_CHARGE_PER_MONTH, this.commonChargePerMonth);
    map.set(COLUMNS.MIN_DOWN_PYMT, this.minDownPymt);
    map.set(COLUMNS.COMPASS_TYPE, this.compassType);
    map.set(COLUMNS.MLS_TYPE, this.mlsType);
    map.set(COLUMNS.EXPECTED_MONTHLY_PAYMENT, this.expectedMonthlyPayment);
    map.set(COLUMNS.EXPECTED_MONTHLY_RENT, this.expectedMonthlyRent);
    map.set(COLUMNS.INFORMATION, this.information);
    map.set(COLUMNS.AMENITIES, this.amenities);
    map.set(COLUMNS.BUILDING_INFORMATION, this.buildingInformation.toMap());
    return map;
  }
}