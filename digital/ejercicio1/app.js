const cont = document.getElementById("root")


const titulos = [
    "Con lo visto hasta ahora",
    "Replica este HTML",
    "Usando",
    "React.js",
]
const pieDePagina = React.createElement("footer", { key: "footer" }, "Suerte!!!!!");

function recorrido(){
   const titulo = titulos.map((o, index)=>
    React.createElement(`h${index +1}`,{key:index},o));
    return React.createElement("div",null,[titulo,pieDePagina]);
}


ReactDOM.render(
   React.createElement(recorrido,null,null),cont

);


