import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Link } from 'react-router-dom';
const url = 'https://api-sprint2-aspalma.herokuapp.com/usuario/'


const Crud = () => {

    // const passwordSave = localStorage.getItem('password')
    // console.log(passwordSave)
    const [modal, setModal] = useState(false)
    const [modalD, setModalD] = useState(false)
    const [data, setData] = useState([])
    const [form, setForm] = useState({id:"",
                                    nombre:"",
                                    apellido:"",
                                    username:"",
                                    contraseña:""},)
   
    useEffect(()=> {
        peticionGet()
    },[])
    

    const modalInsertar = () => {
        // e.preventDefault()
        setModal(!modal) // el signo de admiracion hace el cambio. ! signo de negacion. Cambia el false inicial a true
    }
    
    
    const seleccionUser =(usuario) => {
        modalInsertar()
        setForm({id:usuario.id,
                nombre:usuario.nombre,
                        apellido:usuario.apellido,
                        username:usuario.username
        })
    } 
    

    const handleChange = async(e) => {
        e.persist()
        await setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }



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

    const peticionPut = async ()=>{

        await axios.put(url+form.id, form)
        .then(response => {
            modalInsertar();
            peticionGet();
        }).catch(error => {
            console.log(error.message);
        })

    }
    const peticionDelete = async () => {
        await axios.delete(url+form.id)
        .then(response => {
            // setModalD({modalD:false});
            peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }
    
  

    return (
        <div>

        <div id = "sesion-ajustes">

            <Link to = "/principal"> <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630962747/ImagesDB/logo-blockBuster_xjdjvj.png" alt="" /></Link>
            <h1> Ajustes</h1>
            <br />
            {/* <button className="btn btn-primary" onClick = {modalInsertar}>Añadir usuario</button> */}
            <br />
            <br />
            <h4>Datos de usuario</h4>
            {data.map((res)=>{
                 return( <div key = {res}>
                        
                        <p> Nombre del usuario: {res.nombre}</p>
                        <p> Correo Electronico: {res.username}</p>
                        <button onClick ={()=>{seleccionUser(res); setModalD({modalD:false})}}className="btn btn-danger"> Eliminar </button> 
                        <button onClick = {()=>seleccionUser(res)} className="btn btn-secondary">
                            Modificar
                        </button>  
                 </div>
                    )
            })}
           

            <Modal isOpen={modal}>
                    <h1>Crear Nuevo Perfil</h1>
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}}  onClick = {modalInsertar}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">id</label>
                            <input  className="form-control" type="text" name="id" id="id" readOnly />
                            <br/>
    
                            <label htmlFor="nombres">Nombre</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" onChange = {handleChange} value ={form.nombre}/>
                            <br/>
                            <label htmlFor="apellidos">Apellido</label>
                            <input className="form-control" type="text" name="apellido" id="apellido" onChange = {handleChange} value = {form.apellido} />
                            <br/>
                            <label htmlFor="telefono">Correo</label>
                            <input className="form-control" type="email" name="username" id="correo" onChange = {handleChange} value = {form.username}/>
                            <br/>
                            
                            <br/>

                        </div>

                    </ModalBody>
                    <ModalFooter>

                        <button onClick = {()=>peticionPut()}className="btn btn-primary">
                            Actualizar
                        </button>
                        <button onClick = {modalInsertar} className="btn btn-danger"
                        
                           >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={modalD}>
                    <ModalBody>
                        Está seguro de eliminar el usuario {form && form.nombre}
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger"
                       onClick={() => {peticionDelete();setModalD({modalD:false})}}>Sí</button>
                        <button className="btn btn-secundary"
                       onClick={() => setModalD({modalD:false})}>No
                           </button>
                    </ModalFooter>
                </Modal>



            </div>
        </div>
    )
}

export default Crud
