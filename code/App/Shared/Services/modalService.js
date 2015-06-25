var App;
(function (App) {
    "use strict";
    var modalService = (function () {
        function modalService($modal) {
            this.$modal = $modal;
            this.modalDefaults = {
                backdrop: true,
                keyboard: true,
                modalFade: true,
                templateUrl: App.uriBase + 'Shared/Views/modal.html'
            };
            this.modalOptions = {
                closeButtonText: 'Close',
                actionButtonText: 'OK',
                headerText: 'Proceed?',
                bodyText: 'Perform this action?'
            };
            this.activate();
        }
        modalService.prototype.activate = function () {
        };
        modalService.prototype.showModal = function (customModalDefaults, customModalOptions, customModalParams) {
            if (!customModalDefaults) {
                customModalDefaults = this.modalDefaults;
            }
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions, customModalParams).result;
        };
        modalService.prototype.getWaitModal = function (headerText, bodyText) {
            var mo = this.modalOptions;
            mo.bodyText = bodyText;
            mo.headerText = headerText;
            var md = this.modalDefaults;
            md.templateUrl = App.uriBase + 'Shared/Views/waitwindow.html';
            return this.showWaitModal(this.modalDefaults, mo);
        };
        modalService.prototype.showWaitModal = function (customModalDefaults, customModalOptions, customModalParams) {
            if (!customModalDefaults) {
                customModalDefaults = this.modalDefaults;
            }
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions, customModalParams);
        };
        modalService.prototype.show = function (customModalDefaults, customModalOptions, customModalParams) {
            var tempModalDefaults = {};
            var tempModalOptions = {};
            var tempModalParams = {};
            angular.extend(tempModalDefaults, this.modalDefaults, customModalDefaults);
            angular.extend(tempModalOptions, this.modalOptions, customModalOptions);
            if (!tempModalDefaults.controller) {
                tempModalDefaults.controller = function ($scope, $modalInstance) {
                    $scope.modalOptions = tempModalOptions;
                    $scope.modalOptions.ok = function (result) {
                        $modalInstance.close(result);
                    };
                    $scope.modalOptions.close = function (result) {
                        $modalInstance.dismiss('cancel');
                    };
                    $scope.params = customModalParams;
                };
            }
            return this.$modal.open(tempModalDefaults);
        };
        modalService.$inject = [
            '$modal'
        ];
        return modalService;
    })();
    App.modalService = modalService;
    angular.module(App.applicationName).service('modalService', [
        '$modal',
        modalService
    ]);
})(App || (App = {}));
//# sourceMappingURL=modalService.js.map