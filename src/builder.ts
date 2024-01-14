import { Identifier } from './identifier';

export class Builder {
  private stack: string[] = [];

  constructor() {}

  public scope(value: string, callback: (bd: Builder) => void) {
    const bd = this.copy();
    bd.stack.push(value);
    callback(bd);
  }

  public copy(): Builder {
    const bd = new Builder();
    return bd;
  }

  public id(value: string): Identifier {
    const bd = this.copy();
    bd.stack.push(value);
    return new Identifier(bd.stack);
  }

  public static id(...value: string[]): Identifier {
    return new Identifier(value);
  }
}
