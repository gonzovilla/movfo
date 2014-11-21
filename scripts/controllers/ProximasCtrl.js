/**
 * Created by gonzovilla89 on 20/11/14.
 */


angular
    .module("pelis")
    .controller("ProximasCtrl", function($scope, $http, ApiService, Peliculas, $location, $filter){


        $scope.peliculas = Peliculas.data.results;
        /*ApiService.obtenerDatosApi("movie/upcoming").then(
          function(datos){
                $scope.peliculas = datos.data.results;
          },
          function(){
                alert("Hubo un error");
          }
        );*/

        $scope.verDetalle = function(id) {

            $location.path("/pelis/detalle").search({
                peliculaId: id
            });

        };

        $scope.aplicaFiltroFecha = function(fecha) {

            return $filter("fechaEstreno")(nombre(fecha));
        };

        var nombre = function (fecha) {
            return $filter("date")(fecha);
        };

        /* function diferido() {

            var deferred = $q.defer();

            $timeout(function(){
                deferred.resolve("Ya he terminado");
            }, 200, false);

            return deferred.promise;
        };

        $scope.ejecutarPromesa = function() {

            diferido().then(
                function(datos){
                    alert("Bien: " + datos);
                }, function(error){
                    alert("Mal: " + error);
                }
            )
        };

        $scope.$on("MiEvento", function(event, datos){

            alert(datos);

        });

        $scope.lanzarEmit = function() {

            $scope.$emit("MiOtroEvento", "Adios!!");

        }; */

    });