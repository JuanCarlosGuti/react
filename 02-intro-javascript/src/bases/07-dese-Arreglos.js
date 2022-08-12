const personajes = ['juan','Carlos','Maria']
const [,,p1]=personajes;
console.log(p1)

const retorno =()=>{
    return['abc',123]
}

const[letra,numeros]=retorno();
console.log(letra,numeros)

const state = (valor) =>{

    return [valor,()=>{console.log('Hlola Juanito')}]
}

const [nombre,etnombre] =state('goku')

console.log(nombre)
etnombre()