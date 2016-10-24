(function(){
    "use strict";

    var module = angular.module("helloApp"); 

    module.component("helloWorld",{
        //template: "Hello from Component"
        templateUrl: "templates/hello-world-template.html"
    });

}());
