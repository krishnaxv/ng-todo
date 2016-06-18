function Config($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
  // $urlMatcherFactoryProvider.caseInsensitive(true);
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   // `<base href="/">`
  //   requireBase: false
  // });
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'TodoController as todo',
      templateUrl: 'templates/Home.html'
    })
    .state('about', {
      url: '/about',
      template: `
        <div class="page-content about">
          <p>ToDo application <em>by krishnaxv</em></p>
        </div>
      `
    });
  $urlRouterProvider.otherwise('/');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider'];

angular
  .module('todoApp')
  .config(Config);
