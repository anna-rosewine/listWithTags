import {FolderInterface} from "./folder.interface";
import {ItemInterface} from "./intem.interface";

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

    generateFolder(folder: FolderInterface): HTMLElement{
        let folderItem = document.createElement('div');
        folderItem.classList.add('folderItem');
        folderItem.setAttribute('data-id', folder.id);
        let innerTitle = document.createElement('p');
        innerTitle.classList.add('folderText')
        innerTitle.innerText = folder.title;
        folderItem.append(innerTitle)
        return folderItem;
    }



    generateFoldersColumn(folders: FolderInterface[]){
        folders.forEach((item) => {
            let folder = this.generateFolder(item);
            this.foldersColumn.append(folder);
        })
    }

    generateItemsColumn(items: ItemInterface[]){

    }


}
