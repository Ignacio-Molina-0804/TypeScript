# Primer Proyecto TypeScript

Este es un proyecto básico de TypeScript que incluye varios ejemplos de código para ilustrar diferentes características y funcionalidades de TypeScript.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `index.html`: Archivo HTML principal que incluye todos los scripts JavaScript generados.
- `scripts/ts/`: Carpeta que contiene los archivos TypeScript originales.
- `scripts/js/`: Carpeta que contiene los archivos JavaScript generados a partir de los archivos TypeScript.
- `tsconfig.json`: Archivo de configuración de TypeScript.

## Archivos TypeScript

### `holaMundo.ts`
Un simple archivo que imprime "Hola mundo" en la consola.
```ts
console.log("Hola mundo");
```

### `futbol.ts`
Un archivo que contiene una función para simular un juego de fútbol.
```ts
let interMiami: number = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

let palabras: string = 'Me emocioné al verlo a Messi';
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {/*...*/}

jugar(interMiami, fcDallas, juegaMessi);
```

### `disney.ts`
Un archivo que muestra el uso de variables con diferentes tipos.
```ts
let disney: any;

disney = 'Star Wars y Marvel';
console.log(disney);

disney = 15000000000;
console.log(disney);

disney = true;
console.log(disney);
```

### `arreglos.ts`
Un archivo que muestra el uso de arreglos en TypeScript.
```ts
let arregloNumeros = [1, 2, 3, 4, 5];
let arregloTexto = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

arregloTexto[0].indexOf("uno");
```

### `Sorteo.ts`
Un archivo que define una clase genérica `Sorteo`.
```ts
class Sorteo<T> {/*...*/}
let sorteo = new Sorteo<string>('Sergie Code');
sorteo.setTicket('S7');
console.log(sorteo.sortear());
```

### `Pelicula.ts`
Un archivo que define una clase `Pelicula`.
```ts
class Pelicula {/*...*/}

const Pelicula1 = new Pelicula("El Padrino", ["Marlon Brando", "Al Pacino"], ["James Caan", "Robert Duvall"]);
Pelicula1.proyectarEnCine(); // Proyectando El Padrino
console.log(Pelicula1);
```

### `typeP.ts`
Un archivo que define un tipo `Programador`.
```ts
type Programador = {
    nombre: string,
    lenguajes: string[],
    tomaMate: boolean,
}

let programador1 : Programador = {
    nombre: "Juan",
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    tomaMate : true,
};
```

### `interfaceP.ts`
Un archivo que define una interfaz `ProgramadorInterface`.
```ts
interface ProgramadorInterface {/*...*/}
let programadorFromInterface = {
    nombre: "Juan",
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    tomaMate : true,
    apellido: "Perez",
    homero : "dou"
};

function enviarCurriculum(programador: ProgramadorInterface) {/*...*/}

enviarCurriculum(programadorFromInterface); // Este curriculum es de Juan
```

## Configuración de TypeScript

El archivo `tsconfig.json` contiene la configuración del compilador TypeScript. Algunas configuraciones importantes incluyen:
- `target`: Especifica la versión de JavaScript a la que se compilará el código TypeScript.
- `module`: Especifica el sistema de módulos que se utilizará.
- `outDir`: Especifica el directorio de salida para los archivos JavaScript generados.

## Cómo Ejecutar el Proyecto

1. Clona el repositorio.
2. Instala TypeScript si no lo tienes instalado:
    ```sh
    npm install -g typescript
    ```
3. Compila los archivos TypeScript:
    ```sh
    tsc
    ```
4. Abre `index.html` en tu navegador para ver los resultados.