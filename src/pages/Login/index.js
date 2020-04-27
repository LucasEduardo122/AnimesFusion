import React, {useState} from 'react';
import Header from '../../components/Headers';

import imageLogin from '../../assets/imageLogin.png'

import './styles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar(e) {
        e.preventDefault();

        
    }
    return (
        <div>
            <Header />
            <div className="container">
            <img src={imageLogin} alt="" />
                <section className="section">

                    <form className="form" onSubmit={logar}>

                        <h1>Faça seu Login</h1>
                        <input type="text"
                            placeholder="Insira seu E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input type="password"
                            placeholder="Insira sua Senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        /><br/>
                        <button>Logar</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Login;