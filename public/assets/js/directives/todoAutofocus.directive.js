function todoAutofocus($log, $timeout) {
  return {
    restrict: 'A',
    scope: false,
    link: function($scope, $element, $attrs) {
      $scope.$watch($attrs.todoAutofocus, function(newValue, oldValue) {
        if (!newValue) {
          return;
        }
        $timeout(function() {
          $element[0].focus();
        }, 0);
      });
    }
  }
}

todoAutofocus.$inject = ['$log', '$timeout'];

angular
  .module('todoApp')
  .directive('todoAutofocus', todoAutofocus);
