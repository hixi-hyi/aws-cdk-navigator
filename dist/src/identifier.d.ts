export declare class Identifier {
    private stack;
    private chains;
    constructor(stack: string[]);
    chain(value: string): Identifier;
    copy(): Identifier;
    get parent(): Identifier;
    get stackName(): string;
    get constructName(): string;
    private get all();
    get pascalName(): string;
    get camelName(): string;
    get snakeName(): string;
    get kebabName(): string;
    get dotName(): string;
    get slashName(): string;
}
