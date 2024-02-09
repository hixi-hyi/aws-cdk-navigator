import { Strings } from '../src/strings';

describe('String case conversion tests', () => {
  const input = new Strings(['apple', 'banana', 'cherry']);

  test('PascalCase conversion', () => {
    expect(input.toPascalCase()).toBe('AppleBananaCherry');
  });

  test('camelCase conversion', () => {
    expect(input.toCamelCase()).toBe('appleBananaCherry');
  });

  test('snake_case conversion', () => {
    expect(input.toSnakeCase()).toBe('apple_banana_cherry');
  });

  test('kebab-case conversion', () => {
    expect(input.toKebabCase()).toBe('apple-banana-cherry');
  });

  test('dot.case conversion', () => {
    expect(input.toDotCase()).toBe('apple.banana.cherry');
  });

  test('slash/case conversion', () => {
    expect(input.toSlashCase()).toBe('apple/banana/cherry');
  });

  test('copy method should create a new instance', () => {
    const copied = input.copy();
    expect(copied).not.toBe(input);
    expect(copied.asStrings()).toEqual(input.asStrings());
  });
});
