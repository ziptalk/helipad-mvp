export default class List {
  readonly id: number;
  readonly no: string;
  readonly name: string;
  readonly listing: string;
  readonly requestedHelipad: string;
  readonly initialContactDate: string;
  readonly acceptedDate: string;
  readonly inEscrow: boolean;

  constructor(
    id: number,
    no: string,
    name: string,
    listing: string,
    requestedHelipad: string,
    initialContactDate: string,
    acceptedDate: string,
    inEscrow: boolean
  ) {
    this.id = id;
    this.no = no;
    this.name = name;
    this.listing = listing;
    this.requestedHelipad = requestedHelipad;
    this.initialContactDate = initialContactDate;
    this.acceptedDate = acceptedDate;
    this.inEscrow = inEscrow;
  }
}
