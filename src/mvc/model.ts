import {Folder} from "./folder.type";
import {FoldersClass} from "./storage/folderClass";
import {ItemsClass} from "./storage/itemsClass";
import {angularFolder, designFolder, jsFolder, nestJsFolder} from "./storage/globalStorage";

export class Model {
    private foldersArr: FoldersClass;
    constructor(){
        console.log('model is ready');
      this.foldersArr = new FoldersClass();
      this.foldersArr.add(angularFolder);
      this.foldersArr.add(nestJsFolder);
      this.foldersArr.add(designFolder);
      this.foldersArr.add(jsFolder);
      console.log('title of item  ' + this.foldersArr.all()[0].items.all()[0].title)
    }

    get folders() {
        return this.foldersArr;
    }


}
