import { toPascalCase, toCamelCase, toSnakeCase, toKebabCase, toDotCase, toSlashCase } from '../src/strings';

describe('String case conversion tests', () => {
  const input = ['apple', 'banana', 'cherry'];

  test('PascalCase conversion', () => {
    expect(toPascalCase(input)).toBe('AppleBananaCherry');
  });

  test('camelCase conversion', () => {
    expect(toCamelCase(input)).toBe('appleBananaCherry');
  });

  test('snake_case conversion', () => {
    expect(toSnakeCase(input)).toBe('apple_banana_cherry');
  });

  test('kebab-case conversion', () => {
    expect(toKebabCase(input)).toBe('apple-banana-cherry');
  });

  test('dot.case conversion', () => {
    expect(toDotCase(input)).toBe('apple.banana.cherry');
  });

  test('slash/case conversion', () => {
    expect(toSlashCase(input)).toBe('apple/banana/cherry');
  });
});
