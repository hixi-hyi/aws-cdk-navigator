export function toPascalCase(words: string[]): string {
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

export function toCamelCase(words: string[]): string {
  return words.length > 0
    ? words[0].toLowerCase() +
        words
          .slice(1)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join('')
    : '';
}

export function toSnakeCase(words: string[]): string {
  return words.map((word) => word.toLowerCase()).join('_');
}

export function toKebabCase(words: string[]): string {
  return words.map((word) => word.toLowerCase()).join('-');
}

export function toDotCase(words: string[]): string {
  return words.map((word) => word.toLowerCase()).join('.');
}

export function toSlashCase(words: string[]): string {
  return words.map((word) => word.toLowerCase()).join('/');
}
