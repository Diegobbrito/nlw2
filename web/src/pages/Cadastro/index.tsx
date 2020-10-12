import React from 'react';
import logoImg from '../../assets/images/logo.svg'
import loginImg from '../../assets/images/login.svg'
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import './styles.css';
import backIcon from '../../assets/images/icons/back.svg';


function Cadastro() {
    return (
        <div id="page-cadastro">
            
            <div id="page-cadastro-content" className="container">

                <div className="proffy-container">
               
                    <div className="proffy">
                        <img src={logoImg} alt="Proffy"/>
                        <h2>Sua plataforma de estudos online.</h2>
                        <img 
                        src={loginImg} 
                        alt="Plataforma de estudos"
                        className="back-image-cadastro"
                        />
                    </div>
                </div>
                <div className="cadastro">
                    <div className="cadastro-container">
                        <h1>Cadastro</h1>
                        <h2>
                            Preencha os dados abaixo para começar.
                        </h2>
                        <Input type="text" name="name" label="" placeholder="Nome"/>
                        <Input type="text" name="lastname" label="" placeholder="Sobrenome"/>
                        <Input type="email" name="email" label="" placeholder="E-mail"/>
                        <Input type="password" name="password" label="" placeholder="Senha"/>

                        <div className="buttons-container">
                            <Link to="/cadastro-concluido" className="log-in">
                                Concluir Cadastro
                            </Link>
                        </div>
                        <div className="top-container">
                            <Link to="/">
                                <img src={backIcon} alt="Voltar"/>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cadastro;