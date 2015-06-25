// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export interface IsharedModel {
        callCount: number;
        assignCount: number;
    }

    export class sharedModel implements IsharedModel {
        public callCount: number=0;
        public assignCount: number=0;

        static $inject: string[] = [];

        constructor() {
            //this.activate();
        }

        activate() {

        }
    }

    angular.module(App.applicationName).service("sharedModel", sharedModel);
}