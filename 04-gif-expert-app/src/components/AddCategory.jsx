
import { useState } from "react"

export const AddCategory = ({AdicionLista}) =>{

    const [inputValue, setinputValue] = useState('Valor')
    const inputCnge = (inputValue)=>{
        setinputValue(inputValue.target.value)
    }    
    const oSubt = () =>{
        if (inputValue.trim().length<=1)return;
        setinputValue('')
        
        AdicionLista(cate=>[inputValue,...cate])
    
    }   
    return (

<form onSubmit={(event)=>(event.preventDefault())}>

    <input  type="text"
            placeholder="buscar Gifs"
            value={inputValue}
            onChange={inputCnge}
    />
    <button onClick={oSubt}>agregar</button>
    
</form>
        
    )
}