import { Identifier } from '../src/identifier';
describe('Identifier', () => {
  const stack = ['service', 'common', 'datastore'];
  test('constructor should initialize stack correctly', () => {
    const id = new Identifier(stack);
    expect(id.stackName).toBe('ServiceCommonDatastore');
  });
  test('child method should add a child', () => {
    const id = new Identifier(stack).child('Api').child('Fargate');
    expect(id.pascalName).toBe('ServiceCommonDatastoreApiFargate');
    expect(id.constructName).toBe('Fargate');
  });
  test('copy method should create a new instance', () => {
    const id = new Identifier(stack);
    const copiedId = id.copy();
    expect(copiedId).not.toBe(id);
    expect(copiedId).toEqual(id);
  });
  test('parent method should remove the last child', () => {
    const id = new Identifier(stack).child('Api').child('Fargate');
    const parentId = id.parent;
    expect(parentId.constructName).toBe('Api');
  });
  test('strings method should create a correct string', () => {
    const id = new Identifier(stack).child('Api').child('Fargate');
    expect(id.pascalName).toBe('ServiceCommonDatastoreApiFargate');
    expect(id.camelName).toBe('serviceCommonDatastoreApiFargate');
    expect(id.snakeName).toBe('service_common_datastore_api_fargate');
    expect(id.kebabName).toBe('service-common-datastore-api-fargate');
    expect(id.dotName).toBe('service.common.datastore.api.fargate');
    expect(id.slashName).toBe('service/common/datastore/api/fargate');
  });
});
