class Pelicula {
    name?: string;
    protagonistas?: string[];
    actores?: string[];

    constructor(name: string, protagonistas: string[], actores: string[]) {
        this.name = name;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    proyectarEnCine() {
        console.log(`Proyectando ${this.name}`);
    }
}
const Pelicula1 = new Pelicula("El Padrino", ["Marlon Brando", "Al Pacino"], ["James Caan", "Robert Duvall"]);
Pelicula1.proyectarEnCine(); // Proyectando El Padrino
console.log(Pelicula1); 