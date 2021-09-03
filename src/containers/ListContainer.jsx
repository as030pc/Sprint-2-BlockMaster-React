import React, { Component } from 'react'
import Cards from '../components/Cards'
import {Navbar} from '../components/Navbar'
import styled from 'styled-components'
import Login from '../components/Login'
// import Registro from '../components/Registro'
import 'bootswatch/dist/solar/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Principal = styled.div `
    background-color:black;
    width:100%;
    height:100%;
    border:0px;
    margin:0px;
    color:white;



`
export default class ListContainer extends Component {
    constructor() {
        super()
        this.state = {
            peli:[],
            searchTerm:'Batman',
            error: ''

        }
    }
    
    async componentDidMount() {
        const url =' http://www.omdbapi.com/?i=tt3896198&apikey=ea1ed1d&s=batman'
        const res = await fetch(`${url}&s${this.state.searchTerm}`)
        const {Search} = await res.json()
        console.log(Search)
        this.setState({peli:Search})
    }
    render() {
        // const handleSubmit = async(e) => {
        //     e.preventDefault()
        //     const res = await fetch(`${url}&s=${this.state.searchTerm}`)
        //     const { Search } = await res.json()
        //     this.setState({ peli: Search })
        // }
        return (

            <div>
                
                <Principal>
                <Navbar className="container row row-cols-1 row-cols-md-4 g-4 py-5 text-center ms-5"/>
                {
                    this.state.peli.map((movie,index)=> {
                        return (
                            <Cards key ={index} movies = {movie}/>
                            

                        )
                    })
                }
                
                </Principal>
                <Login/>
                {/* <Registro/> */}
        
            </div>
        )
    }
}
