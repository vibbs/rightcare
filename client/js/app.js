angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('rightcare', {
        url: '',
        templateUrl: 'views/rightcare.html',
        controller: 'rightCareController'
      });

    $urlRouterProvider.otherwise('rightcare');
  }]);