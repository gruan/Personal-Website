/**
 * Created by George Ruan on August 18, 2015.
 *
 * MainCtrl defines the behavior of the Greeting Page and Main Page.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .controller('MainCtrl', function($scope, userData) {
      $scope.name = userData.getName();
    });
})();
