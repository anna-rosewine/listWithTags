import {Controller} from "./mvc/controller";
import {View} from "./mvc/view";
import {Model} from "./mvc/model";

const newView = new View();
const newModel = new Model()
const newController = new Controller(newView, newModel);
