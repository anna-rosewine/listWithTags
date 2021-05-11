import {BasicStorageInterface} from "./basicStorageInterface";

abstract class BasicStorage<T extends { id: number }>
    implements BasicStorageInterface <T> {
    private readonly items: T[];
     constructor() {
        this.items = [];
    }
    all = () => this.items;
    add = (i: T) => this.items.push(i);
    getById = (id: number): T | undefined => this.items.find((i) => i.id === id);
}
