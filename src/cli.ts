import * as prompts from '@inquirer/prompts';
import { table } from 'table';
import { spawn } from 'child_process';

interface CliOptions {
  argv: string[];
  accountId: string;
  accountAlias: string;
}
export class Cli {
  public readonly argv: string[];
  public readonly command: string;
  public readonly accountId: string;
  public readonly accountAlias: string;
  public readonly accountInfo: string;

  public constructor(opts: CliOptions) {
    this.argv = opts.argv;
    this.command = this.argv[0] || '';
    this.accountId = opts.accountId;
    this.accountAlias = opts.accountAlias;
    this.accountInfo = table([
      ['accountId', 'accountAlias'],
      [opts.accountId, opts.accountAlias],
    ]);
  }

  public printAwsAccountInfo(): void {
    console.log(this.accountInfo);
  }

  public async promptUserOrExit(message?: string): Promise<void> {
    const ok = await prompts.confirm({
      message: message || 'Are you sure you want to continue?',
      default: false,
    });
    if (!ok) {
      process.exit(1);
    }
  }

  public exec(): void {
    spawn('cdk', this.argv, { stdio: 'inherit' });
  }
}
