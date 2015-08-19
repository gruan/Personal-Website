/**
 * Created by George Ruan on August 18, 2015.
 *
 * Defines the routing behavior for the web application.
 */

(function() {
  'use strict';

  angular
    .module('georgeRuan', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/greeting.html',
          controller: 'MainCtrl'
        })
        .when('/main', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/404', {
          templateUrl: '404.html'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });
})();
