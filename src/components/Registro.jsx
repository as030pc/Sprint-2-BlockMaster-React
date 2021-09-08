import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom'
import uuid  from 'react-uuid'
import md5 from 'md5';
import axios from 'axios';
const url = 'https://api-sprint2-aspalma.herokuapp.com/usuario'

export default class Registro extends Component {
    constructor() {
        super();
        this.state = {
            form:{
                id:"",
                username:"",
                password:"",
                apellido:"",
                nombre:""
            },
            redireccionar:false
        }

    
        

    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    handleChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    } //target.name : permite capturar dependiendo del name que tenga el input en el formulario.
 

    RegistroUsuario = async () => {
        await axios.post(url, {
            id: uuid,
            apellido: this.state.form.apellido,
            nombre: this.state.form.nombre,
            username: this.state.form.username,
            password: md5(this.state.form.password)
        })
        .then(respuesta => {
            alert('Usuario Registrado')
            this.setState({redireccionar:true})
            // const registros = []

            // localStorage.setItem('Registro', JSON.stringify(this.state.form))
            // registros.push(JSON.parse(localStorage.getItem('Registro')))
            // localStorage.setItem('Registros', JSON.stringify(registros))
            // console.log(registros)
        })
        .catch(error => {
            console.log(error)
        })
        await axios.get(url) 
        .then(response => localStorage.setItem('Registros2', JSON.stringify(response.data)))
    }

 

    render() {
        return (
            <div className="registro">
                <form className="formRegistro" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        Registrate en Block-Buster
                    </h1>
                    <div className="tituloRegistro">
                        <img 
                        src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630962747/ImagesDB/logo-blockBuster_xjdjvj.png" 
                        id="icon" 
                        alt="logo" 
                        width="100px"/>
                        <h3>Crea una cuenta</h3>
                    </div>

                    

                    <input
                        type="text"
                        name="nombre"
                        className="inputNombre"
                        placeholder=" Ingrese su nombre"
                        required=""
                        onChange ={this.handleChange}

                    /> <br />
                    <input
                        type="text"
                        placeholder="Ingrese sus apellidos"
                        name="apellido"
                        className="inputApellido"
                        autoComplete="off"
                        onChange ={this.handleChange}
                    /> <br />

                    <input
                        type="email"
                        name="email"
                        className="inputCorreo"
                        placeholder="Ingrese un email valido"
                        required=""
                        onChange ={this.handleChange}

                    /> <br />

                    <input
                        type="Password"
                        name="password"
                        className="inputContrasena"
                        placeholder="Ingrese una contraseña"
                        required=""
                        onChange ={this.handleChange}

                    />
                    <br />
                    <button
                        type="submit"
                        className="btnRegistro"
                        onClick = {() => this.RegistroUsuario()}
                    >
                        Registro
                    </button>
                    <br />
                    <Link to ="/login"
                        className="link"
                    >
                        Usuario Registrado
                    </Link>
                </form>

                
                {this.state.redireccionar && <Redirect to = "/login"/>}
            </div>
        )
    }
}
