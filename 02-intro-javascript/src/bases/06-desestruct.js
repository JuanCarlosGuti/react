const persona = {
    nombre:'Juan',
    edad:45,
    clave:'man'
};
//const {nombre:nombre2,edad,clave} =persona;


// console.log(nombre2)
// console.log(edad)
// console.log(clave)

const Context = ({nombre,edad,clave,rango='soldado'}) =>{
  return{
    nombreClave:clave,
    anios: edad,
    latlng:{
        lat:45.12323,
        lgn:45.52368,
    }

  }
}
const {nombreClave,anios,latlng:{lat,lgn}}= Context(persona)
console.log(nombreClave,anios,lat,lgn)