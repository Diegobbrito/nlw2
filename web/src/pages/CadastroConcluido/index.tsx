import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import cadastroImg from '../../assets/images/cadastro.svg';
import okIcon from '../../assets/images/icons/ok.svg';


function CadastroConcluido() {
    return (
        <div id="page-cadastroconcluido">
            

                <div id="cadastroconcluido-container">
                    <img 
                            src={cadastroImg} 
                            className="back-image"
                            alt="Backgroung img"
                        />
                    <div className="text-cadastro">
               
                        <div className="cadastro-concluido">
                            <div className="cadastro-concluido-image">

                                <img 
                                src={okIcon} 
                                className="okIcon"
                                alt="Icon right"
                                />
                            </div>
                            <h1>Cadastro concluído</h1>
                            <div className="text-h2">

                            <h2>Agora você faz parte da plataforma da Proffy.</h2>
                            <h2>Tenha uma ótima experiência.</h2>
                            </div>
                        </div>
                            
                        <div className="button-container">
                            <Link to="/landing" className="logar">
                                Fazer login
                            </Link>
                        </div>
                            
                    </div>
                
            </div>
        </div>
    )
}

export default CadastroConcluido;