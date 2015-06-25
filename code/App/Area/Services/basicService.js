// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var basicService = (function () {
        function basicService($http, sharedModel) {
            this.$http = $http;
            this.sharedModel = sharedModel;
            //if (sharedModel == undefined)
            //    console.log('sharedModel not defined');
            //else
            //    console.log('shared model defined');
        }
        basicService.prototype.getData = function () {
            this.sharedModel.callCount++;
            return this.$http.get(App.uriBase + 'SampleData');
        };
        basicService.prototype.calculateDays = function (startDate) {
            if (startDate != this.lastTestDate) {
                var today = new Date();
                var timeinMS = today.getTime() - startDate.getTime();
                var time = Math.round(timeinMS / (1000 * 60 * 60 * 24));
                this.lastTestResult = time;
            }
            return this.lastTestResult;
        };
        basicService.$inject = [
            '$http',
            'sharedModel'
        ];
        return basicService;
    })();
    App.basicService = basicService;
    angular.module(App.applicationName).service('basicService', [
        '$http',
        'sharedModel',
        basicService
    ]);
})(App || (App = {}));
//# sourceMappingURL=basicService.js.map