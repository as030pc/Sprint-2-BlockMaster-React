import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom'

export default class Registro extends Component {
    constructor() {
        super();
        this.state = {
            form:{
                
                username:"",
                password:"",
                apellido_paterno:"",
                apellido_materno:"",
                nombre:""
            }
        }
        this.handleChange = this.handleChange.bind(this)

    }
    render() {
        return (
            <div className="registro">
                <form className="formRegistro" onSubmit={this.handleSutmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        ¡Registrate en nuestro sistema!
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
                        placeholder="Apellidos"
                        name="apellido_paterno"
                        className="inputApellido"
                        autoComplete="off"
                    /> <br />

                    <input
                        type="text"
                        name="nombre"
                        className="inputNombre"
                        placeholder=" Ingrese su nombre"
                        required=""

                    /> <br />

                    <input
                        type="email"
                        name="email"
                        className="inputCorreo"
                        placeholder="Ingrese un email valido"
                        required=""

                    /> <br />

                    <input
                        type="Password"
                        name="password"
                        className="inputContrasena"
                        placeholder="Ingrese una contraseña"
                        required=""

                    />
                    <br />
                    <button
                        type="submit"
                        className="btnRegistro"
                    >
                        Registro
                    </button>
                    <br />
                    <Link to ="/login"
                        className="link"
                    >
                        Aun no se encuentra registrado?
                    </Link>
                </form>
            </div>
        )
    }
}
