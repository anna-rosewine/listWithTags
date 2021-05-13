import {Item} from "./item.interface";

export interface ItemDesign extends Item{
    designType?: "UX" | "UI"
}
