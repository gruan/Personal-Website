/**
 * Created on August 19, 2015 by George Ruan.
 *
 * Service to retain data.
 */

(function() {
  'use strict';
  angular
    .module('georgeRuan')
    .factory('userData', userData);

  function userData() {
    var name = '';

    var userDataObj = {
      getName: function() {
        return name;
      },
      setName: function(userName) {
        name = userName;
        return name;
      }
    };

    return userDataObj;
  }
})();
