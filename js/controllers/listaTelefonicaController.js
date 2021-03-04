//Controller é um componente do angular assim como filer, value, etc.

angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, contatosAPI, operadorasAPI, serialGenerator) {
    
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];   
    $scope.operadoras = [];
    
    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {                    
            $scope.contatos = response.data;
        }).catch (function (data, status){
            $scope.message = "houve um erro ao executar essa ação: " + status + " - " + response.data.message;
        });
    }

    var carregarOperadoras = function() {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        }).catch (function (response, status){
            $scope.message = "houve um erro ao executar essa ação: " + status + " - " + response.data.message;
        });
    }            

    
    //As funções atribuídas a scope são somente as que são compartilhadas com a view

    $scope.adicionarContato = function (contato) {
         contato.serial = serialGenerator.generate();
         contato.data = new Date();
         contato.cor = "green";
         contatosAPI.saveContato(contato).then(function (data){
             delete $scope.contato;
             $scope.contatoForm.$setPristine();
             carregarContatos();
         }).catch (function (data, status){
             $scope.message = "houve um erro ao executar essa ação: " + status + " - " + data;
         });                
    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) {
                return contato;
            }
        });
    };

    $scope.existeContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();

});