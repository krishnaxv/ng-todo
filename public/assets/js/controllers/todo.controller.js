function TodoController($log, LogService) {
  LogService.log(arguments, 'TodoController');

  this.isLoading = false;
  this.newTodo = '';
  this.list = [
    {
      title: 'Wake up early tomorrow',
      isComplete: false
    },
    {
      title: 'Go to sleep',
      isComplete: true
    },
    {
      title: 'Wake up & have lunch',
      isComplete: false
    }
  ];

  this.addNewTodo = function() {
    this.list.unshift({
      title: this.newTodo,
      isComplete: false
    });
    this.newTodo = '';
  }

  this.removeTodo = function(item, index) {
    this.list.splice(index, 1);
  }

  this.getRemainingTodo = function() {
    return this.list.filter(function(item) {
      return !item.isComplete;
    })
  }
}

TodoController.$inject = ['$log', 'LogService'];

angular
  .module('todoApp')
  .controller('TodoController', TodoController);
