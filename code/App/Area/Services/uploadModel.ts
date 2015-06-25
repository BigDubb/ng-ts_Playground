
module App {
    "use strict";

    export interface IuploadModel {
        name: string;
    }
    
    export class uploadModel implements IuploadModel {
        static $inject: string[] = [];

        public name: string;

        constructor() {
            this.activate();
        }

        activate() { }
    }

    angular.module(App.applicationName).service('uploadModel', uploadModel);
}