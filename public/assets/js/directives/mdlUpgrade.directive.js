function mdlUpgradeDirective($log, $timeout) {
  return {
    restrict: 'A',
    compile: function() {
      return {
        post: function postLink($scope, $element) {
          $timeout(function() {
            componentHandler.upgradeElements($element[0]);
          });
        }
      }
    }
  }
}

mdlUpgradeDirective.$inject = ['$log', '$timeout'];

angular
  .module('todoApp')
  .directive('mdlUpgrade', mdlUpgradeDirective);
