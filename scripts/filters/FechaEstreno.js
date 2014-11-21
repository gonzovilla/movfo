/**
 * Created by gonzovilla89 on 21/11/14.
 */

angular
    .module("pelis").filter("fechaEstreno", function($filter) {

        return function (fecha) {
            return "Se estrena en " + fecha;

        }

    });