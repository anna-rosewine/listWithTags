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
    public currentFolderId: string;
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
    public formBtn: HTMLButtonElement;
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

    generateOptionalForm(folderType: FoldersCategories, action?: string){
        this.optioanFormPart.innerHTML = ""
        switch(folderType){
            case FoldersCategories.JS:
                this.generateJSForm();
                break;
            case FoldersCategories.NESTJS:
                this.generateNestJSForm();
                break;
            case FoldersCategories.ANGULAR:
                this.generateAngularForm();
                break;
            case FoldersCategories.DESIGN:
                this.generateDesignForm();
                break;
        }
         if(action && action === "edit"){
            this.formBtn.innerHTML = "Edit item"
             this.formBtn.setAttribute('data-action', 'edit')
        } else {
            this.formBtn.innerHTML = "Create item"
             this.formBtn.setAttribute('data-action', 'add')
        }
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
        let itemDelete = document.createElement('div');
        itemDelete.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="close">
    <path id="Path 2" d="M17.6569 17.6569L6.34316 6.34315" stroke="#000124" stroke-linecap="round"/>
    <path id="Path 2_2" d="M17.6568 6.34315L6.34314 17.6569" stroke="#000124" stroke-linecap="round"/>
        </g>
        </svg>`
        let itemEdit = document.createElement('div');
        itemEdit.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.41999 20.579C4.13948 20.5785 3.87206 20.4602 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.481L18.52 9.017L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31L15.69 4.774L17.811 2.653C17.9986 2.46522 18.2531 2.35971 18.5185 2.35971C18.7839 2.35971 19.0384 2.46522 19.226 2.653L21.347 4.774C21.5348 4.96157 21.6403 5.21609 21.6403 5.4815C21.6403 5.74691 21.5348 6.00143 21.347 6.189L19.227 8.309L19.226 8.31Z" fill="#2E3A59"/>
</svg>`
        itemEdit.setAttribute('data-edit', item.id);
        itemEdit.setAttribute('data-id', item.id);
        itemDelete.setAttribute('data-delete', item.id)
        itemDelete.setAttribute('data-id', item.id)
        innerTitle.innerText = item.title;
        newItem.append(innerTitle);
        newItem.append(itemEdit);
        newItem.append(itemDelete);
        return newItem;
    }

    generateFoldersColumn(folders: Folder[]){
        this.foldersColumn.innerHTML = "";
        this.itemsColumn.innerHTML = "";
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
                console.log(target)
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

    addItemListener(callbackDescription: Function, callbackDelete: Function, callbackEdit: Function) {
        this.itemsColumn.addEventListener('click', (e) => {
            let target = (e.target as HTMLElement).closest('div');
            if(target){
                if(target.dataset.delete && target.dataset.id){
                    callbackDelete(this.currentFolderId, target.dataset.id);
                    this.descriptionColumn.innerHTML = "";
                } else if (target.dataset.edit && target.dataset.id ){
                    console.log('enter information in form')
                    callbackEdit(target.dataset.id);
                } else {
                    callbackDescription(this.currentFolderId, target.dataset.id);
                }
            }
        })
    }
}
