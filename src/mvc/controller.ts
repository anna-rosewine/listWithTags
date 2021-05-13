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
        this.view.addItemListener(this.renderDescription)
    }

    renderItems = (id: string) => {
       let folder = this.model.folders.getById(id);
       if(folder){
           this.view.generateItemsColumn(folder.items.all())
       } else {
           throw new Error('something went wrong: cant find such id')
       }
    }

    renderDescription = (folderId: string, itemId: string) => {
        let folder = this.model.folders.getById(folderId);
        console.log('render')
        if(folder){
            let item = folder.items.getById(itemId);
            if(item){
                this.view.generateDescriptionColumn(item.description, item.tags)
                console.log(item.description)
            } else {
                throw new Error('didnt find item with such id')
            }
        } else {
            throw new Error('didnt find folder with such id')
        }
    }

}
