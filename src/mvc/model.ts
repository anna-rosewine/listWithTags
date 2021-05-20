import {FoldersClass} from "./storage/folderClass";
import * as uniqid from 'uniqid';
import {angularFolder, designFolder, jsFolder, nestJsFolder} from "./storage/globalStorage";
import {FoldersCategories} from "./models/folders.enum";
import {Folder} from "./models/folder.type";
import {ItemJS} from "./models/interfaces/itemJS.interface";
import {ItemNestJS} from "./models/interfaces/itemNestJS.interface";
import {ItemAngular} from "./models/interfaces/itemAngular.interface";
import {ItemDesign} from "./models/interfaces/itemDesign.interface";
import {Items} from "./models/interfaces";
import {Item} from "./models/interfaces/item.interface";

export class Model {
    private foldersArr: FoldersClass;
    private angularFolder: Folder;
    private nestJSFolder: Folder;
    private designFolder: Folder;
    private jsFolder: Folder;
    constructor(){
        console.log('model is ready');
      this.foldersArr = new FoldersClass();


      this.angularFolder = angularFolder;
      this.nestJSFolder = nestJsFolder;
      this.designFolder = designFolder;
      this.jsFolder = jsFolder;
      this.foldersArr.add(this.angularFolder);
        this.foldersArr.add(this.nestJSFolder);
        this.foldersArr.add(this.designFolder);
        this.foldersArr.add(this.jsFolder);
    }

    get folders() {
        return this.foldersArr;
    }

    // addItem(item: Omit<Partial<Items>, "id">){
    //     let neededFolder: Folder | undefined;
    //     if(item.title&&item.description&&item.tags)
    //     switch (item.folderCategory){
    //         case FoldersCategories.JS:
    //             neededFolder = this.foldersArr.getByCategory(FoldersCategories.JS);
    //
    //             let newJSItem: ItemJS = {
    //                 id: uniqid.process(),
    //                 title: item.title,
    //                 description: item.description,
    //                 tags: item.tags,
    //                 about: item.about
    //             }
    //             if(neededFolder)
    //             neededFolder.items.add(newItem);
    //     }
    // }

    addItem = (item: Omit<ItemJS, "id"> | Omit<ItemNestJS, "id"> | Omit<ItemAngular, "id"> | Omit<ItemDesign, "id">, callback: Function) => {
        switch (item.folderCategory) {
            case FoldersCategories.JS:
                if("about" in item ){
                    let newJSItem: ItemJS = {
                        id: uniqid.process(),
                        title: item.title,
                        description: item.description,
                        tags: item.tags,
                        about: item.about,
                        folderCategory: item.folderCategory
                    }
                        this.jsFolder.items.add(newJSItem);
                        callback()
                }break;
            case FoldersCategories.NESTJS:
                if("serviceName" in item){
                    console.log('me')
                    let newNestItem: ItemNestJS = {
                        id: uniqid.process(),
                        title: item.title,
                        description: item.description,
                        tags: item.tags,
                        serviceName: item.serviceName,
                        folderCategory: item.folderCategory
                    }
                    this.nestJSFolder.items.add(newNestItem)
                    callback();
                }
                break;
            case FoldersCategories.DESIGN:
                if("designType" in item){
                    console.log('needed folder 1')
                    let newDesignItem: ItemDesign = {
                        id: uniqid.process(),
                        title: item.title,
                        description: item.description,
                        tags: item.tags,
                        designType: item.designType,
                        folderCategory: item.folderCategory
                    }
                    this.designFolder.items.add(newDesignItem);
                    callback()
                }
                break;
            case FoldersCategories.ANGULAR:
                if("source" in item){
                    let newAngularItem: ItemAngular = {
                        id: uniqid.process(),
                        title: item.title,
                        description: item.description,
                        tags: item.tags,
                        folderCategory: item.folderCategory,
                        source: item.source
                    }
                    this.angularFolder.items.add(newAngularItem);
                    callback();
                }
                break;
        }
    };

    deleteItem = (folderId: string, itemId: string, callback: Function) => {
        let neededFolder = this.foldersArr.getById(folderId);
        if(neededFolder)
        neededFolder.items.deleteById(itemId)
        callback();
    }

    updateItem = (folderId: string, itemId: string, changes:  ItemJS | ItemNestJS |ItemAngular | ItemDesign, callback: Function ) => {
        let neededFolder = this.foldersArr.getById(folderId);
        if(neededFolder){
            let neededItem = neededFolder.items.getById(itemId);
            if (neededItem) {
                neededItem = {
                    ...changes
                }
                console.log(neededItem.title)
                console.log(this.foldersArr.getById(folderId)?.items.getById(itemId).title)
                callback()
            }
        }
    }
}
