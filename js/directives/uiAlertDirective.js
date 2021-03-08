angular.module("listaTelefonica").directive("uiAlert", function () {
    return {
        templateUrl: "view/alert.html",
        replace: true, //sobrepõe o elemento (<div>) que está "guardando lugar" lá no index
        restrict: "AE",
        scope: {
            title: "@" // sinal '@' vincula o valor do atributo (atributo "title" do elemento "ui-alert") a uma propriedade do scope da diretiva (propriedade "title" da diretiva "uiAlert")
            // sinal '=' cria o "two-way" data-binding e deve usado quando o escopo da controller e o da diretiva não são os mesmos (vincula a propriedade do escopo da diretiva à propriedade do escopo da controller)
        },
        transclude: true //Não é interessante que a diretiva interaja diretamente com o scopo da controller pois assim ela perderia o seu potencial de reuso
        //Essa é uma forma de passar o corpo da mensagem dentro do elemento "ui-alert" sem que ele 
        //seja sobrescrito. Como o transclude permite a uitlização de propriedades de scopes fora 
        //do scope atual, não é necessário mapear o atributo "message" como two-way data-binding.
    };
});