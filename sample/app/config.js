(function(){
  'use strict';

  angular.module('chartApp').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/contacts");

  $stateProvider
    .state('contacts', {
      url: "/contacts",
      templateUrl: "app/contacts/contacts-main.html"
    });

});

})();
