import {View} from "./view";
import {Model} from "./model";

export class Controller {
    private view: View;
    private model: Model;
    constructor(view: View, model: Model){
        this.view = view;
        this.model = model;
        this.view.generateFoldersColumn(this.model.folders)
    }
}
