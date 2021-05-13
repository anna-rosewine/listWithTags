import {Item} from "./item.interface";

export interface ItemAngular extends Item {
    source?: "documentation" | "medium" | "internet"
}
