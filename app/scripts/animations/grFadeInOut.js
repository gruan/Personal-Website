/**
 * Created by George Ruan on August 22, 2015.
 *
 * grFadeInOut defines the fade in and fade out animation.
 *
 * To use: add the grFadeInOut class to the element. To include time delay after
 * each fade in and fade out animation, add the attribute 'delay="delayVal"' in ms.
 *
 * Ex. <div class="grFadeInOut" delay="1000">. This will create the fade in and
 * fade out animation with a 1000ms delay after each fade in and fade out animation.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .animation('.grFadeInOut', fadeInOut);

  fadeInOut.$inject = ['$timeout', 'Scroll'];

  function fadeInOut($timeout, Scroll) {
    var DURATION = 2000;

    var delayCache,
        calledEver;

    /**
     * Gets the delay attached to the element and caches it.
     * @param  {jQuery} element The element the class is attached to. This element
     * should already be wrapped by angular.element.
     * @return {Integer}        The delay for the animation.
     */
    function getDelay (element) {
      if(!calledEver) {
        var delayAttribute = element[0].attributes.delay;
        delayCache = delayAttribute ? delayAttribute.value : 0;

        calledEver = true;
      }

      return delayCache;
    }

    return {
      enter: function(element, doneFn) {
        element = angular.element(element);
        getDelay(element);

        element.fadeIn(DURATION, function(){
          $timeout(doneFn, delayCache);
        });
      },
      leave: function(element, doneFn) {
        element = angular.element(element);
        getDelay(element);

        element.fadeOut(DURATION, function(){
          $timeout(function() {
            Scroll.reenableKeyUpDown();
            Scroll.reenableMouseScroll();
            doneFn();
          }, delayCache);
        });
      }
    };
  }
})();
