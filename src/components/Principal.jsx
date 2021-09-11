

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cards from "./Cards"
import {Navbar} from './Navbar'
const url = 'https://api-sprint2-aspalma.herokuapp.com/peliculas'





export default class Principal extends Component {
    constructor() {
        super()
        this.state = {
            peli: [],
            searchTerm: '',
            error: ''
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
                if (this.state.peli ===[]) {
                    console.log('La pelicula no esta')
                }
                
                

            }
            
        }
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
        return (
            <div>
                <Navbar form = {busqueda}/> 
            {/* http://react-responsive-carousel.js.org/ */}
            <div className="contenedor-cards">{
                    this.state.peli.map((movie,index)=> {
                        return (
                            
                               <Link to = "/detalle"><Cards key ={index} movies = {movie}/></Link> 
                        )
                    })
                }
            </div>
            </div>
        )
    }
}




