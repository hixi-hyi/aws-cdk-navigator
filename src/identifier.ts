import * as strings from './strings';

export class Identifier {
  private stack: string[] = [];
  private chains: string[] = [];

  constructor(stack: string[]) {
    this.stack = Array.from(stack);
  }

  public chain(value: string): Identifier {
    const id = this.copy();
    id.chains.push(value);
    return id;
  }

  public scope(value: string, callback: (id: Identifier) => void) {
    const id = this.copy();
    id.chains.push(value);
    callback(id);
  }

  public copy(): Identifier {
    const id = new Identifier(this.stack);
    id.chains = Array.from(this.chains);
    return id;
  }

  public get parent(): Identifier {
    const id = this.copy();
    id.chains.pop();
    return id;
  }

  public get stackName(): string {
    return strings.toPascalCase(this.stack);
  }

  public get constructName(): string {
    return this.chains[this.chains.length - 1];
  }

  private get all(): string[] {
    return [...this.stack, ...this.chains];
  }

  public get pascalName(): string {
    return strings.toPascalCase(this.all);
  }

  public get camelName(): string {
    return strings.toCamelCase(this.all);
  }

  public get snakeName(): string {
    return strings.toSnakeCase(this.all);
  }

  public get kebabName(): string {
    return strings.toKebabCase(this.all);
  }

  public get dotName(): string {
    return strings.toDotCase(this.all);
  }

  public get slashName(): string {
    return strings.toSlashCase(this.all);
  }
}
