import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalHeader } from 'reactstrap'

// import 'bootswatch/dist/solar/bootstrap.min.css'


export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false
        }
       

    }
    render() {
        const {title, imagen , puntuacion,genero, descripcion,duracion,lanzamiento} = this.props.movies
        const openDetail = () => {
            return (this.setState({modal:!this.state.modal}))

        }
        
        return (
            
            
                    <div id="card">
                            <button onClick ={openDetail}>
                                <img src={imagen} className="" alt="" width="245px" height="300px" />
                                
                                <p className="cardSubtitle">{puntuacion}/100 </p>
                            
                            </button>
                            <Modal isOpen = {this.state.modal}>
                                
                                <h4> {title}</h4>
                                <p> {genero}</p>
                                <p> {descripcion}</p>
                                <p>{duracion}</p>
                                <p>{lanzamiento}</p>
                                <button onClick = {openDetail}> Cerrar detalle</button>

                            </Modal>
                    </div>
          
        )
    }
}
