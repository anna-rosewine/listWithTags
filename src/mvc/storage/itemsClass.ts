import {BasicStorage} from "./basicStorage";
import {Item} from "../models/interfaces/item.interface";

export class ItemsClass extends BasicStorage<Item> {

    constructor() {
        super();
    }


}
