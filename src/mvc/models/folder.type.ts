import {Item} from "./interfaces/item.interface";
import {ItemsClass} from "../storage/itemsClass";

export type Folder = {
    id: string,
    title: string,
    isOpen: boolean,
    items: ItemsClass;
}
