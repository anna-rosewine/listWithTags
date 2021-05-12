import {View} from "./view";
import {Model} from "./model";

export class Controller {
    private view: View;
    private model: Model;
    constructor(view: View, model: Model){
        this.view = view;
        this.model = model;
        this.view.generateFoldersColumn(this.model.folders.all());
        this.view.addFolderListener(this.renderItems);
    }

    renderItems = (id: string) => {
       let folder = this.model.folders.getById(id);
       if(folder){
           this.view.generateItemsColumn(folder.items.all())
       } else {
           throw new Error('something went wrong: cant find such id')
       }

    }

}
