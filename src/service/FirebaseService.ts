import Asset from "../model/Asset";
import {store} from "../shared/Firebase";

export default class FirebaseService {
    async getAssetList() {
        return (await store.get()).docs;
    }

    // async saveAssetList(list: Asset[]) {
    //     list.forEach((asset) => {
    //         store.add({
    //             "forInvestment": asset.forInvestment,
    //             "price": asset.price,
    //             "status": asset.status,
    //             "daysOnMarket": asset.daysOnMarket,
    //             "taxPerMonth": asset.taxPerMonth,
    //             "commonChargePerMonth": asset.commonChargePerMonth,
    //             "minDownPymt": asset.minDownPymt,
    //             "compassType": asset.compassType,
    //             "mlsType": asset.mlsType,
    //             "expectedMonthlyPayment": asset.expectedMonthlyPayment,
    //             "expectedMonthlyRent": asset.expectedMonthlyRent,
    //             "information": asset.information,
    //             "amenities": asset.amenities,
    //             "buildingInformation": {
    //                 "thumbnail": asset.buildingInformation.thumbnailUrl,
    //                 "address": asset.buildingInformation.address,
    //                 "street": asset.buildingInformation.street,
    //                 "nBedrooms": asset.buildingInformation.nBedrooms,
    //                 "nBathrooms": asset.buildingInformation.nBathrooms,
    //                 "nRooms": asset.buildingInformation.nRooms,
    //                 "square": asset.buildingInformation.square,
    //                 "country": asset.buildingInformation.country,
    //                 "buildingName": asset.buildingInformation.buildingName,
    //                 "floor": asset.buildingInformation.floor,
    //                 "stories": asset.buildingInformation.stories,
    //                 "residences": asset.buildingInformation.residences,
    //                 "petPolicy": asset.buildingInformation.petPolicy,
    //                 "yearBuilt": asset.buildingInformation.yearBuilt,
    //                 "buildingAge": asset.buildingInformation.buildingAge,
    //                 "buildingType": asset.buildingInformation.buildingType
    //             }
    //         }).then(value => {
    //             console.log("add complete! ", value);
    //         });
    //     });
    // }
}