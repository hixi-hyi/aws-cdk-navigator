import { Strings } from './strings';
export declare class Identifier {
    private stacks;
    private constructs;
    constructor(stacks: string[]);
    copy(): Identifier;
    get parent(): Identifier;
    child(value: string): Identifier;
    scope(value: string, callback: (id: Identifier) => void): void;
    get stackName(): string;
    get constructName(): string;
    exportName(...values: string[]): string;
    private get all();
    get pascalName(): string;
    get camelName(): string;
    get snakeName(): string;
    get kebabName(): string;
    get dotName(): string;
    get slashName(): string;
    getStacks(): Strings;
    getConstructs(): Strings;
}
