
import { NavbarS } from '../styled/NavbarStyled'
import React from 'react'

export const Navbar = (props) => {
                return (
                <NavbarS> 
                <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630962747/ImagesDB/logo-blockBuster_xjdjvj.png" alt="" />
                <p> Todas </p>
                <p>Mas valoradas</p>
                <p>Menos valoradas</p>
                <div>{props.form}</div>
                </NavbarS>
                )   
}


