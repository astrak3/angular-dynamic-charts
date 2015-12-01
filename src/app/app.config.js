(function () {
    'use strict';

    angular.module('dynamicCharts').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/inputs");

        $stateProvider
            .state('inputs', {
                url: "/inputs",
                templateUrl: "app/inputs/inputs-main.html"
            });

    });

})();