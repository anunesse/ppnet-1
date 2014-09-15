'use strict';
angular.module('ppnetApp')
    .controller('ScheduleController', function($scope) {

      $scope.agenda = null;

      function getAgenda() {
        $.getScript("views/schedule/schedule.js", function () {
          $scope.agenda = agenda;
          $scope.$digest();
        });
      }

      getAgenda();

    })
    .filter('time', function() {
      return function(date) {
        return new Date(date);
      }
    });