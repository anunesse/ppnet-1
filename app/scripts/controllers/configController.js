'use strict';
angular.module('ppnetApp')
  .controller('configController', function($scope, $location, $routeParams, ppnetConfig, ppnetUser, $rootScope) {

    $scope.$watch(
      function() {
        return ppnetConfig.existingConfig();
      },
      function(newValue, oldValue) {
        if (newValue) {
          setHeader(ppnetConfig.loadConfig());
        }
      }
    );

    $scope.logoutButtonClick = function() {
      $scope.isLogedIn = false;
    };

    $scope.trackFeature = function (name){
      $rootScope.gaPlugin.trackEvent(function(){/* success function*/}, function(){/* error function*/}, "Feature", name , "use", 1);
    }

    $scope.$watch(
      function() {
        return ppnetUser.isLogedIn();
      },
      function(newValue, oldValue) {
        if (newValue) {
          $scope.isLogedIn = newValue;
        }
      }
    );

    var setHeader = function(config) {
      $scope.config = config;
    }
  });