import { Identifier } from './identifier';
export declare class Builder {
    private stacks;
    constructor();
    scope(value: string, callback: (bd: Builder) => void): void;
    copy(): Builder;
    id(value: string): Identifier;
    static id(...value: string[]): Identifier;
}
