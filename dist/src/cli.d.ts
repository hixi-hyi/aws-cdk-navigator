import { Context } from './context';
interface CliOptions {
    argv: string[];
    accountId: string;
    accountAlias: string;
}
export declare class Cli {
    readonly argv: string[];
    readonly command: string;
    readonly accountId: Context;
    readonly accountAlias: Context;
    readonly accountInfo: string;
    constructor(opts: CliOptions);
    printAwsAccountInfo(): void;
    confirm(): Promise<boolean>;
    exec(): void;
}
export {};
