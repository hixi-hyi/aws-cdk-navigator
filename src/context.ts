//import * as v2 from 'constructs';
//import * as v1 from '@aws-cdk/core';

export class Context {
  private _value: string;
  public get value(): string {
    return this._value;
  }
  constructor(value: string) {
    this._value = value;
  }
  //  public static from(s: string): Context {
  //    return new Context(s);
  //  }
  //  public static fromV1(c: v1.Construct, name: string): Context {
  //    return new Context(c.node.tryGetContext(name));
  //  }
  //  public static fromV2(c: v2.Construct, name: string): Context {
  //    return new Context(c.node.tryGetContext(name));
  //  }
  public containsIn(...values: string[]): boolean {
    return values.includes(this.value);
  }
  public containsInWithWarn(...values: string[]): boolean {
    if (this.containsIn(...values)) {
      return true;
    }
    console.warn(`Reminder: Action skipped due to context: ${this.value}; executed only for ${values.join(' and ')}.`);
    return false;
  }
  public extract<T>(values: { [key: string]: T }): T {
    if (this.value in values) {
      return values[this.value];
    }
    throw new Error(`Error: could not get values. context: ${this.value}, values:${JSON.stringify(values)}`);
  }
}
