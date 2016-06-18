function isCompleteFilter() {
  return function(isCompleteStatus) {
    return isCompleteStatus ? 'Done' : 'Pending';
  }
}

angular
  .module('todoApp')
  .filter('isCompleteFilter', isCompleteFilter);
