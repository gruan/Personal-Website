/**
 * Created by George Ruan on August 18, 2015.
 *
 * MainCtrl defines the behavior of the Greeting Page and Main Page.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .controller('GreetingCtrl', function($scope, $location, $interval, userData) {
      var greetingsArr = ['Hello.', 'What\'s Your Name?', ''];
      var greetingsCount = 0;
      var greetingsDelay = 5000;        // in .fade-in-out (duration + delay) * 1000
      $scope.greeting = greetingsArr[0];

      $scope.name = userData.getName();

      $scope.submitName = submitName;

      /**
       * Changes to main page
       * @return {void}
       */
      function submitName() {
        var username = $scope.name || 'Anonymous';
        userData.setName(username);
        $location.path('home');
      }

      /**
       * Sets the greeting to the next possible one.
       * @return {void}
       */
      function nextGreeting() {
        if(greetingsCount < greetingsArr.length) {
          $scope.greeting = greetingsArr[++greetingsCount];
        }
      }

      $interval(nextGreeting, greetingsDelay, greetingsArr.length - 1);
    });
})();
