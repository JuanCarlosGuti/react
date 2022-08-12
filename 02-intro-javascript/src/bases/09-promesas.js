import {getHeroById} from "./bases/08-imp-exp";
import heroes from "./data/heroes";

// const promesa  = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
        
       
//         const heroe = getHeroById(20)
//         resolve(heroe);
//         reject('No se pudo encontrar el heroe')

//     },2000)
// });

// promesa.then((heroe)=>{
//     console.log('Heroe: ', heroe)
// })

// .catch(error => console.warn(error))

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{

    setTimeout( () => {
        
        const heroe = getHeroById(id)
        //resolve(heroe);
        //reject('No se pudo encontrar el heroe')
        if(heroe){
            resolve(heroe);
        } else{
            reject('No se pudo encontrar el heroe')
        }
        
           },2000)
        });
        
    }

    getHeroeByIdAsync(4)
    .then(console.log)
    .catch( console.warn)