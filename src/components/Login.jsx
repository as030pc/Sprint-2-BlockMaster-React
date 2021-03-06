import React, { Component } from 'react'
import axios from 'axios';
import md5 from 'md5';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

const url = "https://api-sprint2-aspalma.herokuapp.com/usuario/"


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            form:{
                username:"",
                password:""
            },
            redirection:false
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value  //
            }
        });
        console.log(this.state.form) //imprimir todo el estado 
    }

    handleSubmit = e => {
        e.preventDefault()
        this.iniciarSesion()
    }
    
    iniciarSesion = async () => {
        await axios.get(url,{params:{username:this.state.form.username,password:md5(this.state.form.password)}})
    .then(response => {
            return response.data; 
        })
        .then(response => {
            if(response.length >0) {
                let respuesta = response[0]
                
                localStorage.setItem('user', this.state.form.username )
                localStorage.setItem('password', md5(this.state.form.password))
                Swal.fire({text:`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`,
                icon:'success'
                })
                this.setState(
                    {redirection:{
                    redirection:true
                    }}
                )
            } else {
                Swal.fire({text:'Usuario o contraseña incorrecta',
                icon:'error'
            })
            }
        })
    }

    
    
    
    render() {

        
        return (

            <div>
                <form className="formLogin" onSubmit = {this.handleSubmit}>
                <div className="tituloRegistro">
                        <img 
                        src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630962747/ImagesDB/logo-blockBuster_xjdjvj.png" 
                        id="icon" 
                        alt="logo" 
                        width="100px"/>
                        <h1>!! Bienvenido a Block-master ¡¡</h1>
                        <h3>Inicio de sesión</h3>
                    </div>

                    <input
                        type="email"
                        id="inputEmail"
                        className="inputEmail"
                        placeholder="Email"
                        required=""
                        name = "username"
                        onChange = {this.handleChange}
                    /> <br />

                    <input
                        type="Password"
                        id="inputPassword"
                        className="inputLogin"
                        placeholder="Contraseña"
                        required=""
                        name = "password"
                        onChange = {this.handleChange}
                    />
                     <br />

                    <button
                        type="submit"
                        className="btn btn-primary btnLogin"
                    >
                        Iniciar sesion
                        {/* <Link to ="/principal">
                        Login
                        </Link> */}
                       
                    </button>
                    <br />
                    <Link to ="/registro" className="Link">
                        Create new account
                    </Link>
                </form>
                {this.state.redirection && <Redirect to = "/principal"/>}
            </div>
        )
    }
}
