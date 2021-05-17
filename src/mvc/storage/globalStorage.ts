import {ItemsClass} from "./itemsClass";
import * as uniqid from 'uniqid';
import {FoldersClass} from "./folderClass";
import {Folder} from "../models/folder.type";
import {FoldersCategories} from "../models/folders.enum";
import {ItemNestJS} from "../models/interfaces/itemNestJS.interface";
import {ItemDesign} from "../models/interfaces/itemDesign.interface";
import {ItemJS} from "../models/interfaces/itemJS.interface";
import {ItemAngular} from "../models/interfaces/itemAngular.interface";

let angularItems = new ItemsClass();
let folders= new FoldersClass();
let javaScriptItems = new ItemsClass();
let nestJSItems = new ItemsClass();
let designItems = new ItemsClass();

let nestJSItemsArr: ItemNestJS[] =[
    {
        id: uniqid.process(),
        title: 'Introduction to NestJS, Dependency Injections in Typescript',
        description: 'link to medium https://medium.com/teamzerolabs/introduction-to-nestjs-dependency-injections-in-typescript-94e1154f40c',
        isOpen: false,
        tags: ['nestJS'],
        folderCategory: FoldersCategories.NESTJS,
        serviceName: 'dependency'
    },
    {
        id: uniqid.process(),
        title: 'How to build a scalable, maintainable application with NestJs + MongoDB apply the design patterns and run in Docker(Part 1)',
        description: 'link to medium https://medium.com/@phatdev/how-to-build-a-scalable-maintainable-application-with-nestjs-mongodb-apply-the-design-patterns-2f71c060652',
        isOpen: false,
        tags:['nestJS', 'docker', 'mongoDB'],
        folderCategory: FoldersCategories.NESTJS,
        serviceName: 'MongoDB'
    },
    {
        id: uniqid.process(),
        title: 'How to build a scalable, maintainable application with NestJs + MongoDB apply the design patterns and run in Docker(Part 2)',
        description: 'link to medium https://medium.com/@phatdev/how-to-build-a-scalable-maintainable-application-with-nestjs-mongodb-apply-the-design-patterns-50112e9c99b4',
        isOpen: false,
        tags: ['nestJS', 'docker', 'mongoDB'],
        folderCategory: FoldersCategories.NESTJS,
        serviceName: 'Docker'
    },
    {
        id: uniqid.process(),
        title: 'How to build a scalable, maintainable application with NestJs + MongoDB apply the design patterns and run in Docker(Part 3)',
        description: 'link to medium https://medium.com/@phatdev/how-to-build-a-scalable-maintainable-application-with-nestjs-mongodb-apply-the-design-patterns-7b287af61354',
        isOpen: false,
        tags:['nestJS', 'docker', 'mongoDB'],
        folderCategory: FoldersCategories.NESTJS,
        serviceName: 'MongoDB'
    },
    {
        id: uniqid.process(),
        title: 'Build a real-time chat application with Websocket, Socket.IO, Redis, and Docker in NestJS.',
        description: 'link to medium https://medium.com/@phatdev/build-a-real-time-chat-application-with-websocket-socket-io-redis-and-docker-in-nestjs-499c2513c18',
        isOpen: false,
        tags: ['nestJS', 'socket', 'docker'],
        folderCategory: FoldersCategories.NESTJS,
        serviceName: 'Docker, sockets'
    },
]
let designItemsArr: ItemDesign[] = [
    {
        id: uniqid.process(),
        title: '12 popular website types you need to know as a designer',
        description: 'link to medium https://uxdesign.cc/12-popular-website-types-you-need-to-know-as-a-designer-31334f5a64c7',
        isOpen: false,
        tags: ['design', 'tools'],
        folderCategory: FoldersCategories.DESIGN,
        designType: "UI"
    },
    {
        id: uniqid.process(),
        title: 'Creating a UX design style guide for your team',
        description: 'link to medium https://uxplanet.org/creating-a-ux-design-style-guide-for-your-team-e756210865a4',
        isOpen: false,
        tags: ['design', 'ux'],
        folderCategory: FoldersCategories.DESIGN,
        designType: "UX"
    },
    {
        id: uniqid.process(),
        title: 'What can we learn about design from Netflix?',
        description: 'link to medium https://uxplanet.org/what-can-we-learn-about-design-from-netflix-502f6a384aa8',
        isOpen: false,
        tags: ['design', 'netflix'],
        folderCategory: FoldersCategories.DESIGN,
        designType: "UX"
    },
]
let jsItemsArr: ItemJS[] = [
    {
        id: uniqid.process(),
        title: 'array methods',
        description: 'link to js array methods https://developer.mozilla.org/ru/docs/We-b-/JavaScript/Reference/Global_Objects/Array',
        isOpen: false,
        tags: ['javaScript', 'array'],
        folderCategory: FoldersCategories.JS,
        about: 'array'
    },
    {
        id: uniqid.process(),
        title: '36 JavaScript Methods You Should Know',
        description: 'link to medium https://javascript.plainenglish.io/36-javascript-methods-you-should-know-e163edaa8ea5',
        isOpen: false,
        tags: ['javaScript', 'array'],
        folderCategory: FoldersCategories.JS,
        about: 'methods'
    },
    {
        id: uniqid.process(),
        title: '4 Useful JavaScript ES2020 Features that You Should Know',
        description: 'link to to medium https://javascript.plainenglish.io/4-useful-javascript-es2020-features-that-you-should-know-5d690430cf6e',
        isOpen: false,
        tags: ['javaScript', 'array'],
        folderCategory: FoldersCategories.JS,
        about: 'methods'
    },
    {
        id: uniqid.process(),
        title: '36 JavaScript Methods You Should Know',
        description: 'link to medium https://javascript.plainenglish.io/36-javascript-methods-you-should-know-e163edaa8ea5',
        isOpen: false,
        tags: ['javaScript', 'array'],
        folderCategory: FoldersCategories.JS,
        about: 'methods'
    }
]
 let angularItem1: ItemAngular = {
    id: uniqid.process(),
    title: 'ngModel',
    description: 'link to documentation https://angular.io/api/forms/NgModel',
    isOpen: false,
    tags: ['angular', 'ngModel', 'forms'],
    folderCategory: FoldersCategories.ANGULAR,
     source: "documentation"
}
 let angularItem2: ItemAngular = {
    id: uniqid.process(),
    title: 'components',
    description: 'link to documentation https://angular.io/api/core/Component',
    isOpen: false,
    tags: ['angular', 'components'],
     folderCategory: FoldersCategories.ANGULAR,
     source: "documentation"
}
 let angularItem3: ItemAngular = {
    id: uniqid.process(),
    title: 'NgRx',
    description: 'link to documentation https://ngrx.io/guide/store',
    isOpen: false,
    tags: ['angular', 'NgRx'],
     folderCategory: FoldersCategories.ANGULAR,
     source: "documentation"
}
let angularItem4: ItemAngular = {
    id: uniqid.process(),
    title: 'lazy loading',
    description: 'link to documentation',
    isOpen: false,
    tags: ['angular', 'lazy_loading'],
    folderCategory: FoldersCategories.ANGULAR,
    source: "medium"
}

angularItems.add(angularItem1);
angularItems.add(angularItem2);
angularItems.add(angularItem3);
angularItems.add(angularItem4);

jsItemsArr.forEach((item) => javaScriptItems.add(item));
nestJSItemsArr.forEach((item) => nestJSItems.add(item));
designItemsArr.forEach((item) => designItems.add(item));

export let angularFolder: Folder = {
    id: uniqid.process(),
    title: "Angular",
    isOpen:false,
    items: angularItems,
    folderType: FoldersCategories.ANGULAR
};
export let nestJsFolder: Folder = {
    id: uniqid.process(),
    title: "NestJS",
    isOpen:false,
    items: nestJSItems,
    folderType: FoldersCategories.NESTJS
};
export let designFolder: Folder = {
    id: uniqid.process(),
    title: "Design",
    isOpen:false,
    items: designItems,
    folderType: FoldersCategories.DESIGN
};
export let jsFolder: Folder = {
    id: uniqid.process(),
    title: "JavaScript",
    isOpen:false,
    items: javaScriptItems,
    folderType: FoldersCategories.JS
};

folders.add(angularFolder);





