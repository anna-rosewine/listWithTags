import {FoldersCategories} from "../folders.enum";

export interface Item  {
    id: string,
    title: string,
    isOpen?: boolean,
    description: string,
    tags: string[],
    folderId?: string,
    folderCategory?: FoldersCategories
}
