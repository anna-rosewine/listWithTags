import {BasicStorageInterface} from "../models/basicStorageInterface";

export abstract class BasicStorage<T extends { id: string }>
    implements BasicStorageInterface <T> {
    protected items: T[];
     constructor() {
        this.items = [];
    }
    all = () => this.items;
    add = (i: T) => this.items.push(i);
    getById = (id: string): T | undefined => this.items.find((i) => i.id === id);
}
