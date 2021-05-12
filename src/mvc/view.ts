import {Folder} from "./folder.type";
import {Item} from "./item.type";

export class View {
    public foldersColumn: HTMLDivElement;
    public itemsColumn: HTMLDivElement ;
    public descriptionColumn: HTMLDivElement;
    public columns: HTMLElement;
    private mainContainer: HTMLElement | null;
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

        this.mainContainer?.append(this.columns);
        this.columns.append(this.foldersColumn)
        this.columns.append(this.itemsColumn)
        this.columns.append(this.descriptionColumn)
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
        return newItem;
    }


    generateFoldersColumn(folders: Folder[]){
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
        })
    }

    addFolderListener(callback: Function){
        this.foldersColumn.addEventListener('click', (e) => {
            let target = (e.target as HTMLElement).closest('div');
            if(target){
                console.log(target.dataset.id);
                callback(target.dataset.id);
            }
        })
    }
}
