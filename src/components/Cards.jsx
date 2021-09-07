import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import 'bootswatch/dist/solar/bootstrap.min.css'

export default class Cards extends Component {
    render() {
        const {Title, Poster, Year} = this.props.movies
        return (
            <div className="contenedor-cards"   >
                <div className="col">
                    <div className="card">
                        <img src={Poster} className="" alt="" width="245px" height="300px" />
                        <div className="card-body">
                            <h5 className="card-title">{Title}</h5>
                            <h6 className="card-subtitle">{Year} </h6>
                        </div>
                        <div className="m-2">
                        <button>
                            
                        <Link
                                className="btn"
                                to="/detalle"
                            > Detalle
                            </Link>
                        </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
