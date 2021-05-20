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
    private currentItemId: string;
    private currentItem: ItemJS | ItemAngular| ItemDesign | ItemNestJS | undefined;
    constructor(view: View, model: Model){
        this.view = view;
        this.model = model;
        this.view.generateFoldersColumn(this.model.folders.all());
        this.view.addFolderListener(this.renderItems);
        this.view.addItemListener(this.renderDescription, this.deleteItem, this.editItem);
        this.view.generateForm()
        this.view.getFormCategory(this.generateFullForm);
        this.view.addBtnListener(this.checkBtn);
        this.currentItemId = "";

    }

    generateFolders = () => {
        this.view.generateFoldersColumn(this.model.folders.all());
        this.view.clearForm()
    }

    generateFullForm = (e: { target: any; }) => {
        this.view.generateOptionalForm(e.target.value);
    }

    renderItems = (id: string) => {
       let folder = this.model.folders.getById(id);
       if(folder){
           this.view.generateItemsColumn(folder.items.all())
       } else {
           throw new Error('something went wrong: cant find such id')
       }
    }

    checkBtn = () => {
        if(this.view.formBtn.dataset.action === 'add'){
            this.addNewItem();
        } else {
            this.updateItem();
        }
    }

    updateItem = ( ) => {

        let changes:  Omit<Partial<ItemJS>, "id"> | Omit<Partial<ItemNestJS>, "id"> | Omit<Partial<ItemAngular>, "id"> | Omit<Partial<ItemDesign>, "id"> | undefined = this.view.getFormInformation();
        if(this.currentItem){
            switch (this.currentItem.folderCategory){
                case  FoldersCategories.NESTJS:
                   let updatedItem: ItemNestJS = {
                        ...this.currentItem,
                        ...changes
                    }
                    this.model.updateItem(this.view.currentFolderId, this.currentItemId, updatedItem, () => {this.renderItems(this.view.currentFolderId)});
                    break;
                }
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
            console.log(itemId)
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

    deleteItem = (folderId: string, itemId: string) => {
        console.log('delete')
        this.model.deleteItem(folderId, itemId, () => {this.renderItems(folderId)})
    }

    editItem = (itemId: string) => {
        let currentFolder = this.model.folders.getById(this.view.currentFolderId);
        if(currentFolder && currentFolder.folderType){
            this.view.generateOptionalForm(currentFolder.folderType, "edit");
            this.currentItemId = itemId;
            let updatedItem = currentFolder.items.getById(itemId);
            if (updatedItem){
                this.currentItem = updatedItem
            }
            return itemId;
        }
    }

}
