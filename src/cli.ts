import * as prompts from '@inquirer/prompts';
import { table } from 'table';
import { Context } from './context';
import { spawn } from 'child_process';

interface CliOptions {
  argv: string[];
  accountId: string;
  accountAlias: string;
}
export class Cli {
  public readonly argv: string[];
  public readonly command: string;
  public readonly accountId: Context;
  public readonly accountAlias: Context;
  public readonly accountInfo: string;

  public constructor(opts: CliOptions) {
    this.argv = opts.argv;
    this.command = this.argv[0] || '';
    this.accountId = new Context(opts.accountId);
    this.accountAlias = new Context(opts.accountAlias);
    this.accountInfo = table([
      ['accountId', 'accountAlias'],
      [opts.accountId, opts.accountAlias],
    ]);
  }

  public printAwsAccountInfo(): void {
    console.log(this.accountInfo);
  }

  public async confirm(message?: string): Promise<boolean> {
    const ok = await prompts.confirm({
      message: message || 'Are you sure you want to continue?',
      default: false,
    });
    return ok;
  }

  public exec(): void {
    spawn('cdk', this.argv, { stdio: 'inherit' });
  }
}
