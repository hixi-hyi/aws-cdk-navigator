import { Identifier } from './identifier';
import { Strings } from './strings';

export class Builder {
  private stacks: Strings = new Strings([]);

  constructor() {}

  public scope(value: string, callback: (bd: Builder) => void) {
    const bd = this.copy();
    bd.stacks.push(value);
    callback(bd);
  }

  public copy(): Builder {
    const bd = new Builder();
    bd.stacks = this.stacks.copy();
    return bd;
  }

  public id(value: string): Identifier {
    const bd = this.copy();
    bd.stacks.push(value);
    return new Identifier(bd.stacks.asStrings());
  }

  public static id(...value: string[]): Identifier {
    return new Identifier(value);
  }
}
