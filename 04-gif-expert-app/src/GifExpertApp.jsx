import { useState } from "react"
import { AddCategory } from "./components/AddCategory"



export const GifExpertApp = () => {

    const [first, setfirst] = useState([])
    // const agregar = () =>{
    //   setfirst(['un valor',...first])
    //  }
   

    

    return (

        <>
        <h1>GifrtExpert</h1>

        <AddCategory AdicionLista={setfirst}/>

        

        
            <h1>GiftExpertApp</h1>

            <ol>    
                {first.map((p,index) =>{
                  return  <li key={index+p}>{p}</li>
                })}    
                
            </ol>
        </>
    )
}