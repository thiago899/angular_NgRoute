/// <reference path="../lib/angular.js" />


var app = angular.module('blog', ['ngRoute']);

//Definir rota
app.config(function ($routeProvider) {

    $routeProvider
        .when('/', { templateUrl: '/views/home.html' })
        .when('/artigos', { templateUrl: '/views/artigos.html', controller: 'ArtigosController' })
        .when('/sobre', { templateUrl: '/views/sobre.html', controller: 'SobreController' })
        .otherwise({redirectTo: "/"})
});

app.controller('ArtigosController', function ($scope) {
    $scope.artigos = [
        "VB. net - Números perfeitos - macoratti. net",
        "VB. net - Fatoração - macoratti. net",
        "VB. net - Formatando números com ToString() - macoratti. net"
    ];

})

app.controller('SobreController', function ($scope) {
    $scope.titulo = 'Sobre';
    $scope.Nome = 'Macoratti .Net';
    $scope.sobre = 'Artigos sobre AngularJS';
});