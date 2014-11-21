/**
 * Created by gonzovilla89 on 21/11/14.
 */

angular
    .module("pelis")
    .controller("PeliDetalleCtrl", function($scope, Pelicula, ApiService){

        $scope.pelicula = Pelicula.data;

        $scope.obtenerRutaImagen = function(path) {

            return ApiService.rutaImagen(path, 500);

        };

    });