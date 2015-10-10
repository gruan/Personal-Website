/**
 * Created by George Ruan on August 21, 2015.
 *
 * grNavBar defines the navigation bar appearance and functionality.
 *
 * To use: Put the directive into the html file.
 *
 * Ex. <gr-nav-bar></gr-nav-bar>
 *
 * This will create a navigation bar with slide in and out functionality.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .directive('grNavBar', navBar);

  navBar.$inject = ['$timeout'];

  function navBar($timeout) {
    var directive;
    directive = {
      link: link,
      templateUrl: 'scripts/directives/grNavBar/grNavBar.html',
      restrict: 'E',
      scope: {
        links: '='
      }
    };

    return directive;

    function link() {
      // Constants
      var SLIDE_IN_POSITION = 0,
          SLIDE_OUT_POSITION = -277,
          OPACITY_IN = 0,
          OPACITY_OUT = 1;

      var navBarElement = angular.element(document.getElementsByTagName('nav')),
          navRollOverElement = angular.element(document.getElementsByClassName('nav-rollover'));

      navBarElement.hover(slideInNavBar, slideOutNavBar);

      /**
       * Wrapper function for slideNavBar. Sliding the navbar into the screen.
       * @return {Void}
       */
      function slideInNavBar() {
        slideNavBar(SLIDE_IN_POSITION, OPACITY_IN);
      }

      /**
       * Wrapper function for slideNavBar. Sliding the navbar out of the screen.
       * @return {Void}
       */
      function slideOutNavBar() {
        slideNavBar(SLIDE_OUT_POSITION, OPACITY_OUT);
      }

      /**
       * Slides the navbar in and out and makes the nav-rollover button appear
       * and disappear.
       * @param  {Integer} rightVal   The value for the navbar's right position.
       * @param  {Integer} opacityVal The value for the nav-rollover's opacity.
       * @return {Void}
       */
      function slideNavBar (rightVal, opacityVal) {
        var NAVBAR_CSS = {right: rightVal},
            NAVROLLOVER_CSS = {opacity: opacityVal},
            NAVBAR_DURATION = 300,
            NAVROLLOVER_DURATION = 500,
            NAVBAR_EASE = 'easeInOutCubic',
            NAVROLLOVER_EASE = 'linear',
            NAVROLLOVER_DELAY;

        navBarElement.animate(NAVBAR_CSS, NAVBAR_DURATION, NAVBAR_EASE);

        $timeout(function() {
          navRollOverElement.animate(NAVROLLOVER_CSS, NAVROLLOVER_DURATION, NAVROLLOVER_EASE);
        }, NAVROLLOVER_DELAY);
      }
    }
  }
})();
