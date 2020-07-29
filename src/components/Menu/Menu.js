import React from 'react';
import Logo from '../../assets/images/fontenet.png';
import './Menu.css'
import ButtonLink from './components/ButtonLink/ButtonLink.js'
import Button from '../Button/Button.js'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="BrvbsFlix logo image"></img>
            </a>
            <Button  href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )

}


export default Menu;