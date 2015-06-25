// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var sharedModel = (function () {
        function sharedModel() {
            this.callCount = 0;
            this.assignCount = 0;
            //this.activate();
        }
        sharedModel.prototype.activate = function () {
        };
        sharedModel.$inject = [];
        return sharedModel;
    })();
    App.sharedModel = sharedModel;
    angular.module(App.applicationName).service("sharedModel", sharedModel);
})(App || (App = {}));
//# sourceMappingURL=sharedModel.js.map