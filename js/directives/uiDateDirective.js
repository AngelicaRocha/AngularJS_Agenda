angular.module("listaTelefonica").directive("uiDate", function () {
    return {
        require: "ngModel", //Herda o acesso à API de ng-model
        link: function (scope, element, attrs, ctrl) {    
            
            var _formatDate = function (date) {
                date = date.replace(/[^0-9 \/]+/g, "");
                
                switch (date.length) {
                    case 3:
                        date.charAt(2) != "/" ? date = date.substring(0,2) + "/" + date.substring(2) : date;
                        break;
                    case 6:
                        date.charAt(5) != "/" ? date = date.substring(0,5) + "/" + date.substring(5) : date;
                        break;
                    default:
                        date = date.substring(0,10);
                }
                return date;
            }

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();                
            });
            
        }
    };
});