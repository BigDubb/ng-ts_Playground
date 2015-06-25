// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export interface IbasicService {
        getData: () => ng.IHttpPromise<string>;
        calculateDays: (startDate: Date)=>number;
    }

    export class basicService implements IbasicService {
        static $inject: Array<string> =
        [
            '$http',
            'sharedModel'
        ];

        private data: string;
        private lastTestDate: Date;
        private lastTestResult: number;
        
        constructor(private $http: ng.IHttpService, private sharedModel: IsharedModel) {
            //if (sharedModel == undefined)
            //    console.log('sharedModel not defined');
            //else
            //    console.log('shared model defined');
        }

        getData(): ng.IHttpPromise<string>  {
            this.sharedModel.callCount++;
            return this.$http.get<string>(App.uriBase + 'SampleData');

        }

        calculateDays(startDate: Date): number {
            if (startDate != this.lastTestDate) {
                var today = new Date();
                var timeinMS = today.getTime() - startDate.getTime();
                var time = Math.round(timeinMS /(1000 * 60 * 60 * 24));
                this.lastTestResult = time;
            }

            return this.lastTestResult;
        }
    }


    angular.module(App.applicationName)
        .service('basicService',
        [
            '$http',
            'sharedModel',
            basicService
        ]);
}