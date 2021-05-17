import {Folder} from "../models/folder.type";
import {BasicStorage} from "./basicStorage";
import {Item} from "../models/interfaces/item.interface";
import {FoldersCategories} from "../models/folders.enum";

export class FoldersClass extends BasicStorage<Folder>{
    constructor() {
        super();
    }

    getByCategory = (cat: FoldersCategories): Folder | undefined => this.items.find((i) => i.folderType === cat);
    getByTitle = (title: string) => this.items.find((i) => i.title === title)
}
