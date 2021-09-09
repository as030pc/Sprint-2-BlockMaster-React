import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import 'bootswatch/dist/solar/bootstrap.min.css'


export default class Cards extends Component {
    render() {
        const {Title, Poster, Year} = this.props.movies
        return (
            
                
                    <div id="card">
                            <img src={Poster} className="" alt="" width="245px" height="300px" />
                            <p className="cardTitle">{Title}</p>
                            <p className="cardSubtitle">{Year} </p>
                            <Link
                                className="btnDetalle"
                                to="/detalle"
                            > Detalle</Link>
                    </div>
          
        )
    }
}
