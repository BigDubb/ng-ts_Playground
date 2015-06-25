

interface controllerFunc {
    ($scope: IModalServiceScope, $modal: ng.ui.bootstrap.IModalScope): any;
}

interface modalResponseFunc {
    (result?: any): any;
}

interface IModalServiceScope extends ng.IScope {
    modalOptions: IModalOptions;
    params: any;
}

interface IModalOptions {
    closeButtonText?: string;
    actionButtonText?: string;
    headerText?: string;
    bodyText?: string;
    ok?: modalResponseFunc;
    close?: modalResponseFunc;
}

interface ImodalService {
    showModal(customModalDefaults: ng.ui.bootstrap.IModalSettings, customModalOptions: IModalOptions, customModalParams?: any): ng.IPromise<any>;
    getWaitModal(headerText: string, bodyText: string): ng.ui.bootstrap.IModalServiceInstance;
    showWaitModal(customModalDefaults: ng.ui.bootstrap.IModalSettings, customModalOptions: IModalOptions, customModalParams?: any): ng.ui.bootstrap.IModalServiceInstance;

}

module App {
    "use strict";

    export class modalService implements ImodalService {
        static $inject =
        [
            '$modal'
        ];
        
        private modalDefaults: ng.ui.bootstrap.IModalSettings = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: App.uriBase + 'Shared/Views/modal.html'

        };
        private modalOptions: IModalOptions = {
            closeButtonText: 'Close',
            actionButtonText: 'OK',
            headerText: 'Proceed?',
            bodyText: 'Perform this action?'
        };

        constructor(private $modal: ng.ui.bootstrap.IModalService) {
            this.activate();
        }
        activate() { }

        showModal(customModalDefaults: ng.ui.bootstrap.IModalSettings, customModalOptions: IModalOptions, customModalParams?: any): ng.IPromise<any> {
            if (!customModalDefaults) {
                customModalDefaults = this.modalDefaults;
            }
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions, customModalParams).result;
        }

        getWaitModal(headerText: string, bodyText: string): ng.ui.bootstrap.IModalServiceInstance {
            var mo = this.modalOptions;
            mo.bodyText = bodyText;
            mo.headerText = headerText;
            var md = this.modalDefaults;
            md.templateUrl = App.uriBase +'Shared/Views/waitwindow.html'
            return this.showWaitModal(this.modalDefaults, mo);
        }

        showWaitModal(customModalDefaults: ng.ui.bootstrap.IModalSettings, customModalOptions: IModalOptions, customModalParams?: any): ng.ui.bootstrap.IModalServiceInstance {
            if (!customModalDefaults) {
                customModalDefaults = this.modalDefaults;
            }
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions, customModalParams);
        }

        private show(customModalDefaults: ng.ui.bootstrap.IModalSettings, customModalOptions: IModalOptions, customModalParams?: any): ng.ui.bootstrap.IModalServiceInstance {
            var tempModalDefaults: ng.ui.bootstrap.IModalSettings = {};
            var tempModalOptions: IModalOptions = {};
            var tempModalParams: any = {};

            angular.extend(tempModalDefaults, this.modalDefaults, customModalDefaults);

            angular.extend(tempModalOptions, this.modalOptions, customModalOptions);

            if (!tempModalDefaults.controller) {
                tempModalDefaults.controller = function ($scope: IModalServiceScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {
                    $scope.modalOptions = tempModalOptions;
                    $scope.modalOptions.ok = function (result?: any) {
                        $modalInstance.close(result);
                    };
                    $scope.modalOptions.close = function (result?: any) {
                        $modalInstance.dismiss('cancel');
                    };

                    $scope.params = customModalParams;

                };
            }

            return this.$modal.open(tempModalDefaults);


        }
    }

    angular.module(App.applicationName)
        .service('modalService',
        [
            '$modal',
            modalService
        ]);
}
  