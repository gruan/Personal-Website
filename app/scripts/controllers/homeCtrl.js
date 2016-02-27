/**
 * Created by George Ruan on August 18, 2015.
 *
 * HomeCtrl defines the behavior of the Home Page.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .controller('HomeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$interval', 'UserData'];

    function homeCtrl ($scope, $interval, UserData) {
      /* ------ Greeting Variables ----- */
      var greetingsArr = ['Hello.', 'What\'s Your Name?', ''];
      var greetingsCount = 0;
      var greetingsDelay = 4000;        // in .fade-in-out (duration + delay) * 1000
      $scope.greeting = greetingsArr[0];

      // Set to false for debugging. True for greetings animation
      $scope.showGreetingPage = false;

      /* ----- Input Variables ----- */
      $scope.input = {
        // name: ''
      };

      /* ----- Links ----- */
      $scope.links = {
        github: 'https://github.com/gruan',
        linkedin: 'https://www.linkedin.com/in/gruan',
        logo: 'https://cloud.githubusercontent.com/assets/4809816/10415229/1f7e0b0e-6fb6-11e5-9b1e-b6d054c3feef.png',
        resume: 'https://drive.google.com/file/d/0BxTOfbWmV3tWbzNZLVFoR2lLRWM/view?usp=sharing',
        mogaocaves: 'http://www.mogaocaves.xyz'
      };

      /* ----- User Data ----- */
      $scope.device = '';

      /* ----- Functions ----- */
      /**
       * Sets the local device.
       * @param String device User's device. 'mobile', 'tablet', 'desktop'
       */
      function setLocalDevice(device) {
        $scope.device = device;
      }

      /**
       * Sets the local user's name.
       * @param String name User's name.
       */
      function setLocalName (name) {
        $scope.input.name = name;
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

      /**
       * Sets the local user name and changes the page to the Home Screen
       * @return {void}
       */
      function submitName() {
        UserData.setName($scope.input.name);
        $scope.showGreetingPage = false;
      }

      /**
       * Determines whether the navigation bar should be shown
       * @return Boolean True if desktop. False otherwise.
       */
      function showNav() {
        return device == 'desktop';
      }

      /* ------ Scoped Functions ----- */
      $scope.submitName = submitName;

      /* ------ Runtime ------ */
      UserData.getDevice().then(setLocalDevice);

      UserData.getName().then(setLocalName);
      $interval(nextGreeting, greetingsDelay, greetingsArr.length - 1);
    }
})();
