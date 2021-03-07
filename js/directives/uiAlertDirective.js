angular.module("listaTelefonica").directive("uiAlert", function () {
    return {
        templateUrl: "view/alert.html",
        replace: true, //sobrepõe o elemento que está "guardando lugar" lá no index
        restrict: "AE",
        scope: {
            title: "@"
        },
        transclude: true
    };
});