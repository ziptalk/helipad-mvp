type SaveAssetProps = {
  userId: number;
  assetId: number;
};

export default class SaveAsset {
  saveAsset(param: SaveAssetProps) {
    const { userId, assetId } = param;
    console.log(userId, assetId);
  }
}
