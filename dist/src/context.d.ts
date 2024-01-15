export declare class Context {
    private _value;
    get value(): string;
    constructor(value: string);
    containsIn(...values: string[]): boolean;
    containsInWithWarn(...values: string[]): boolean;
    extract<T>(values: {
        [key: string]: T;
    }): T;
}
