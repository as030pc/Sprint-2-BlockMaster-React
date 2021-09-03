import React, { Component } from 'react'
// import 'bootswatch/dist/solar/bootstrap.min.css'

export default class Cards extends Component {
    render() {
        const {Title, Poster, Year} = this.props.movies
        return (
            <div   >
                <div className="col">
                    <div className="card text-white bg-dark mb-3">
                        <img src={Poster} className="" alt="..." width="245px" height="300px" />
                        <div className="card-body">
                            <h5 className="card-title">{Title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{Year} </h6>
                        </div>
                        <div className="m-2">
                            <a
                                className="btn btn-danger"
                                href="/"
                            >detalle
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
