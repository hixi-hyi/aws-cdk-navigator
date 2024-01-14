import { Table } from 'cli-table3';
import { yesno } from 'yesno';

interface CliOptions {
  accountId: string;
  region: string;
}

class Cli {
  public constructor(private readonly options: CliOptions) {}
  public confirm(): void {}
}
