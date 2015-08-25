
'use strict';

angular.module('test', [
  'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: 'home.ctrl as home'
    });

});