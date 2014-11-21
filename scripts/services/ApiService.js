/**
 * Created by gonzovilla89 on 20/11/14.
 */

angular.module("pelis").service("ApiService", function($http) {

    this.rutaImagen = function(path, size) {

        if (path !== null) {
            return "http://image.tmdb.org/t/p/w" + size + path;
        } else {
            return null;
        }


    };

    this.obtenerDatosApi = function (path){

        return $http.get("https://api.themoviedb.org/3/" + path + "?api_key=f92d87b3e9965ef08561a0d67898000d&language=es");

    };

});