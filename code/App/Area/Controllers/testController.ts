
module App {
    "use strict";

    interface ItestController {
        title: string;
        name: string;
        activate: () => void;

    }

    export class testController implements ItestController {
        public title: string;
        public name: string;
        private waitModalSettings: ng.ui.bootstrap.IModalSettings;
        

        static $inject: Array<string> =
        [
            'basicService',
            'modalService',
            'sharedModel',
            'uploadModel'
        ];

        constructor(private basicService: IbasicService, private modalService: ImodalService, public sharedModel: IsharedModel, private uploadModel: IuploadModel) {
            //
            //if (modalService == undefined)
            //    console.log('modalService not defined');
            //else
            //    console.log('modalService defined');
            this.activate();
        }

        activate() {
            this.title = "This is the Title";
            name = 'Not defined yet';
            this.waitModalSettings = {
                tempalteUrl: App.uriBase + 'Shared/Views/WaitWindow.html'
            };
        }

        getData(): void {
            //var waitWindow = this.modalService.getWaitModal("Please Wait...", "Getting data");
            
            this.basicService.getData().success((data: string) => {
                if (this.name != data) {
                    this.sharedModel.assignCount++;
                    this.name = data;
                    //waitWindow.dismiss();
                }
            });
        }

        updateName(): void {
            
            //this.modalService.showModal({ templateUrl: App.uriBase + 'shared/views/modal.html' }, null, { model: this.uploadModel })
            //    .then((result: any) => {
            //    this.name = this.uploadModel.name;
            //});
        }
    }

    angular.module(App.applicationName)
        .controller('testController',
        [
            'basicService',
            'modalService',
            'sharedModel',
            'uploadModel',
            testController
        ]);
}