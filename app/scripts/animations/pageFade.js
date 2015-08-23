/**
 * Created by George Ruan on August 22, 2015.
 *
 * page-fade defines the fade in and fade out animation for page transitions.
 *
 * To use: add the page-fade class to the element.
 *
 * Ex. <div class="page-fade">. This will create the fade in and fade out
 * animation for page transitions.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .animation('.page-fade', pageFade);

  pageFade.$inject = ['Scroll'];

  function pageFade(Scroll) {
    /**
     * Helper function for fadeAnimation that specifies the leave animation.
     * @param  {DOMElement} element The DOM element the animation class is attached to.
     * @return {Void}
     */
    function leaveAnimation(element) {
      fadeAnimation(element, Scroll.reenableUserScroll, 'leave');
    }

    /**
     * Helper function for fadeAnimation that specifies the enter animation.
     * @param  {DOMElement} element The DOM element the animation class is attached to.
     * @return {Void}
     */
    function enterAnimation(element) {
      fadeAnimation(element, Scroll.reenableUserScroll, 'enter');
    }

    /**
     * Performs the fade in or out animation.
     * @param  {DOMElement} element The DOM element the animation class is attached to.
     * @param  {Function()} doneFn  The function that signals that the animation is complete.
     * @param  {String} type        Determines which fade to perform: in or out.
     * @return {Void}
     */
    function fadeAnimation (element, doneFn, type) {
      element = angular.element(element);

      Scroll.disableUserScroll();

      var fadeOptions = {
        duration: 1000,
        easing: 'easeOutQuad',
        complete: doneFn
      };

      if(type === 'enter') {
        element.hide().fadeIn(fadeOptions);
      }
      else { // Leave Animation
        element.fadeOut(fadeOptions);
      }
    }

    return {
      enter: enterAnimation,
      leave: leaveAnimation
    };
  }
})();
