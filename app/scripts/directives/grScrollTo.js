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
      var scrollElement = angular.element('html, body');

      element.click(smoothScroll);

      function smoothScroll() {
        var targetY = angular.element(document.getElementById(scope.id))[0].offsetTop;
        var duration = 1500;

        if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
          window.scrollTo(0, targetY);
        }
        else {
          scrollElement.stop().animate({scrollTop: targetY}, duration, 'easeInOutExpo');
        }
      }
    }
  }
})();
