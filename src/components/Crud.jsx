import React, {useState, useEffect} from 'react'
import axios from 'axios'
const url = 'https://api-sprint2-aspalma.herokuapp.com/usuario/'


const Crud = () => {
    const [user, setUser] = useState({data:[]})
   
    useEffect(()=> {
        peticionGet()
        
    },[])
    
    const peticionGet = async () =>  {
        await axios.get(url)
        .then(response => {
            setUser({data: response.data})
            console.log(user) 
        })
        .catch(error => {
            console.log(error.message);
        })
    } 
    const registro = (user.data.map(user =>{
        return {
            id:user.id,
            nombre:user.nombre,
            apellido:user.apellido
        }
    }))
  
    
    
  

    return (
        <div>
            <br />


           {/* {user.map(index => {
               
               return (
                   <div> {user[index]}</div>
               )

           })} */}
           
         
            
            
        </div>
    )
}

export default Crud
