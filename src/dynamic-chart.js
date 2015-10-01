(function(){
    'use strict';

    angular.module('chartApp').directive('dynamicChart', dynamicChart);
    dynamicChart.$inject = [];

    function dynamicChart() {
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
            return '<template-chart><div></div></template-chart>';
        }
    }

})();
