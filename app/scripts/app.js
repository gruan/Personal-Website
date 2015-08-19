(function() {
  'use strict';

  angular
    .module('georgeRuan', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/hello.html',
          controller: 'HelloCtrl'
        })
        .when('/main', {
          templateUrl: 'views/main.html'
        })
        .when('/404', {
          templateUrl: '404.html'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });
})();
