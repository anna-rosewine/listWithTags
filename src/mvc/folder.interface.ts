import {ItemInterface} from "./intem.interface";

export interface FolderInterface {
    id: string,
    title: string,
    isOpen: boolean,
    items: ItemInterface[];
}
