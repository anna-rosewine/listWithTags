export interface BasicStorageInterface<T extends { id: number }> {
    all: () => T[];
    add: (i: T) => number;
    getById: (id: number) => T | undefined;
}

