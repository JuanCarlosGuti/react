//import {heroes} from './data/heroes'
//import {heroes} from './data/heroes'
import heroes from '../data/heroes'


export const getHeroById = (id)=> heroes.find((heroe)=>heroe.id===id )



//console.log(getHeroById(2))

const getheroeByowner = (owner )=> heroes.filter((heroe)=> heroe.owner===owner)

//console.log(getheroeByowner('DC'))

