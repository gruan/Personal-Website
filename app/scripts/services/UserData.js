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
    var name = '',
        nameNotEntered = true,
        device = '';

    if( navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i)||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i) ) {
      device = 'mobile';
    }
    else if( navigator.userAgent.match(/iPad/i) ) {
      device = 'tablet';
    }
    else {
      device = 'desktop';
    }

    /* Service functions */
    var userDataObj = {
      getName: function() {
        if(!nameNotEntered) {
          name = name || 'Anonymous';
        }

        return $q(function(resolve){
          resolve(name);
        });
      },
      setName: function(userName) {
        name = userName;
        nameNotEntered = false;
        return $q(function(resolve) {
          resolve(name);
        });
      },
      getDevice: function() {
        return $q(function(resolve) {
          resolve(device);
        });
      }
    };

    return userDataObj;
  }
})();
