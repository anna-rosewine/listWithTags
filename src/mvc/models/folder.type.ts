import {Item} from "./interfaces/item.interface";
import {ItemsClass} from "../storage/itemsClass";
import {FoldersCategories} from "./folders.enum";

export type Folder = {
    id: string,
    title: string,
    isOpen: boolean,
    items: ItemsClass;
    folderType: FoldersCategories
}
