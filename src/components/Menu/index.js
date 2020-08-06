import React from 'react';
import Logo from '../../assets/img/j9rflix-logo.png';
// import ButtonLink from './components/ButtonLink'
import Button from '../Button'
import './Menu.css';

export default function Menu() {
    return (
        <nav className="Menu">
            <a href="/" target="_self"><img className="Logo" src={Logo} alt="J9RFLIX" /></a>
            <Button as="a" href="/" target="_self" className="ButtonLink">Novo vídeo</Button>
        </nav>
    )
}
