import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre/';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/Sobre" element={<Sobre/>} />
                

            </Routes>         
            
        </BrowserRouter>
        
    ); 
}

export default Rotas;