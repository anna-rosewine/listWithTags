import {Folder} from "../models/folder.type";
import {BasicStorage} from "./basicStorage";
import {Item} from "../models/interfaces/item.interface";

export class FoldersClass extends BasicStorage<Folder>{
    constructor() {
        super();
    }

}
