import files from '../asset/mock_data.json';
import Asset from '../model/Asset';

//////////? key값이 "buildingInformation" 인 경우 해당 객체안에 값을 다시 Map에 저장하는 메소드

function newProcess(buildingInformation: any): Map<string, any> {
  let map = new Map<string, any>();
  for (let value in buildingInformation) {
    map.set(value, buildingInformation[value]);
  }
  return map;
}

export function Process(): void {
  let map = new Map<string, any>();
  let asset: Asset;
  let assetList: Asset[] = [];
  for (let file of files) {
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
  }
  //! console.log(assetList);
}

// 내림차순 정렬
export function descendingProcess(param: any[] = files): void {
  let map = new Map<string, any>();
  let asset: Asset;
  let assetList: Asset[] = [];

  for (let file of param) {
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
  //! console.log(assetList);
}

// 오름차순 정렬
export function ascendingProcess(param: any[] = files): void {
  let map = new Map<string, any>();
  let asset: Asset;
  let assetList: Asset[] = [];

  for (let file of param) {
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
  //! console.log(assetList);
}

////////////? 투자 목적이면 true, 거주 목적이면 false

// 투자 목적 리스트 가져오는 함수
export function toInvestmentList(): any {
  let investmentList = files.filter((file) => file.investment);

  //! console.log(investmentList);
  //! return investmentList;
}

// 거주 목적 리스트 가져오는 함수
export function toLiveList(): void {
  let liveList = files.filter((file) => !file.investment);

  //! console.log(liveList);
}
