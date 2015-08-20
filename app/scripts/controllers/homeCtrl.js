/**
 * Created by George Ruan on August 18, 2015.
 *
 * HomeCtrl defines the behavior of the Home Page.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .controller('HomeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$location', '$anchorScroll', 'userData'];

    function homeCtrl ($scope, $location, $anchorScroll, userData) {
      userData.getName().then(setName);

      /**
       * Sets the user's name.
       * @param {String} name User's name.
       */
      function setName (name) {
        $scope.name = name;
      }

      $scope.scrollToId = scrollToId;

      /**
       * Scrolls to specified section of the page
       * @param  {[type]} id The id of the section to scroll to.
       * @return {String}    Section id
       */
      function scrollToId(id) {
        $location.hash(id);
        $anchorScroll();
        return id;
      }
    }
})();
