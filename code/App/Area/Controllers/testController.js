var App;
(function (App) {
    "use strict";
    var testController = (function () {
        function testController(basicService, modalService, sharedModel, uploadModel) {
            this.basicService = basicService;
            this.modalService = modalService;
            this.sharedModel = sharedModel;
            this.uploadModel = uploadModel;
            //
            //if (modalService == undefined)
            //    console.log('modalService not defined');
            //else
            //    console.log('modalService defined');
            this.activate();
        }
        testController.prototype.activate = function () {
            this.title = "This is the Title";
            name = 'Not defined yet';
            this.waitModalSettings = {
                tempalteUrl: App.uriBase + 'Shared/Views/WaitWindow.html'
            };
        };
        testController.prototype.getData = function () {
            //var waitWindow = this.modalService.getWaitModal("Please Wait...", "Getting data");
            var _this = this;
            this.basicService.getData().success(function (data) {
                if (_this.name != data) {
                    _this.sharedModel.assignCount++;
                    _this.name = data;
                }
            });
        };
        testController.prototype.updateName = function () {
            //this.modalService.showModal({ templateUrl: App.uriBase + 'shared/views/modal.html' }, null, { model: this.uploadModel })
            //    .then((result: any) => {
            //    this.name = this.uploadModel.name;
            //});
        };
        testController.$inject = [
            'basicService',
            'modalService',
            'sharedModel',
            'uploadModel'
        ];
        return testController;
    })();
    App.testController = testController;
    angular.module(App.applicationName).controller('testController', [
        'basicService',
        'modalService',
        'sharedModel',
        'uploadModel',
        testController
    ]);
})(App || (App = {}));
//# sourceMappingURL=testController.js.map