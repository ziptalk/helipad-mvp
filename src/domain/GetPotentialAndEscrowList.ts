import List from "../model/PotentialList";
import thumbnail from "../images/Potential/potentialThumbnail.jpg";

export default class GetPotentialAndEscrowList {
  static getFavoriteList(): List[] {
    return favoriteList;
  }
  static getEscrowList(): List[] {
    return escrowList;
  }
  static setPotentialList(newPotentialList: List[]) {
    favoriteList = newPotentialList;
    return favoriteList;
  }
  static setEscrowList(newEscrowList: List[]) {
    escrowList = newEscrowList;
    return escrowList;
  }
}
let favoriteList: List[] = [
  new List(
    0,
    "000",
    "Brian S Kim",
    `${thumbnail}`,
    getToday(),
    getToday(),
    getToday(),
    false
  ),
  new List(
    1,
    "001",
    "Brian S Kim",
    `${thumbnail}`,
    getToday(),
    getToday(),
    getToday(),
    false
  ),
  new List(
    2,
    "002",
    "Brian S Kim",
    `${thumbnail}`,
    getToday(),
    getToday(),
    getToday(),
    false
  ),
  new List(
    3,
    "003",
    "Brian S Kim",
    `${thumbnail}`,
    getToday(),
    getToday(),
    getToday(),
    false
  ),
  new List(
    4,
    "004",
    "Brian S Kim",
    `${thumbnail}`,
    getToday(),
    getToday(),
    getToday(),
    false
  ),
  new List(
    5,
    "005",
    "Brian S Kim",
    `${thumbnail}`,
    getToday(),
    getToday(),
    getToday(),
    false
  ),
  new List(
    6,
    "006",
    "Brian S Kim",
    `${thumbnail}`,
    getToday(),
    getToday(),
    getToday(),
    false
  ),
  new List(
    7,
    "007",
    "Brian S Kim",
    `${thumbnail}`,
    getToday(),
    getToday(),
    getToday(),
    false
  ),
];

let escrowList: List[] = [];

function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return `${year}.${month}.${day}`;
}
