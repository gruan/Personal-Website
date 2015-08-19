/**
 * Created by George Ruan on August 18, 2015.
 *
 * IndexCtrl defines the behavior of the index.html. It's primary use is to
 * switch between screens.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .controller('IndexCtrl', function($scope) {
      // Default Partial Values
      $scope.partials = {
        hello: true,
        main: false
      };

      $scope.setActivePartial = setActivePartial;

      /**
       * Sets the active partial to targetPartial.
       * @param {String} targetPartial The name of the new active partial.
       */
      function setActivePartial(targetPartial) {
        _.forEach($scope.partials, setAllPartialsToFalse);
        $scope.partials[targetPartial] = true;

        /**
         * Sets all the partial boolean values to false.
         * @param {boolean} partial The boolean representing whether the
         * partial is active or not.
         */
        function setAllPartialsToFalse(partial) {
          $scope.partials[partial] = false;
        }
      }
    });
})();
