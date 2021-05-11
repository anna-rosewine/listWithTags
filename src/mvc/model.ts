import {FolderInterface} from "./folder.interface";
import {ItemInterface} from "./intem.interface";

export class Model {
    private foldersArr: FolderInterface[];
    constructor(){
        console.log('model is ready');
        this.foldersArr = [
            {
                id: "1",
                title: "design",
                isOpen: false,
                items: [
                    {
                        id: "new1",
                        title: "Ux design",
                        isOpen: false,
                        description: "link to the string",
                        tags: ['ux', 'design']
                    },
                    {
                        id: "new2",
                        title: "Ux design2",
                        isOpen: false,
                        description: "link to the string",
                        tags: ['ux', 'design']
                    },
                    {
                        id: "new3",
                        title: "Ux design3",
                        isOpen: false,
                        description: "link to the string",
                        tags: ['ux', 'design']
                    },
                ]
            },
            {
                id: "2",
                title: "design",
                isOpen: false,
                items: [
                    {
                        id: "new21",
                        title: "Ux design11",
                        isOpen: false,
                        description: "link to the string",
                        tags: ['ux', 'design']
                    },
                    {
                        id: "new22",
                        title: "Ux design22",
                        isOpen: false,
                        description: "link to the string",
                        tags: ['ux', 'design']
                    },
                    {
                        id: "new23",
                        title: "Ux design23",
                        isOpen: false,
                        description: "link to the string",
                        tags: ['ux', 'design']
                    },
                ]
            }
        ]
    }

    get folders () {
        return this.foldersArr;
    }
}
