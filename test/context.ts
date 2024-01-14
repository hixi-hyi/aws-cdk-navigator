import { Context } from '../src/context';
/* eslint-disable jest/no-commented-out-tests */
//import * as v2 from 'aws-cdk-lib';
//import * as v1 from '@aws-cdk/core';
/* eslint-enable jest/no-commented-out-tests */

describe('Context', () => {
  it('should create a Context instance with a value', () => {
    const context = new Context('test');
    expect(context.value).toBe('test');
  });

  /* eslint-disable jest/no-commented-out-tests */
  //  it('should create a Context instance from a string', () => {
  //    const context = Context.from('test');
  //    expect(context.value).toBe('test');
  //  });
  //
  //  it('should create a Context instance from v1 Construct', () => {
  //    const app = new v1.App({ context: { v1ContextName: 'v1Context' } });
  //    const context = Context.fromV1(app, 'v1ContextName');
  //    expect(context.value).toBe('v1Context');
  //  });
  //
  //  it('should create a Context instance from v2 Construct', () => {
  //    const app = new v2.App({ context: { v2ContextName: 'v2Context' } });
  //    const context = Context.fromV2(app, 'v2ContextName');
  //    expect(context.value).toBe('v2Context');
  //  });
  /* eslint-enable jest/no-commented-out-tests */

  it('should check if a value is contained in an array', () => {
    const context = new Context('test');
    expect(context.containsIn('test', 'other')).toBe(true);
  });

  it('should check if a value is not contained in an array and print a warning', () => {
    const context = new Context('test');
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    expect(context.containsInWithWarn('other')).toBe(false);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Reminder: Action skipped due to context: test; executed only for other.');
  });

  it('should extract a value from an object', () => {
    const context = new Context('test');
    expect(context.extract({ test: 'extractedValue' })).toBe('extractedValue');
  });

  it('should throw an error when extracting a non-existent value', () => {
    const context = new Context('nonExistent');
    expect(() => context.extract({ test: 'test' })).toThrow('Error: could not get values. context: nonExistent, values:{"test":"test"}');
  });
});
