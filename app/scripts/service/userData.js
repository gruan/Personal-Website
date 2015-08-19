/**
 * Created on August 19, 2015 by George Ruan.
 *
 * Service to retain data.
 */

(function() {
  'use strict';
  angular
    .module('georgeRuan')
    .factory('userData', [function() {
      var name = '';

      return {
        getName: function () {
          return name;
        },
        setName: function(userName) {
          name = userName;
          return name;
        }
      };

    }]);
})();
