//Provider - Somente os serviços do tipo provider podem ser configurados 
//O serviço que será injetado de fato será a function dentro de this.$get, como se fosse um factory dentro de this.get

angular.module("listaTelefonica").provider("serialGenerator", function () {
    var _lenght = 0;

    this.getLength = function () {
        return _lenght
    };

    this.setLength = function (length) {
        _lenght = length;
    }

    this.$get = function () {
        return {
            generate: function () {
                var serial = "";
                while (serial.length < _lenght) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});