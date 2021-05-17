import {View} from "./view";
import {Model} from "./model";
import {FoldersCategories} from "./models/folders.enum";
import {ItemJS} from "./models/interfaces/itemJS.interface";
import {ItemNestJS} from "./models/interfaces/itemNestJS.interface";
import {ItemAngular} from "./models/interfaces/itemAngular.interface";
import {ItemDesign} from "./models/interfaces/itemDesign.interface";

export class Controller {
    private view: View;
    private model: Model;
    constructor(view: View, model: Model){
        this.view = view;
        this.model = model;
        this.view.generateFoldersColumn(this.model.folders.all());
        this.view.addFolderListener(this.renderItems);
        this.view.addItemListener(this.renderDescription);
        this.view.generateForm()
        this.view.getFormCategory(this.generateFullForm);
        this.view.addBtnListener(this.addNewItem);
    }

    generateFolders = () => {
        console.log('added')
        this.view.generateFoldersColumn(this.model.folders.all());
        this.view.clearForm()
    }

    generateFullForm = (e: { target: any; }) => {
        console.log(e.target.value);
        if (e.target.value === FoldersCategories.ANGULAR) {
            this.view.generateAngularForm()
        }
        if (e.target.value === FoldersCategories.NESTJS) {
            this.view.generateNestJSForm()
        }
        if (e.target.value === FoldersCategories.DESIGN) {
            this.view.generateDesignForm()
        }
        if (e.target.value === FoldersCategories.JS) {
            this.view.generateJSForm()
        }
    }

    renderItems = (id: string) => {
       let folder = this.model.folders.getById(id);
       if(folder){
           this.view.generateItemsColumn(folder.items.all())
       } else {
           throw new Error('something went wrong: cant find such id')
       }
    }

    addNewItem = () => {
        console.log('add')
        let info:  Omit<ItemJS, "id"> | Omit<ItemNestJS, "id"> | Omit<ItemAngular, "id"> | Omit<ItemDesign, "id"> | undefined = this.view.getFormInformation();
        if(info) {
            this.model.addItem(info, this.generateFolders);
        }
    }

    renderDescription = (folderId: string, itemId: string) => {
        let folder = this.model.folders.getById(folderId);
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
