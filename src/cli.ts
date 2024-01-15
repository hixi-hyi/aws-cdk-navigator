import Table from 'cli-table3';
import yesno from 'yesno';
import { Context } from './context';
import spawn from 'child_process';

interface CliOptions {
  argv: string[];
  accountId: string;
  accountAlias: string;
}
class Cli {
  public readonly argv: string[];
  public readonly command: string;
  public readonly accountId: Context;
  public readonly accountAlias: Context;
  public readonly table: Table;

  public constructor(opts: CliOptions) {
    this.argv = opts.argv;
    this.command = this.argv[0] || '';
    this.accountId = new Context(opts.accountId);
    this.accountAlias = new Context(opts.accountAlias);
    this.table = new Table({ head: ['accountId', 'accountAlias'], style: { head: [], border: [] } });
    this.table.push([this.accountId.value, this.accountAlias.value]);
  }

  public printAwsAccountInfo(): void {
    console.log(jthis.table.toString());
  }

  public async confirm(): Promise<boolean> {
    const ok = await yesno({
      question: `You will need to confirm to operate on this account.
${this.table.toString()}
Please confirm account infomation before executing.
Are you sure you want to continue? ([y]es/[n]o)`,
      defaultValue: 'n',
    });
    return ok;
  }

  public exec(): void {
    spawn('cdk', this.argv, { stdio: 'inherit' });
  }
}
