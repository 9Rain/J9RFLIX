import React from 'react';
import Logo from '../../assets/img/j9rflix-logo.png';
// import ButtonLink from './components/ButtonLink'
import { Link } from 'react-router-dom';
import Button from '../Button'
import './Menu.css';

export default function Menu() {
    return (
        <nav className="Menu">
            <Link to="/"><img className="Logo" src={Logo} alt="J9RFLIX" /></Link>
            <Button as={Link} to="/cadastro/video" target="_self" className="ButtonLink">Novo vídeo</Button>
        </nav>
    )
}
