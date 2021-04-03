angular.module("listaTelefonica").directive("uiPhone", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {

            var _formatPhone = function (phone) {
                phone = phone.replace(/[^0-9 \( \) \ ]+/g, "");
                            
                switch (phone.length) {
                    case 1:
                        phone.charAt(0) != "(" ? phone = "(" + phone : phone;
                        break;
                    case 3:
                        phone.charAt(3) != ")" ? phone = phone.substring(0,3) + ") " + phone.substring(3) : phone;
                        break;
                    case 5:
                        phone.charAt(4) != " " ? phone = phone.substring(0,4) + " " + phone.substring(4) : phone;
                        break;                    
                    default:
                        phone = phone.substring(0,14);
                }
                return phone;
            }

            element.bind("keyup", function () {
                ctrl.$setViewValue (_formatPhone(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});