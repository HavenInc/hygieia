
'use strict';

angular
  .module('test')
  .controller('home.ctrl', home)

function home($scope, $http, Persons) {

  var vm = this;

  $http.get('/api/persons').success(function(data) {
    vm.persons = data.persons;
  });

  vm.addPerson = function() {
    console.log("Adding a new person...");
  };

  vm.edit = function(person) {
    console.log("Editing " + person.name);
  };

  vm.remove = function(person) {
    console.log("Removing " + person.name);
  };

}