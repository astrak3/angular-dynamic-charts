(function(){
    'use strict';

    angular.module('chartApp').directive('templateChart', templateChart);
    templateChart.$inject = [];

    function templateChart() {
        var directive = {
            restrict: 'EA',
            link: link,
            template: buildTemplate
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }

        function buildTemplate() {
            return '<div></div>';
        }
    }

})();