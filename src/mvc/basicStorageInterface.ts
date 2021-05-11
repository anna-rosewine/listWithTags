export interface BasicStorageInterface <T extends {id: string}> {
    all: () => T[];
    add: (i: T) => number;
    getById: (id: number) => T | undefined;
}
