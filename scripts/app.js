(function() {
  'use strict';

  angular
    .module('georgeRuan', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../index.html',
          controller: 'IndexCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
