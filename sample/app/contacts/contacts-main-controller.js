(function(){
  'use strict';

  angular.module('chartApp').controller('ContactsMainController', ContactsMainController);
  ContactsMainController.$inject = [];

  function ContactsMainController() {
      var vm = this;
      vm.initial = 'hello Contacts!';
  }

})();