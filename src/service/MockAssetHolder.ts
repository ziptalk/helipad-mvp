import { Process } from './MockAssetReader';
import Asset from '../model/Asset';
export const assetList = Process();

// 내림차순 정렬
export function descendingProcess(): Asset[] {
  let map = new Map<string, any>();
  let asset: Asset;
  let assetList: Asset[] = [];

  for (let file of assetList) {
    // 배열 순회
    for (let [key, value] of Object.entries(file)) {
      // 객체 순회
      if (key === 'buildingInformation') {
        let buildingInfoMap = newProcess(file[key]);
        map.set(key, buildingInfoMap);
      } else {
        map.set(key, value);
      }
    }

    assetList.push(Asset.fromMap(map));
    assetList.sort((a, b) => b.price - a.price);
  }
  return assetList;
  //! console.log(assetList);
}
function newProcess(buildingInformation: any): Map<string, any> {
  let map = new Map<string, any>();
  for (let value in buildingInformation) {
    map.set(value, buildingInformation[value]);
  }
  return map;
}

// 오름차순 정렬
export function ascendingProcess(): Asset[] {
  let map = new Map<string, any>();
  let asset: Asset;
  let assetList: Asset[] = [];

  for (let file of assetList) {
    // 배열 순회
    for (let [key, value] of Object.entries(file)) {
      // 객체 순회
      if (key === 'buildingInformation') {
        let buildingInfoMap = newProcess(file[key]);
        map.set(key, buildingInfoMap);
      } else {
        map.set(key, value);
      }
    }

    assetList.push(Asset.fromMap(map));
    assetList.sort((a, b) => a.price - b.price);
  }
  return assetList;
  //! console.log(assetList);
}

////////////? 투자 목적이면 true, 거주 목적이면 false

// 투자 목적 리스트 가져오는 함수
export function toInvestmentList(): Asset[] {
  let map = new Map<string, any>();
  let asset: Asset;
  let assetList: Asset[] = [];
  let investmentList = assetList.filter((file) => file.investment);

  for (let file of investmentList) {
    // 배열 순회
    for (let [key, value] of Object.entries(file)) {
      // 객체 순회
      if (key === 'buildingInformation') {
        let buildingInfoMap = newProcess(file[key]);
        map.set(key, buildingInfoMap);
      } else {
        map.set(key, value);
      }
    }

    assetList.push(Asset.fromMap(map));
    assetList.sort((a, b) => a.price - b.price);
  }
  //! console.log(investmentList);
  return assetList;
}

// 거주 목적 리스트 가져오는 함수
export function toLiveList(): Asset[] {
  let map = new Map<string, any>();
  let asset: Asset;
  let assetList: Asset[] = [];
  let liveList = assetList.filter((file) => !file.investment);

  for (let file of liveList) {
    // 배열 순회
    for (let [key, value] of Object.entries(file)) {
      // 객체 순회
      if (key === 'buildingInformation') {
        let buildingInfoMap = newProcess(file[key]);
        map.set(key, buildingInfoMap);
      } else {
        map.set(key, value);
      }
    }

    assetList.push(Asset.fromMap(map));
    assetList.sort((a, b) => a.price - b.price);
  }
  return assetList;
  //! console.log(liveList);
}
