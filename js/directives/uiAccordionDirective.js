angular.module("listaTelefonica").directive("uiAccordions", function () {
    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];

            this.registerAccordion = function (accordionScope) {
                accordions.push(accordionScope);
            };

            this.closeAll = function (currentAccordion) {
                accordions = accordions.filter(function(item) {
                    return item != currentAccordion
                })
                accordions.forEach(function (accordion) {
                    accordion.isOpen = false;
                })
            }
        }
    };
});


angular.module("listaTelefonica").directive("uiAccordion", function () {
    return {
        templateUrl: "view/accordion.html",
        restrict: "AE",
        transclude: true,
        scope: {
            title: "@",
        },
        require: "^uiAccordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.open = function (scope) {               
                ctrl.closeAll(scope);
                scope.isOpen = !scope.isOpen;
            };
        }
    };
});