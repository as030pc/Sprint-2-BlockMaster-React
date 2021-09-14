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
                            <Modal  id ="modal-modificar" isOpen = {this.state.modal}>
                                 <div id = "X">
                                <div onClick = {openDetail}> <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1631591065/Workshop%2031Agosto/Iconos/Vector_2_ptv1fe.png" alt="" /> </div>
                                </div>
                                <ModalHeader>
                                
                                <h4> {title}</h4>
                                <img  id = "imagen-descripcion" src={imagen} alt="" />
                                
                               
                                </ModalHeader>
                               
                                <ModalBody>
                                <p> {genero}</p>
                                <p> {descripcion}</p>
                                <p>{duracion}</p>
                                <p>{lanzamiento}</p>
                                </ModalBody>
                                
                                <ModalFooter>
                                
                                <div id ="ver-ahora" onClick ={openVideo}> <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1631591293/Workshop%2031Agosto/Iconos/Vector_3_qkucur.png" alt="" /> VER AHORA </div>
                                </ModalFooter>
                                

                            </Modal>
                            <Modal isOpen = {this.state.modalVideo}>
                                <ModalHeader>
                                <div id = "X">
                                <div onClick = {openVideo}> <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1631591065/Workshop%2031Agosto/Iconos/Vector_2_ptv1fe.png" alt="" /> </div>
                                </div>
                            </ModalHeader>
                                <iframe width="500" height="315" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                               
    
                                
                            </Modal>
                    </div>
          
        )
    }
}
