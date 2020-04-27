import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import capa from '../../assets/capa.jpg';
import Header from '../../components/Headers';

const Home = () => {
    
    return (

        <div>
            <Header />
            <div className="Temporada">
                <h3>Animes da Temporada</h3>
            </div>
            <div className="data">
                <ul>
                    <li><Link to="#">Segunda</Link></li>
                    <li><Link to="#">Terça</Link></li>
                    <li><Link to="#">Quarta</Link></li>
                    <li><Link to="#">Quinta</Link></li>
                    <li><Link to="#">Sexta</Link></li>
                    <li><Link to="#">Sábado</Link></li>
                    <li><Link to="#">Domingo</Link></li>
                </ul>
            </div>
            <section className="sec">
            <div className="grade">
                <div className="container">
            <div className="imgTemporada">
                <Link to="">
                    <article className="anime-item">
                            <figure className="anime-entrar"> 
                                    <img src={capa} alt=""/>
                                    <figcaption className="anime-fig">

                                    Appare-Ranman!
      
                                    </figcaption>
                            </figure>
                    </article>
                </Link>
            </div>
            </div>
            </div>
            </section>

        </div>
    )
}


export default Home;