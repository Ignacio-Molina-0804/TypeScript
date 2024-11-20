var programadorFromInterface = {
    nombre: "Luciano",
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    tomaMate: true,
    apellido: "Losada",
    homero: "dou"
};
function enviarCurriculum(programador) {
    console.log("Este curriculum es de ".concat(programador.nombre));
}
enviarCurriculum(programadorFromInterface); 
