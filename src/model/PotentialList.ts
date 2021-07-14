export default class List {
  readonly id: number;
  readonly no: string;
  readonly name: string;
  readonly listing: string;
  readonly requestedContactDate: string;
  readonly initialContactDate: string;
  readonly acceptedDate: string;
  readonly inEscrow: boolean;

  constructor(
    id: number,
    no: string,
    name: string,
    listing: string,
    requestedContactDate: string,
    initialContactDate: string,
    acceptedDate: string,
    inEscrow: boolean
  ) {
    this.id = id;
    this.no = no;
    this.name = name;
    this.listing = listing;
    this.requestedContactDate = requestedContactDate;
    this.initialContactDate = initialContactDate;
    this.acceptedDate = acceptedDate;
    this.inEscrow = inEscrow;
  }
}
