/**
 * Created by gonzovilla89 on 21/11/14.
 */

angular
    .module("pelis")
    .directive("listItem", function(ApiService) {

        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/ListItem.html",
            scope: {
                peli: "=",
                alSeleccionar: "&"
            },
            link: function(scope){
                scope.obtenerRutaImagen = function(path) {

                    return ApiService.rutaImagen(path, 300);

                };

                scope.selecciona = function(id){

                    scope.alSeleccionar({
                        itemId: id
                    });

                };
            }
        };
    });