
import file from "../asset/mock_data.json";
import Asset from "../model/Asset";

function Process(): void {
    let map = new Map<string, any>();
    for (var value in file) {
        map.set(value, file[value]);
    }

    let asset = Asset.fromMap(map);
    console.log(asset);
}


export default Process;