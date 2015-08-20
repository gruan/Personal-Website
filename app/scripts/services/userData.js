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

  userData.$inject = ['$q'];

  function userData($q) {
    var name = 'Anonymous';

    var userDataObj = {
      getName: function() {
        return $q(function(resolve){
          resolve(name);
        });
      },
      setName: function(userName) {
        name = userName;
        return $q(function(resolve) {
          resolve(name);
        });
      }
    };

    return userDataObj;
  }
})();
