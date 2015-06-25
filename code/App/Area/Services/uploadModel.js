var App;
(function (App) {
    "use strict";
    var uploadModel = (function () {
        function uploadModel() {
            this.activate();
        }
        uploadModel.prototype.activate = function () {
        };
        uploadModel.$inject = [];
        return uploadModel;
    })();
    App.uploadModel = uploadModel;
    angular.module(App.applicationName).service('uploadModel', uploadModel);
})(App || (App = {}));
//# sourceMappingURL=uploadModel.js.map