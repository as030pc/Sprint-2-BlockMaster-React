import React, { Component } from 'react'
import axios from 'axios';
import md5 from 'md5';
import { Link, Redirect } from 'react-router-dom';

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
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`)
                this.setState(
                    {redirection:{
                    redirection:true
                    }}
                )
            } else {
                alert('El usuario o las contraseña no son correctas')
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
                        placeholder="Contreña"
                        required=""
                        name = "password"
                        onChange = {this.handleChange}
                    />
                     <br />

                    <button
                        type="submit"
                        className="btnLogin"
                    >
                        Iniciar sesion
                        {/* <Link to ="/principal">
                        Login
                        </Link> */}
                       
                    </button>
                    <br />

                    <div>
    
                        <div className="google-btn">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                <p>Sign in with google</p>
                        </div>
                    </div>
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
