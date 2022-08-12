const saludar = nombre => 'Hola '+nombre


console.log(saludar('juan'))

const getUser = ()=>({
        uid: 'ABC123',
        username:'1jc45'
    })


console.log(getUser())

const getUserActivo = (unombre)=>({
    id:12345,
    username:unombre,

})


const usuarioAc = getUserActivo('juan')
console.log(usuarioAc)