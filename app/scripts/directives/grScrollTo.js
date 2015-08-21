/**
 * Created by George Ruan on August 20, 2015.
 *
 * grScrollTo defines button scrolling functionality.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .directive('grScrollTo', scrollTo);

  function scrollTo() {
    var directive;
    directive = {
      link: link,
      scope: {
        id: '=grScrollTo'
      },
      restrict: 'A'
    };

    return directive;

    function link(scope, element) {

      element.click(smoothScroll);

      function smoothScroll() {
        var cssProperties = {
          scrollTop: angular.element(document.getElementById(scope.id))[0].offsetTop
        };
        var duration = 1500;

        angular.element('html, body').animate(cssProperties, duration, 'easeInOutExpo');
      }
    }
  }
})();
