export declare class ConsentLanguages {
    private static readonly langSet;
    has(key: string): boolean;
    parseLanguage(lang: string): string;
    forEach(callback: (key: string) => void): void;
    get size(): number;
}
