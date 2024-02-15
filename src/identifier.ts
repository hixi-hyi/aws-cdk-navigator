import { Strings } from './strings';

export class Identifier {
  private stacks: Strings;
  private constructs: Strings;

  constructor(stacks: string[]) {
    this.stacks = new Strings(stacks);
    this.constructs = new Strings([]);
  }

  public copy(): Identifier {
    const id = new Identifier(this.stacks.asStrings());
    id.constructs = this.constructs.copy();
    return id;
  }

  public get parent(): Identifier {
    const id = this.copy();
    id.constructs.pop();
    return id;
  }

  public child(value: string): Identifier {
    const id = this.copy();
    id.constructs.push(value);
    return id;
  }

  public scope(value: string, callback: (id: Identifier) => void) {
    callback(this.child(value));
  }

  public get stackName(): string {
    return this.stacks.toPascalCase();
  }

  public get constructName(): string {
    const constructs = this.constructs.asStrings();
    return constructs[constructs.length - 1];
  }

  public exportName(...values: string[]): string {
    const value = new Strings(values);
    return `${this.stacks.toPascalCase()}:${this.constructs.toPascalCase()}:${value.toPascalCase()}`;
  }

  private get all(): Strings {
    return new Strings([...this.stacks.asStrings(), ...this.constructs.asStrings()]);
  }

  public get pascalName(): string {
    return this.all.toPascalCase();
  }

  public get camelName(): string {
    return this.all.toCamelCase();
  }

  public get snakeName(): string {
    return this.all.toSnakeCase();
  }

  public get kebabName(): string {
    return this.all.toKebabCase();
  }

  public get dotName(): string {
    return this.all.toDotCase();
  }

  public get slashName(): string {
    return this.all.toSlashCase();
  }

  public getStacks(): Strings {
    return this.stacks.copy();
  }

  public getConstructs(): Strings {
    return this.constructs.copy();
  }
}
