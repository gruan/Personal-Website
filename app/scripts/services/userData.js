/**
 * Created on August 19, 2015 by George Ruan.
 *
 * The userData service to retains user information.
 */

(function() {
  'use strict';
  angular.module('georgeRuan')
    .factory('UserData', UserData);

  UserData.$inject = ['$q'];

  function UserData($q) {
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
