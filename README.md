# Proyecto de Introducción a TypeScript

Este repositorio contiene un proyecto introductorio de TypeScript que demuestra diversas funcionalidades y características clave del lenguaje mediante ejemplos prácticos.

## Organización del Proyecto

La estructura del proyecto está dividida de la siguiente manera:

- **`index.html`**: Página principal que referencia los scripts JavaScript generados.
- **`scripts/ts/`**: Carpeta donde se encuentran los archivos TypeScript originales.
- **`scripts/js/`**: Carpeta que almacena los archivos JavaScript generados tras la compilación.
- **`tsconfig.json`**: Archivo con las configuraciones del compilador TypeScript.

## Descripción de los Archivos TypeScript

### **`holaMundo.ts`**
Un ejemplo sencillo que imprime "Hola mundo" en la consola.
```ts
console.log("Hola mundo");
```

### **`futbol.ts`**
Define una función para simular un partido de fútbol.
```ts
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;

let palabras = 'Me emocioné al verlo a Messi';
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {/*...*/}

jugar(interMiami, fcDallas, juegaMessi);
```

### **`disney.ts`**
Demuestra el uso de variables de tipo `any` para almacenar distintos tipos de datos.
```ts
let disney: any;

disney = 'Star Wars y Marvel';
console.log(disney);

disney = 15000000000;
console.log(disney);

disney = true;
console.log(disney);
```

### **`arreglos.ts`**
Ejemplo práctico del manejo de arreglos en TypeScript.
```ts
let arregloNumeros = [1, 2, 3, 4, 5];
let arregloTexto = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

arregloTexto[0].indexOf("uno");
```

### **`Sorteo.ts`**
Contiene una clase genérica `Sorteo` que simula el sorteo de tickets.
```ts
class Sorteo<T> {/*...*/}
let sorteo = new Sorteo<string>('Sergie Code');
sorteo.setTicket('S7');
console.log(sorteo.sortear());
```

### **`Pelicula.ts`**
Implementa una clase `Pelicula` para gestionar información sobre películas y proyectarlas.
```ts
class Pelicula {/*...*/}

const pelicula1 = new Pelicula("El Padrino", ["Marlon Brando", "Al Pacino"], ["James Caan", "Robert Duvall"]);
pelicula1.proyectarEnCine(); // Proyectando El Padrino
console.log(pelicula1);
```

### **`typeP.ts`**
Declara un tipo personalizado `Programador` con propiedades específicas.
```ts
type Programador = {
    nombre: string,
    lenguajes: string[],
    tomaMate: boolean,
}

let programador1: Programador = {
    nombre: "Juan",
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    tomaMate: true,
};
```

### **`interfaceP.ts`**
Define una interfaz `ProgramadorInterface` para estandarizar las propiedades de un programador.
```ts
interface ProgramadorInterface {/*...*/}
let programadorFromInterface = {
    nombre: "Juan",
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    tomaMate: true,
    apellido: "Perez",
    homero: "dou"
};

function enviarCurriculum(programador: ProgramadorInterface) {/*...*/}

enviarCurriculum(programadorFromInterface); // Este curriculum es de Juan
```

## Configuración del Proyecto

El archivo `tsconfig.json` contiene parámetros clave como:
- **`target`**: Define la versión de JavaScript a la que se transpilará el código.
- **`module`**: Especifica el sistema de módulos a usar.
- **`outDir`**: Indica el directorio de salida para los archivos generados.

## Pasos para Ejecutar el Proyecto

1. Clonar este repositorio en tu equipo.
2. Instalar TypeScript si aún no está instalado:
    ```sh
    npm install -g typescript
    ```
3. Compilar los archivos TypeScript usando:
    ```sh
    tsc
    ```
4. Abrir el archivo `index.html` en un navegador para visualizar los resultados. 
