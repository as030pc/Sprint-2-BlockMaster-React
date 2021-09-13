

import { Modal } from 'reactstrap'
import React, { Component } from 'react'
import Cards from "./Cards"
import {Navbar} from './Navbar'
const url = 'https://api-sprint2-aspalma.herokuapp.com/peliculas'


export default class Principal extends Component {
    constructor() {
        super()
        this.state = {
            peli: [],
            searchTerm: '',
            error: '',
            sinResults: false
        }
    }
    
    async componentDidMount() {
       
        const res = await fetch(url)
        const peliculas  = await res.json()
        this.setState({ peli: peliculas })
        console.log(this.state.peli)
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
                this.state.sinResults = false
                if (this.state.peli.length === 0) {
                    this.state.sinResults = true
                    alert ('La pelicula no esta')
                    const imagen  = <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1631027285/ynbf1kdmire54sc3geom.png" alt="" srcset="" />
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
           
            const  url = "https://api-sprint2-aspalma.herokuapp.com/peliculas?puntuacion_gte=10&puntuacion_lte=50"
            const res = await fetch(url)
            const peliculas  = await res.json()
            this.setState({ peli: peliculas })
            console.log(this.state.peli)
        }

        const masValoradas = async () => {
           
            const  url = "https://api-sprint2-aspalma.herokuapp.com/peliculas?puntuacion_gte=51&puntuacion_lte=100"
            const res = await fetch(url)
            const peliculas  = await res.json()
            this.setState({ peli: peliculas })
            console.log(this.state.peli)
        }

        const todas = async () => {
            const res = await fetch(url)
            const peliculas  = await res.json()
            this.setState({ peli: peliculas })
            console.log(this.state.peli)
        }


        // const sinResults = (
        //     <div>
        //         <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1631027285/ynbf1kdmire54sc3geom.png" alt="" />
        //     </div>
        // )
        

        
        return (
            <div>
                <Navbar form = {busqueda}  menosValoradas = {menosValoradas} masValoradas ={masValoradas} todas ={todas} /> 
            {/* http://react-responsive-carousel.js.org/ */}
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




