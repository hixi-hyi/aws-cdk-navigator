export declare class Strings {
    private values;
    constructor(values: string[]);
    toPascalCase(): string;
    toCamelCase(): string;
    toSnakeCase(): string;
    toKebabCase(): string;
    toDotCase(): string;
    toSlashCase(): string;
    copy(): Strings;
    push(value: string): void;
    pop(): string | undefined;
    asStrings(): string[];
}
