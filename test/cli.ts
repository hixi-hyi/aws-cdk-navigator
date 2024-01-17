import { Cli } from '../src/cli';

describe('Cli', () => {
  test('constructor should initialize correctly', () => {
    const cli = new Cli({
      argv: ['test', 'test2'],
      accountId: 'testAccountId',
      accountAlias: 'testAccountAlias',
    });

    expect(cli.argv).toEqual(['test', 'test2']);
    expect(cli.command).toBe('test');
    expect(cli.accountId).toBe('testAccountId');
    expect(cli.accountAlias).toBe('testAccountAlias');
  });
});
