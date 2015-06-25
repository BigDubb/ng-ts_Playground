

((): void => {
    // Create the module and define its dependencies.
    
    var app = angular.module("app", [
    // Angular modules 
        "ngAnimate", // animations
        "ngRoute" // routing

        // Custom modules 

        // 3rd Party Modules
    ]);
})();


module App{
    export var applicationName: string = "app";
    export var uriBase: string = '/TestAngularJSWebApi/api/';
}

