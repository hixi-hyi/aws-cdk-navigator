export class Strings {
  private values: string[] = [];

  constructor(values: string[]) {
    this.values = Array.from(values);
  }

  public toPascalCase(): string {
    return this.values.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  }

  public toCamelCase(): string {
    return this.values.length > 0
      ? this.values[0].toLowerCase() +
          this.values
            .slice(1)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('')
      : '';
  }

  public toSnakeCase(): string {
    return this.values.map((word) => word.toLowerCase()).join('_');
  }

  public toKebabCase(): string {
    return this.values.map((word) => word.toLowerCase()).join('-');
  }

  public toDotCase(): string {
    return this.values.map((word) => word.toLowerCase()).join('.');
  }

  public toSlashCase(): string {
    return this.values.map((word) => word.toLowerCase()).join('/');
  }

  public copy(): Strings {
    const strings = new Strings(this.values);
    return strings;
  }

  public push(value: string): void {
    this.values.push(value);
  }

  public pop(): string | undefined {
    return this.values.pop();
  }

  public asStrings(): string[] {
    return Array.from(this.values);
  }
}
