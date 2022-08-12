const persona= {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciuda:'NewYork',
        zip:4565679,
        lat:14.32656,
        lgt:34.54466,

    }
};

console.table(persona)
const persona2 = {...persona};
persona2.nombre ='peter'
console.table(persona)

console.table(persona2)
