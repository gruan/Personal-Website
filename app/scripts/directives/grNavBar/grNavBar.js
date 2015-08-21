/**
 * Created by George Ruan on August 21, 2015.
 *
 * grNavBar defines the navigation bar appearance and functionality.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .directive('grNavBar', navBar);

  function navBar() {
    var directive;
    directive = {
      link: link,
      templateUrl: '/scripts/directives/grNavBar/grNavBar.html',
      restrict: 'E'
    };

    return directive;

    function link() {
      var navBarElement = angular.element(document.getElementsByTagName('nav'));
      var navRollOverElement = angular.element(document.getElementsByClassName('nav-rollover'));

      navBarElement.hover(slideInNavBar, slideOutNavBar);

      function slideInNavBar() {
        slideNavBar(0, 0);
      }

      function slideOutNavBar() {
        slideNavBar(-277, 1);
      }

      function slideNavBar (rightVal, opacityVal) {
        var navBarOptions = {
          css: {
            right: rightVal
          },
          duration: 300,
          ease: 'easeInOutCubic'
        },
        navRolloverOptions = {
          css: {
            opacity: opacityVal
          },
          duration: 500,
          ease: 'easeInCubic'
        };
        navBarElement.animate(navBarOptions.css, navBarOptions.duration, navBarOptions.ease);
        navRollOverElement.animate(navRolloverOptions.css, navRolloverOptions.duration, navRolloverOptions.ease);
      }
    }
  }
})();
