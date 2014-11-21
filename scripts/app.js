/**
 * Created by gonzovilla89 on 19/11/14.
 */

angular.module("pelis", ["ngRoute", "view-segment", "route-segment"]);

angular.module("pelis").config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider, $routeProvider){

    $routeProvider.otherwise({
         redirectTo: "/pelis/proximas"
    });

    $routeSegmentProvider.when("/pelis", "pelis");
    $routeSegmentProvider.when("/pelis/detalle", "pelis.detalle");
    $routeSegmentProvider.when("/pelis/proximas", "pelis.prox");
    $routeSegmentProvider.when("/pelis/actuales", "pelis.act");
    $routeSegmentProvider.when("/series", "series");

    $routeSegmentProvider.segment("pelis", {
        controller: "PelisCtrl",
        templateUrl: "views/Pelis.html"

    });

    $routeSegmentProvider.within("pelis").segment("detalle", {
        controller: "PeliDetalleCtrl",
        templateUrl: "views/PeliDetalle.html",
        resolve: {
            Pelicula: ["ApiService", "$routeParams", function(ApiService, $routeParams){
                return ApiService.obtenerDatosApi("movie/" + $routeParams.peliculaId);
        }]}
    });


    $routeSegmentProvider.within("pelis").segment("prox", {
        controller: "ProximasCtrl",
        templateUrl: "views/Proximas.html",
        resolve: {
            Peliculas:["ApiService", function(ApiService) {
                return ApiService.obtenerDatosApi("movie/upcoming");
            }]
        }
    });

    $routeSegmentProvider.within("pelis").segment("act", {
        controller: "ActualesCtrl",
        templateUrl: "views/Actuales.html"
    });
    $routeSegmentProvider.segment("series", {
        controller: "SeriesCtrl",
        templateUrl: "views/Series.html"
    });

}]);