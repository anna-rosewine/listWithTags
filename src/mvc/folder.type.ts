import {Item} from "./item.type";
import {ItemsClass} from "./storage/itemsClass";

export type Folder = {
    id: string,
    title: string,
    isOpen: boolean,
    items: ItemsClass;
}
