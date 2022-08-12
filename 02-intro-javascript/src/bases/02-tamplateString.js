const nombre = 'juan'
const apellido = 'Guti'
const nombrecompleto = `${nombre} ${apellido} ${1+8}`

console.log(nombrecompleto)

function getSaludo(nombre){
    return 'Hola mundo '+nombre
}

console.log(`Este es un texto ${getSaludo('juan')}`)

