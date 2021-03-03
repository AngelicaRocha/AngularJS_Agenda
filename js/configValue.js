//pode ser .value ou .constant. A diferença é que o constant pode ser injetado em serviços do tipo provider

angular.module("listaTelefonica").value("config", {
    baseUrl: "http://localhost:51258/api"
})