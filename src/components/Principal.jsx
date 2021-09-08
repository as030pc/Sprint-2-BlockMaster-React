

import React, { Component } from 'react'
import Cards from "./Cards"
import {Navbar} from './Navbar'
const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=3c86e97'





export default class Principal extends Component {
    constructor() {
        super()
        this.state = {
            peli: [],
            searchTerm: 'Batman',
            error: ''
        }
    }
    
    async componentDidMount() {
        const res = await fetch(`${url}&s=${this.state.searchTerm}`)
        const { Search } = await res.json()
        this.setState({ peli: Search })
        console.log(this.state.peli)
    }
    render() {
        const handleSubmit = async(e) => {
            e.preventDefault()
            const res = await fetch(`${url}&s=${this.state.searchTerm}`)
            const { Search } = await res.json()
            this.setState({ peli: Search })
        }
        const busqueda = (<form onSubmit = {handleSubmit}>
            <input 
            type ="text"
            name ="searchTerm" //Se llama de la misma manera del estado
            className = "form-control"
            placeholder="Search"
            autoFocus  
            onChange={(e) =>this.setState({searchTerm: e.target.value})}
            value={this.state.searchTerm}
            />
            <button className = "btnSearch">🔍</button>
            </form> )
        return (
            <div>
                <Navbar form = {busqueda}/> 
            {/* http://react-responsive-carousel.js.org/ */}
            <div className="contenedor-cards">{
                    this.state.peli.map((movie,index)=> {
                        return (
                            
                                <Cards key ={index} movies = {movie}/>
                            
                            
                        )
                    })
                }
            </div>
            </div>
        )
    }
}




