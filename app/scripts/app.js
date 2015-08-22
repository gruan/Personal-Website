/**
 * Created by George Ruan on August 18, 2015.
 *
 * Defines the routing behavior for the web application.
 */

(function() {
  'use strict';

  angular
    .module('georgeRuan', ['ngRoute', 'ngAnimate'])    // Set up app dependencies
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/greeting.html',
          controller: 'GreetingCtrl'
        })
        .when('/home', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/404', {
          templateUrl: '404.html'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });
})();
