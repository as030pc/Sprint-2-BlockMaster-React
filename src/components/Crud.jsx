import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url = 'https://api-sprint2-aspalma.herokuapp.com/usuario/'


const Crud = () => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([])
    const [form, setForm] = useState({id:"",
                                    nombre:"",
                                    apellido:"",
                                    correo:"",
                                    contraseña:""},)
   
    useEffect(()=> {
        peticionGet()
    },[])
    

    const modalInsertar = () => {
        // e.preventDefault()
        setModal(!modal) // el signo de admiracion hace el cambio. ! signo de negacion. Cambia el false inicial a true
    }
    
    
    // const seleccionUser =(usuario) => {
    //     setUser({form:{id:usuario.id,
    //                     nombre:usuario.nombre,
    //                     apellido:usuario.apellido,
    //                     correo:usuario.username,
    //                     contraseña:usuario.password
    //     }})
    // } 
    

    // const handleChange = async(e) => {
    //     e.persist()
    //     await setUser({form:{
    //         ...user.form,
    //         [e.target.name]:e.target.value
    //     }})
    // }

    const peticionGet = async () =>  {
        await axios.get(url)
        .then(response => {
            setData(response.data) //response.data: es una variable 
            console.log(data) 
        })
        .catch(error => {
            console.log(error.message);
        })
    } 
    
  

    return (
        <div>
            <h1> Ajustes</h1>
            <br />
            <button onClick = {modalInsertar}>Añadir usuario</button>
            <h3>Datos de usuario</h3>
            {data.map((res)=>{
                 return( <div key = {res}>
                        <p> {res.nombre}</p>
                        <p>{res.id}</p> 
                        <p>{res.username}</p>
                        
                        
                        <button> Eliminar </button> 
                        
                 </div>
                    
                    )
            })}
           

            <Modal isOpen={modal}>
                    <h1>Crear Estudiante</h1>
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">id</label>
                            <input  className="form-control" type="text" name="id" id="id" readOnly />
                            <br/>
    
                            <label htmlFor="nombres">Nombre</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" />
                            <br/>
                            <label htmlFor="apellidos">Apellido</label>
                            <input className="form-control" type="text" name="apellido" id="apellido"  />
                            <br/>
                            <label htmlFor="telefono">Correo</label>
                            <input className="form-control" type="email" name="correo" id="correo" />
                            <br/>
                            
                            <br/>

                        </div>

                    </ModalBody>
                    <ModalFooter>

                        <button className="btn btn-primary">
                            Actualizar
                        </button>
                        <button onClick = {modalInsertar} className="btn btn-danger"
                        
                           >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>



    
        </div>
    )
}

export default Crud
