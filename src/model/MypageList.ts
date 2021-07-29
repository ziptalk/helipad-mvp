export default class MypageList {
  no: number;
  name: string;
  listing: string;
  requestedHelipad: string;
  initialContactDate: string;
  acceptedDate: string;
  inEscrow: boolean;
  constructor(
    no: number,
    name: string,
    listing: string,
    requestedHelipad: string,
    initialContactDate: string,
    acceptedDate: string,
    inEscrow: boolean
  ) {
    this.no = no;
    this.name = name;
    this.listing = listing;
    this.requestedHelipad = requestedHelipad;
    this.initialContactDate = "";
    this.acceptedDate = "";
    this.inEscrow = false;
  }
}
