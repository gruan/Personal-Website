/**
 * Created by George Ruan on August 22, 2015.
 *
 * The scroll service defines custom toggable behavior for scrolling.
 *
 */

 (function() {
   'use strict';
   angular.module('georgeRuan')
     .factory('Scroll', Scroll);

   function Scroll () {
     return {
       disableMouseScroll: disableMouseScroll,
       reenableMouseScroll: reenableMouseScroll,
       disableKeyUpDown: disableKeyUpDown,
       reenableKeyUpDown: reenableKeyUpDown,
       disableUserScroll: disableUserScroll,
       reenableUserScroll: reenableUserScroll
     };

     /**
      * Disables mouse scrolling functionality.
      * @return {Void}
      */
     function disableMouseScroll() {
       angular.element(window).on('mousewheel', function(event) {
         event.preventDefault();
       });
     }

     /**
      * Re-enables mouse scrolling functionality.
      * @return {Void}
      */
     function reenableMouseScroll() {
       angular.element(window).unbind('mousewheel');
     }

     /**
      * Disable key up and down functionality.
      * @return {Void}
      */
     function disableKeyUpDown() {
       angular.element(window).keyup(function(event) {
         event.preventDefault();
       });

       angular.element(window).keydown(function(event) {
         event.preventDefault();
       });
     }

     /**
      * Reenable key up and down functionality
      * @return {Void}
      */
     function reenableKeyUpDown() {
       angular.element(window).unbind('keyup');
       angular.element(window).unbind('keydown');
     }

     /**
      * Disable user's ability to scroll.
      * @return {Void}
      */
     function disableUserScroll() {
       disableMouseScroll();
       disableKeyUpDown();
     }

     /**
      * Reenable user's ability to scroll.
      * @return {Void}
      */
     function reenableUserScroll() {
       reenableMouseScroll();
       reenableKeyUpDown()
     }
   }

 })();
