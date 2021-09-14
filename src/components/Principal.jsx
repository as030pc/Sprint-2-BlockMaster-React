


import React, { Component } from 'react'
import Cards from "./Cards"
import {Navbar} from './Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

const url = 'https://api-sprint2-aspalma.herokuapp.com/peliculas'


export default class Principal extends Component {
    constructor() {
        super()
        this.state = {
            peli: [],
            searchTerm: '',
            error: '',
            sinResults: false, 
            title:"Todas las peliculas"
        }
    }
    
    async componentDidMount() {
       
        const res = await fetch(url)
        const peliculas  = await res.json()
        this.setState({ peli: peliculas })
        console.log(this.state.peli)
        this.setState({sinResults:false})

    }

    
    render() {
        const handleSubmit = async(e) => {
            e.preventDefault()
            if (this.state.searchTerm ==="") {
                const res = await fetch(url)
                const  peliculas  = await res.json()
                this.setState({ peli: peliculas }) 
            } 
            else  {
                const res = await fetch(`${url}?title=${this.state.searchTerm}`)
                const  peliculas  = await res.json()
                this.setState({ peli: peliculas })
                console.log(this.state.peli)
                this.setState({sinResults:false})
                if (this.state.peli.length === 0) {
                    this.setState({sinResults:true})
                    this.setState({title:""})
                    
                    
                    // this.componentDidMount()
                }
            } 
        }
        //Formulario 
        const busqueda = ( <div id = "barra-busqueda">
            <form onSubmit = {handleSubmit}>
            <input 
            type ="text"
            name ="searchTerm" //Se llama de la misma manera del estado
            
            placeholder="Search"
            autoFocus  
            onChange={(e) =>this.setState({searchTerm: e.target.value})}
            value={this.state.searchTerm}
            />
            <button className = "btnSearch">🔍</button>
            </form>
        </div> )
        
        const menosValoradas = async () => {
           
            const  url = "https://api-sprint2-aspalma.herokuapp.com/peliculas?puntuacion_gte=0.1&puntuacion_lte=5"
            const res = await fetch(url)
            const peliculas  = await res.json()
            this.setState({ peli: peliculas })
            console.log(this.state.peli)
            this.setState({sinResults:false})
            this.setState({title:"Menos valoradas"})
        }

        const masValoradas = async () => {
           
            const  url = "https://api-sprint2-aspalma.herokuapp.com/peliculas?puntuacion_gte=5.1&puntuacion_lte=10"
            const res = await fetch(url)
            const peliculas  = await res.json()
            this.setState({ peli: peliculas })
            console.log(this.state.peli)
            this.setState({sinResults:false})
            this.setState({title:"Mas valoradas"})
        }

        const todas = async () => {
            const res = await fetch(url)
            const peliculas  = await res.json()
            this.setState({ peli: peliculas })
            console.log(this.state.peli)
            this.setState({sinResults:false})
            this.setState({title:"Todas las peliculas"})
        }
        return (
            <div>
                <Navbar form = {busqueda}  menosValoradas = {menosValoradas} masValoradas ={masValoradas} todas ={todas} /> 
            {/* http://react-responsive-carousel.js.org/ */}


            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1631562580/ImagesDB/unidos_ntxfcs.png" className="d-block w-100" alt="..."/>
                       {/* <button> Ver ahora</button> */}
                        </div>
                        <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1631562577/ImagesDB/raya_nvrx7k.png" className="d-block w-100" alt="..."/>
                        {/* <button> Ver ahora</button> */}
                        </div>
                        <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1631562574/ImagesDB/mulan_lyes4g.png" className="d-block w-100" alt="..."/>
                        {/* <button> Ver ahora</button> */}
                        </div>
                        <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/c_scale,h_310,w_1200/v1631564419/fDHqWARAQ6pS11SHnz8Ca1XLQJf_ve0vvn.jpg" className="d-block w-100" alt="..."/>
                        {/* <button> Ver ahora</button> */}
                        </div>
                        <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/c_scale,h_310,w_1200/v1631564094/aNKhC2nzGr3kAggKubJ56MbFOUc_pzloi2.jpg" alt="..."/>
                        {/* <button> Ver ahora</button> */}
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            
           {this.state.sinResults &&  <div id ="sin-resultados"><img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1631027285/ynbf1kdmire54sc3geom.png" alt="" srcset="" />  <p>No se encontraron resultados de "{this.state.searchTerm}"</p></div>  }

           <div id = "title-seccion">{this.state.title}</div>
            <div className="contenedor-cards">{

                   
                    this.state.peli.map((movie,index)=> {
                        return (
                            
                            <Cards key ={index} movies = {movie} />
                        )
                    })
                }
            </div>
            
            {this.imagen}
        
            </div>
        )
    }
}




