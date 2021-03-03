//Factory Function - Função usada para montar (ou "fabricar") um objeto sem ter que montá-lo manualmente
//Quando registramos um serviço com factory, o angular invoca a função injetando o $http

angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    var _getContatos = function () {
        return $http.get(config.baseUrl + "/Contatos/GetAll");
    };

    var _saveContato = function (contato) {
        arrayContato = []
        arrayContato.push(contato)
        return $http.post(config.baseUrl + "/Contatos/AddNew", arrayContato);
    }

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };
});


