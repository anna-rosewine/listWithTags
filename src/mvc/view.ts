import {Folder} from "./models/folder.type";
import {Item} from "./models/interfaces/item.interface";
import {FoldersCategories} from "./models/folders.enum";
import {AngularSource} from "./models/angularSource.enum";
import {DesignType} from "./models/designType.enum";
import {ItemJS} from "./models/interfaces/itemJS.interface";
import {ItemNestJS} from "./models/interfaces/itemNestJS.interface";
import {ItemAngular} from "./models/interfaces/itemAngular.interface";
import {ItemDesign} from "./models/interfaces/itemDesign.interface";

export class View {
    public foldersColumn: HTMLDivElement;
    public itemsColumn: HTMLDivElement ;
    public descriptionColumn: HTMLDivElement;
    public columns: HTMLElement;
    private mainContainer: HTMLElement | null;
    private currentFolderId: string;
    private readonly formContainer: HTMLElement;
    private readonly formCategoriesDiv: HTMLDivElement;
    private readonly formCategoriesSelect: HTMLSelectElement;
    private readonly formCategoriesOptionAngular: HTMLOptionElement;
    private formCategoriesOptionNestJS: HTMLOptionElement;
    private formCategoriesOptionJS: HTMLOptionElement;
    private formCategoriesOptionDesign: HTMLOptionElement;
    private titleInput: HTMLInputElement;
    private descriotionInput: HTMLInputElement;
    private tagsInput: HTMLInputElement;
    private optioanFormPart: HTMLDivElement;
    private formBtn: HTMLButtonElement;
    private nestJSInput: HTMLInputElement;
    private JSInput: HTMLInputElement;
    private designSelect: HTMLSelectElement;
    private angularSelect: HTMLSelectElement;
    constructor(){
        console.log('view is ready');
        this.mainContainer = document.getElementById('mainContainer');

        this.columns = document.createElement('div');
        this.columns.classList.add('columns');

        this.foldersColumn = document.createElement('div');
        this.foldersColumn.classList.add('columnItem');
        this.foldersColumn.classList.add('folders')
        this.itemsColumn = document.createElement('div');
        this.itemsColumn.classList.add('columnItem');
        this.itemsColumn.classList.add('items');
        this.descriptionColumn = document.createElement('div');
        this.descriptionColumn.classList.add('columnItem');
        this.descriptionColumn.classList.add('description');

        this.formContainer = document.createElement('div');
        this.formContainer.classList.add('formContainer');

        this.formCategoriesDiv = document.createElement('div');
        this.formCategoriesSelect = document.createElement('select');
        this.formCategoriesOptionAngular =  document.createElement('option');
        this.formCategoriesOptionAngular.value = FoldersCategories.ANGULAR;
        this.formCategoriesOptionAngular.innerText = FoldersCategories.ANGULAR;

        this.formCategoriesOptionNestJS =  document.createElement('option');
        this.formCategoriesOptionNestJS.value = FoldersCategories.NESTJS;
        this.formCategoriesOptionNestJS.innerText = FoldersCategories.NESTJS;

        this.formCategoriesOptionJS =  document.createElement('option');
        this.formCategoriesOptionJS.value = FoldersCategories.JS;
        this.formCategoriesOptionJS.innerText = FoldersCategories.JS;

        this.formCategoriesOptionDesign =  document.createElement('option');
        this.formCategoriesOptionDesign.value = FoldersCategories.DESIGN;
        this.formCategoriesOptionDesign.innerText = FoldersCategories.DESIGN;

        this.optioanFormPart = document.createElement('div');
        this.optioanFormPart.classList.add('optionalFormPart');
        this.formBtn =  document.createElement('button');
        this.formBtn.innerHTML = 'Create item';
        this.formBtn.type = 'submit';

        this.nestJSInput = document.createElement("input");
        this.nestJSInput.placeholder = 'service name';
        this.JSInput = document.createElement("input");
        this.JSInput.placeholder = 'about';
        this.designSelect = document.createElement('select');
        this.angularSelect = document.createElement('select');

        this.titleInput = document.createElement('input');
        this.descriotionInput = document.createElement('input');
        this.tagsInput = document.createElement('input');

        this.mainContainer?.append(this.formContainer)
        this.mainContainer?.append(this.columns);
        this.columns.append(this.foldersColumn)
        this.columns.append(this.itemsColumn)
        this.columns.append(this.descriptionColumn)

        this.currentFolderId = ""
    }

