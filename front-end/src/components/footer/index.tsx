import React, { useState, useEffect } from 'react';
import './styles.css';

function Footer() {

return(
    <div className='footer-component' >
        <div className='page4'>
            <div className='footers'>
                <div className='footer'>
                    <h2>Sobre</h2>
                    <a href="">Acerca de nós</a>
                    <a href="">Como funciona</a>
                    <a href="">Contato</a>
                    <a href="">Fórum</a>
                    <a href="">Redes sociais</a>
                </div>

                <div className='footer'>
                    <h2>Empresas</h2>
                    <a href="">Publicar projetos</a>
                    <a href="">Acordo de Confidencialidade</a>
                    <a href="">Perguntas Frequentes</a>
                </div>

                <div className='footer'>
                    <h2>Freelancers</h2>
                    <a href="">Criar Perfil</a>
                    <a href="">Como escrever uma fatura</a>
                    <a href="">Calculadora</a>
                </div>

                <div className='footer'>
                    <h2>Termos</h2>
                    <a href="">Código de conduta</a>
                    <a href="">Taxas e Custos</a>
                    <a href="">Política de Resolução de Disputas</a>
                    <a href="">Política de Privacidade</a>
                    <a href="">Termos de Acordo do Utilizador</a>
                </div>
            </div>
        </div>

        <div className='line'>
        </div>

        <span className='direitos'>© 2022 PNG - Todos os direitos reservados</span>

    </div>
    )
}

export default Footer;