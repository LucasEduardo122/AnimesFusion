import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import LogoAnimes from '../../assets/AnimesLogo.png';
import FusionAnimes from '../../assets/FusionLogo.png';

const Header = () => {
    return (
        <div className="header">
            <nav className="menu">
                <ul>
                    <li className="active"><Link to="/home">Animes</Link></li>
                    <li className="china"><Link to="/china">China</Link></li>
                    <li className="ovas"><Link to="/ovas">Ovas</Link></li>

                    <img src={LogoAnimes} alt="Animes" />
                    <img className="Fusion" src={FusionAnimes} alt="Fusion" />

                    <li className="cadastro"><Link to="/register">Cadastro</Link></li>
                    <li className="login"><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    )}


export default Header;