    generateForm( ) {
        this.formContainer.innerHTML = '';
        this.formContainer.append(this.formCategoriesDiv);
        this.formCategoriesDiv.append(this.formCategoriesSelect);
        this.formCategoriesSelect.append(this.formCategoriesOptionAngular);
        this.formCategoriesSelect.append(this.formCategoriesOptionNestJS);
        this.formCategoriesSelect.append(this.formCategoriesOptionJS);
        this.formCategoriesSelect.append(this.formCategoriesOptionDesign);
        this.formContainer.append(this.titleInput);
        this.titleInput.placeholder = "title";
        this.formContainer.append(this.descriotionInput);
        this.descriotionInput.placeholder = "description"
        this.formContainer.append(this.tagsInput);
        this.formContainer.append(this.optioanFormPart)
        this.tagsInput.placeholder = "tags";
    }

    clearForm(){
        this.titleInput.value = "";
        this.descriotionInput.value = "";
        this.tagsInput.value = "";
        this.JSInput.value = "";
        this.nestJSInput.value = "";
    }

    getFormInformation(){
        let title: string = this.titleInput.value;
        let description: string = this.descriotionInput.value;
        let tags: string[] = this.tagsInput.value.split(', ');
        switch (this.formCategoriesSelect.value){
            case FoldersCategories.JS:
                let JSItem: Omit<ItemJS, "id"> = {
                    about: this.JSInput.value,
                    description: description,
                    tags: tags,
                    title: title,
                    folderCategory: FoldersCategories.JS
                }
                return JSItem;
            case FoldersCategories.NESTJS:
                let nestJSItem: Omit<ItemNestJS, "id"> = {
                    description: description,
                    tags: tags,
                    title: title,
                    serviceName: this.nestJSInput.value,
                    folderCategory: FoldersCategories.NESTJS
                }
                return nestJSItem;
            case FoldersCategories.ANGULAR:
                let angularItem: Omit<ItemAngular, "id"> = {
                    description: description,
                    tags: tags,
                    title: title,
                    source: "documentation",
                    folderCategory: FoldersCategories.ANGULAR
                }
                if(this.angularSelect.value === "documentation"){
                    return angularItem;
                } else if(this.angularSelect.value === "medium"){
                    angularItem.source = "medium";
                    return angularItem;
                } else {
                    angularItem.source = "internet";
                    return angularItem;
                }

            case FoldersCategories.DESIGN:
                if(this.designSelect.value === DesignType.UX){
                    let designItem: Omit<ItemDesign, "id"> = {
                        description: description,
                        tags: tags,
                        title: title,
                        designType: DesignType.UX,
                        folderCategory: FoldersCategories.DESIGN
                    }
                    return designItem;
                } else {
                    let designItem: Omit<ItemDesign, "id"> = {
                        description: description,
                        tags: tags,
                        title: title,
                        designType: DesignType.UI,
                        folderCategory: FoldersCategories.DESIGN
                    }
                    return designItem;
                }
        }
    }

   generateNestJSForm(){
        this.optioanFormPart.innerHTML = ""
        this.optioanFormPart.append(this.nestJSInput);
        this.optioanFormPart.append(this.formBtn)

   }

    generateAngularForm(){
        this.optioanFormPart.innerHTML = ""
        let div = document.createElement('div');

        let docOption =  document.createElement('option');
        docOption.value = AngularSource.DOCUMENTATION
        docOption.innerText = AngularSource.DOCUMENTATION

        let mediumOption =  document.createElement('option');
        mediumOption.value = AngularSource.MEDIUM
        mediumOption.innerText = AngularSource.MEDIUM

        let internetOption =  document.createElement('option');
        internetOption.value = AngularSource.INTERNET
        internetOption.innerText = AngularSource.INTERNET

        this.optioanFormPart.append(div);
        this.optioanFormPart.append(this.formBtn)
        div.append(this.angularSelect);
        this.angularSelect.append(docOption);
        this.angularSelect.append(mediumOption);
        this.angularSelect.append(internetOption);
    }

