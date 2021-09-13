import React, { Component } from 'react'
import { Modal, ModalHeader , ModalFooter, ModalBody} from 'reactstrap'

// import 'bootswatch/dist/solar/bootstrap.min.css'


export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false,
            modalVideo:false
        }
       

    }
    render() {
        const {title, imagen , puntuacion,genero, descripcion,duracion,lanzamiento, trailer} = this.props.movies
        const openDetail = () => {
            return (this.setState({modal:!this.state.modal}))

        }
        const openVideo = () => {
            return (this.setState({modalVideo:!this.state.modalVideo}))

        }
        
        return (
                    <div id="card">
                            <div id = "tarjeta" onClick ={openDetail}>
                                <img src={imagen} className="" alt="" width="245px" height="300px" />
                               <span  id = 'putuacion1' className="cardSubtitle" > ⭐{puntuacion}</span> 
                            
                            </div>
                            <Modal isOpen = {this.state.modal}>
                                <ModalHeader>
                                <img  id = "imagen-descripcion" src={imagen} alt="" />
                                <h4> {title}</h4>
                                
                                </ModalHeader>
                               
                                <ModalBody>
                                <p> {genero}</p>
                                <p> {descripcion}</p>
                                <p>{duracion}</p>
                                <p>{lanzamiento}</p>
                                </ModalBody>
                                
                                <ModalFooter>
                                <button onClick = {openDetail}> Cerrar detalle</button>
                                <button onClick ={openVideo}> Ver ahora </button>
                                </ModalFooter>
                                

                            </Modal>
                            <Modal isOpen = {this.state.modalVideo}>
                                <iframe width="560" height="315" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                               
    
                                <ModalFooter><button onClick ={openVideo} >Cerrar video</button></ModalFooter>
                            </Modal>
                    </div>
          
        )
    }
}
