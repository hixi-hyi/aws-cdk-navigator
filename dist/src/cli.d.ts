interface CliOptions {
    argv: string[];
    accountId: string;
    accountAlias: string;
}
export declare class Cli {
    readonly argv: string[];
    readonly command: string;
    readonly accountId: string;
    readonly accountAlias: string;
    readonly accountInfo: string;
    constructor(opts: CliOptions);
    printAwsAccountInfo(): void;
    promptUserOrExit(message?: string): Promise<void>;
    exec(): void;
}
export {};
