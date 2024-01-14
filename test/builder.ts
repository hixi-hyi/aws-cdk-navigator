import { Builder } from '../src/builder';
import { Identifier } from '../src/identifier';

describe('Builder', () => {
  let builder: Builder;

  beforeEach(() => {
    builder = new Builder();
  });

  test('scope method should add value to stack and execute callback', () => {
    const callbackMock = jest.fn((id: Builder) => {
      expect(id).toBeInstanceOf(Builder);
      expect(id['stack']).toContain('testScope');
    });

    builder.scope('testScope', callbackMock);

    expect(callbackMock).toHaveBeenCalled();
  });

  test('id method should return an Identifier with correct stack', () => {
    const identifier = builder.id('testId');

    expect(identifier).toBeInstanceOf(Identifier);
    expect(identifier['stack']).toEqual(['testId']);
  });

  test('copy method should create a new instance with the same stack', () => {
    builder.scope('testScope', () => {});

    const copiedStackBuilder = builder.copy();

    expect(copiedStackBuilder).toBeInstanceOf(Builder);
    expect(copiedStackBuilder['stack']).toEqual(builder['stack']);
  });

  test('static id method should create an Identifier with correct stack', () => {
    const identifier = Builder.id('part1', 'part2', 'part3');

    expect(identifier).toBeInstanceOf(Identifier);
    expect(identifier['stack']).toEqual(['part1', 'part2', 'part3']);
  });
});
