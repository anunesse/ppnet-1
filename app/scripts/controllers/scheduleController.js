'use strict';
angular.module('ppnetApp')
    .controller('ScheduleController', function($scope, $http) {

      $scope.agenda = [];

      $scope.addEvent = function(event){
        $scope.agenda.push(event);
      };

      function getJSONAgenda(){
        $http.get("scripts/schedule.json")
            .success(function(data){
              $scope.agenda = data;
            })
            .error(function(data, status){
              console.error("Enable to load agenda: "+status);
            });
      }

      function getAgenda() {
        $.getScript( "scripts/schedule.js" )
        .done(function( script, textStatus ) {
            $scope.agenda = agenda;
            $scope.$digest();
        })
        .fail(function( jqxhr, settings, exception ) {
            getJSONAgenda();
        });
      }

      getAgenda();

    })
    .filter('time', function() {
      return function(date) {
        return new Date(date);
      }
    });