    generateDesignForm(){
        this.optioanFormPart.innerHTML = ""
        let div = document.createElement('div');
        let uxOption =  document.createElement('option');
        uxOption.value = DesignType.UX
        uxOption.innerText = DesignType.UX

        let uiOption =  document.createElement('option');
        uiOption.value = DesignType.UI
        uiOption.innerText = DesignType.UI

        this.optioanFormPart.append(div);
        this.optioanFormPart.append(this.formBtn)
        div.append(this.designSelect);
        this.designSelect.append(uiOption);
        this.designSelect.append(uxOption);
    }

    generateJSForm(){
        this.optioanFormPart.innerHTML = ""
        this.optioanFormPart.append(this.JSInput);
        this.optioanFormPart.append(this.formBtn)
    }

    generateFolder(folder: Folder): HTMLElement{
        let folderItem = document.createElement('div');
        folderItem.classList.add('folderItem');
        folderItem.setAttribute('data-id', folder.id);
        let innerTitle = document.createElement('p');
        innerTitle.classList.add('folderText')
        innerTitle.innerText = folder.title;
        folderItem.append(innerTitle);
        return folderItem;
    }

    generateItem(item: Item): HTMLElement{
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.setAttribute('data-id', item.id);
        let innerTitle = document.createElement('p');
        innerTitle.classList.add('itemText')
        innerTitle.innerText = item.title;
        newItem.append(innerTitle);
        this.descriptionColumn.innerHTML = ""
        return newItem;
    }

    generateFoldersColumn(folders: Folder[]){
        this.foldersColumn.innerHTML = "";
        folders.forEach((item) => {
            let folder = this.generateFolder(item);
            this.foldersColumn.append(folder);
        })
    }

    generateItemsColumn(items: Item[]){
        this.itemsColumn.innerHTML = "";
        items.forEach((item) => {
            let createdItem = this.generateItem(item);
            this.itemsColumn.append(createdItem);
            console.log(item.folderCategory)
        })
    }

    generateDescriptionColumn(description: string, tags: string[]){
        this.descriptionColumn.innerHTML = "";
        let descDiv = document.createElement('div');
        descDiv.classList.add('descriptionItem');
        let tagDivs: HTMLDivElement[] = [];
         tags.forEach((tagTitle) => {
            let tagDiv = document.createElement('div');
            tagDiv.classList.add('tag');
            let title = document.createElement('p');
            title.innerText = tagTitle;
            tagDiv.append(title);
            tagDivs.push(tagDiv);
        })


        let innerTitle = document.createElement('p');
        innerTitle.classList.add('descText')
        innerTitle.innerText =description;
        tagDivs.forEach((tag) => {
            descDiv.append(tag)
        })
        descDiv.append(innerTitle);
        this.descriptionColumn.append(descDiv)
        return descDiv;
    }

    addFolderListener(callback: Function){
        this.foldersColumn.addEventListener('click', (e) => {
            let target = (e.target as HTMLElement).closest('div');
            if(target)
            if(target.dataset.id){
                this.currentFolderId = target.dataset.id
                console.log(this.currentFolderId);
                callback(this.currentFolderId);
            }
        })
    }

    addBtnListener(callback: () => void){
        this.formBtn.addEventListener('click', callback)
    }

   getFormCategory(callback: Function){
        this.formCategoriesSelect.addEventListener('change', (e) => {
            callback(e);
        })
    }

    addItemListener(callback: Function) {
        this.itemsColumn.addEventListener('click', (e) => {
            let target = (e.target as HTMLElement).closest('div');
            if(target){
                console.log(target.dataset.id);
                callback(this.currentFolderId, target.dataset.id);
            }
        })
    }
}
