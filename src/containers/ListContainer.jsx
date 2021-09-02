import React, { Component } from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
const url ='http://localhost:3004/peliculas'

export default class ListContainer extends Component {
    constructor() {
        super()
        this.state = {
            peli:[],
            searchTerm:'',
            error: ''

        }
    }
    
    async componentDidMount() {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        this.setState({peli:data})
    }
    render() {
        return (
            <div>
                <Navbar/>
                <Cards/>
                

            </div>
        )
    }
}
