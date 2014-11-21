/**
 * Created by gonzovilla89 on 20/11/14.
 */

angular
    .module("pelis")
    .controller("IndexCtrl", function($scope, $routeSegment){

        $scope.rutaEsPeliculas = function(){

            return $routeSegment.startsWith("pelis");

        };

        $scope.rutaEsSeries = function(){

            return $routeSegment.startsWith("series");

        };

    });