import { Identifier } from './identifier';
export declare class Builder {
    private stack;
    constructor();
    scope(value: string, callback: (bd: Builder) => void): void;
    copy(): Builder;
    id(value: string): Identifier;
    static id(...value: string[]): Identifier;
}
