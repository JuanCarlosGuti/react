const getImagen =async()=>{

const apiKey = 'NJRtGbvrYP25IfnFp9Cl1uMlQ9UawOrV';

const respuesta =await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
const {data} = await respuesta.json();

const url = data.images.original.url;
const img = document.createElement('img');
img.src = url;
document.body.append(img);

console.log(img)


}

getImagen()


// const apiKey = 'NJRtGbvrYP25IfnFp9Cl1uMlQ9UawOrV';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp => resp.json())
    
//     .then(data=> {
//         const url = data.data.images.original.url;
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);

//     })

// .catch(console.warn);