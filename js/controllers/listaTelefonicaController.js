angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, $http) {
    $scope.app = "Lista Telefonica";

    $scope.contatos = [];
        /*{nome: "Angélica", data: new Date(), telefone: "11 94863-0000", cor: "blue", operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        {nome: "Jéssica", data: new Date(), telefone: "11 94863-1111", cor: "red", operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
        {nome: "Erika", data: new Date(), telefone: "11 94863-2222", cor: "green", operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}},
        {nome: "Giane", data: new Date(), telefone: "11 94863-3333", cor: "yellow", operadora: {nome: "Embratel", codigo: 21, categoria: "Fixo"}}*/
    
    $scope.operadoras = [];
        /*{nome: "Oi", codigo:  14, categoria: "Celular", preco: 2},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
        {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
        {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}*/
    
    var carregarContatos = function () {
        $http.get("http://localhost:51258/api/Contatos/GetAll").then(function (coisas) {                    
            $scope.contatos = coisas.data;
            console.log($scope.contatos);
        }).catch (function (data, status){
            $scope.message = "houve um erro ao executar essa ação: " + status + " - " + data;
        });
    }

    var carregarOperadoras = function() {
        $http.get("http://localhost:51258/api/Operadoras/GetAll").then(function (dt) {
            $scope.operadoras = dt.data;
            console.log($scope.operadoras);
        }).catch (function (dt, status){
            $scope.message = "houve um erro ao executar essa ação: " + status + " - " + dt;
        });
    }            

    
    //As funções atribuídas a scope são somente as que são compartilhadas com a view

    $scope.adicionarContato = function (contato) {
         contato.data = new Date();
         contato.cor = "green";
         //$scope.contatos.push(contato);
         $http.post("http://localhost:51258/api/Contatos/AddNew", contato).then(function (data){
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