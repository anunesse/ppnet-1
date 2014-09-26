'use strict';
angular.module('ppnetApp')
  .controller('configController', function($scope, $location, $routeParams, ppnetConfig, ppnetUser, $rootScope) {

    $scope.$watch(
      function() {
        return ppnetConfig.existingConfig();
      },
      function(newValue, oldValue) {
        if (newValue) {
          $scope.config = ppnetConfig.loadConfig();
        }
      }
    );

      $scope.trackFeature = function (name){
        $rootScope.gaPlugin.trackEvent(function(){/* success function*/}, function(){/* error function*/}, "Feature", name , "use", 1);
      }
  });