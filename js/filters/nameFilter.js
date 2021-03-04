angular.module("listaTelefonica").filter("name", function () {
    return function (input) {
       var listaNomes = input.toLowerCase().split(" "); 
       
       var listaNomesFormatada = listaNomes.map(function (nome) {
           if (/(da|de|dos|das)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
       });       
       return listaNomesFormatada.join(" ");
    }
});