// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var sampleController = (function () {
        function sampleController(basicService) {
            this.basicService = basicService;
            this.daysAlive = 0;
            this.activate();
        }
        sampleController.prototype.activate = function () {
        };
        sampleController.prototype.calculate = function () {
            if (this.birthDate == undefined)
                return;
            else {
                this.daysAlive = this.basicService.calculateDays(this.birthDate);
            }
        };
        sampleController.prototype.getData = function () {
            this.basicService.getData();
        };
        sampleController.$inject = ["basicService"];
        return sampleController;
    })();
    angular.module(App.applicationName).controller("sampleController", ['basicService', sampleController]);
})(App || (App = {}));
//# sourceMappingURL=sampleController.js.map