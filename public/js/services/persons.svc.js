
'use strict';

angular
  .module('test')
  .service('Persons', persons)

function persons($http) {
  var Persons = {};

  Persons.fetch = function() {
    console.log("Fetching persons list data...");
  };

  return Persons;
}