import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Detalle from './Detalle'
// import 'bootswatch/dist/solar/bootstrap.min.css'


export default class Cards extends Component {
    render() {
        const {title, imagen , puntuacion} = this.props.movies
        return (
            
                
                    <div id="card">
                            <img src={imagen} className="" alt="" width="245px" height="300px" />
                            <p className="cardTitle">{title}</p>
                            <p className="cardSubtitle">{puntuacion}/100 </p>
                            
                    </div>
          
        )
    }
}
