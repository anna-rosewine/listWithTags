import {Item} from "./item.type";

export type Folder = {
    id: string;
    title: string;
    isOpen: boolean;
    items: Item[];
}
