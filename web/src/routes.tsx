import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LogIn from './pages/LogIn';
import Cadastro from './pages/Cadastro';
import CadastroConcluido from './pages/CadastroConcluido';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={LogIn} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/cadastro-concluido" exact component={CadastroConcluido} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />

        </BrowserRouter>
    );
}

export default Routes;