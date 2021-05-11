import {ItemInterface} from "./item.interface";

export interface FolderInterface {
    id: string,
    title: string,
    isOpen: boolean,
    items: ItemInterface[];
}
