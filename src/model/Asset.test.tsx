import Asset from './Asset';
import { equal, strictEqual } from 'assert';

describe('test asset from map', () => {
  it('test with valid map', () => {
    let testMap = new Map<string, any>();
    testMap.set('name', 'test_name');
    testMap.set('address', 'test_address');
    testMap.set('thumbnailUrl', 'test_thumbnailUrl');
    testMap.set('price', '1000');
    testMap.set('nBedrooms', 3);
    testMap.set('nBathrooms', 5);
    testMap.set('square', 10);

    let asset = Asset.fromMap(testMap);

    strictEqual(asset.name, 'test_name', 'name is wrong');
    strictEqual(asset.address, 'test_address', 'address is wrong');
    strictEqual(
      asset.thumbnailUrl,
      'test_thumbnailUrl',
      'thumbnail url is wrong'
    );
    strictEqual(asset.price, '1000', 'price is wrong');
    strictEqual(asset.nBedrooms, 3, 'nBedrooms is wrong');
    strictEqual(asset.nBathrooms, 5, 'nBathrooms is wrong');
    strictEqual(asset.square, 10, 'square is wrong');
  });

  it('test with invalid map', () => {
    let testMap = new Map<string, any>();
    testMap.set('name', 'test_name');
    testMap.set('address', 'test_address');
    testMap.set('thumbnailUrl', 'test_thumbnailUrl');
    testMap.set('price', 1000);
    testMap.set('nBedrooms', '3X');
    testMap.set('nBathrooms', 5);
    testMap.set('square', 10);

    let asset = Asset.fromMap(testMap);

    strictEqual(asset.price, 1000, 'price is wrong');
  });
});
