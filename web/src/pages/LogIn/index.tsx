import React from 'react';
import logoImg from '../../assets/images/logo.svg'
import loginImg from '../../assets/images/login.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import './styles.css';

function LogIn() {
    return (
        <div id="page-login">
            <div id="page-login-content" className="container">
                <div className="log-container">
                    <div className="proffy">
                        <img src={logoImg} alt="Proffy"/>
                        <h2>Sua plataforma de estudos online.</h2>
                        <img 
                        src={loginImg} 
                        alt="Plataforma de estudos"
                        className="back-image"
                        />
                    </div>
                </div>
                <div className="login">
                    <div className="login-container">
                        <h1>Fazer login</h1>
                        <Input type="email" name="email" label="" placeholder="E-mail"/>
                        <Input type="password" name="password" label="" placeholder="Senha"/>

                        <div className="buttons-container">
                            <Link to="/landing" className="log-in">
                                Entrar
                            </Link>
                        </div>
                        <div className="login-password">
                        <input type="checkbox" name="" id=""></input>
                        <h3>Lembrar-me</h3>
                        <a href="">Esqueci minha senha</a>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="cadastro">

                        <h2>Não tem conta?</h2>
                        <a href="">Cadastre-se</a>
                    </div>
                    
                    <span className="total-connections">
                        É de graça <img src={purpleHeartIcon} alt="Coração roxo"/>
                    </span>
                </footer>
            </div>
        </div>
    )
}

export default LogIn;