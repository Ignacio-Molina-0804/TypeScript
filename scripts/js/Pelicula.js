var Pelicula = /** @class */ (function () {
    function Pelicula(name, protagonistas, actores) {
        this.name = name;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    Pelicula.prototype.proyectarEnCine = function () {
        console.log("Proyectando ".concat(this.name));
    };
    return Pelicula;
}());
var Pelicula1 = new Pelicula("El Padrino", ["Marlon Brando", "Al Pacino"], ["James Caan", "Robert Duvall"]);
Pelicula1.proyectarEnCine(); // Proyectando El Padrino
console.log(Pelicula1);
