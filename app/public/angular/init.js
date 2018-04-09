var msb = angular
  .module('mean_stack_boilerplate', ['ngRoute'])
  .config(($routeProvider, $locationProvider)=> {
    $locationProvider.hashPrefix('');
    $routeProvider
  	  .when('/', {
  	    templateUrl: 'layout/home'
  	  })
      .when('/app', {
  	    templateUrl: 'layout/app'
  	  })
  	  .otherwise({ redirectTo: '/' });
  });
