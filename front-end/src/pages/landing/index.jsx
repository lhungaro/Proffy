import React, { useState, useEffect } from 'react';

import logoImg from '../../assets/images/icons/Freela.svg';
import landingImg from '../../assets/images/jobhunt.svg';

import registerIcon from '../../assets/images/icons/register-icon.svg';
import navigationIcon from '../../assets/images/icons/navigation-icon.svg';
import chatIcon from '../../assets/images/icons/chat-icon.svg';
import payIcon from '../../assets/images/icons/pay-icon.svg';
import administrationIcon from '../../assets/images/icons/administration-icon.svg';
import devIcon from '../../assets/images/icons/dev-icon.svg';
import webdesignIcon from '../../assets/images/icons/webdesign-icon.svg';
import mobileIcon from '../../assets/images/icons/mobile-icon.svg';
import marketingIcon from '../../assets/images/icons/marketing-icon.svg';
import uiuxIcon from '../../assets/images/icons/uiux-icon.svg';

import './styles.css';

function Landing() {

  return (
    <div id="page-landing">
      <div className='page1'>
      <div id="page-landing-content" className="container">
        <div className='header'>
          <div className='logo-header'>
              <img src={logoImg} alt="" />
          </div>
          <div>
            <a href="">Fale conosco</a>
            <a href="">Cadastre-se</a>
            <a href="">Login</a>
          </div>
        </div>
        <div className="logo-container">
          <h1>Nunca foi tão fácil <br />
            realizar seus projetos!</h1>
          <h2>Encontre os melhores freelancer para seu projeto.
          </h2>
        </div>
        <div  className="hero-image">
        <img
          src={landingImg}
          alt="Plataforma de estudos"
        />
        </div>

        <div className="buttons-container">
          <a  className="study">
            Procure um Freela
          </a>

          <a  className="give-classes">
            Seja um Freela
          </a>
        </div>

        <span className="total-connections">
          Total de 2500 conexões já realizadas 
        </span>
      </div>
      </div>

      <div className='page2'>
        <div className='title'>
          <h1>Como funciona a <br /> plataforma?</h1>
        </div>
        <div className='cards'>
          <div id='card1' className='card1 card'>
            <img src={registerIcon} alt="" />
            <p><b> Empregador :</b> Publique o seu projeto de forma fácil e gratuita. Basta preencher um título, descrição e orçamento</p> 
            <hr />
            <p className='subtext'><b>Freelancer :</b> Inscreva-se de forma fácil e gratuita e obtenha 10 licitações gratuitas/mês</p>
          </div>

          <div id='card2' className='card2 card'>
            <img src={navigationIcon} alt="" />
            <p><b> Empregador :</b> Navegue pelos perfis, avaliações, entreviste, contrate o seu favorito e inicie o projeto</p> 
            <p className='subtext'><b>Freelancer :</b> Navegue pelos projetos e licite nos que lhe interessam</p>
          </div>

          <div id='card3' className='card3 card'>
            <img src={chatIcon} alt="" />
            <p><b> Empregador & Freelancer :</b> Use a plataforma para conversar e partilhar ficheiros</p> 
          </div>

          <div id='card4' className='card4 card'>
            <img src={payIcon} alt="" />
            <p><b> Empregador :</b>  Só pague pelo trabalho quando este estiver concluído e estiver 100% satisfeito com a qualidade.</p> 
            <p className='subtext'><b>Freelancer :</b> Receba o dinheiro acordado pelo trabalho que foi completado menos 10% para taxas</p>
          </div>
        </div>
      </div>
    {/* Pagina 3 */}
      <div className='page3'>
        <div className='title'>
            <h1>Algumas areas dos nossos Freelas</h1>
        </div>
        <div className='areas-cards'>
          <div className='areas-card areas-card1'>
            <img src={marketingIcon} alt="" />
            <div>
              <h4>Marketing</h4>
              <p>Se você quer acelerar o crescimento do seu negócio, precisa atrair mais pessoas e ter uma estratégia montada para convertê-los em clientes.</p>
            </div>
          </div>
          <div className='areas-card areas-card2'>
            <img src={devIcon} alt="" />
            <div>
              <h4>Desenvolvimento</h4>
              <p>Do planejamento à execução, cuidamos de cada detalhe do seu projeto. Tudo com muita expertise, agilidade e uma abordagem focada na experiência do usuário.</p>
            </div>
          </div>
          <div className='areas-card areas-card3'>
            <img src={mobileIcon} alt="" />
            <div>
              <h4>Mobile</h4>
              <p>Ajudamos nossos clientes a alcançarem alto desempenho em desenvolvimento de Software, Mobile e Integrações de Sistemas.</p>
            </div>
          </div>
          <div className='areas-card areas-card4'>
            <img src={administrationIcon} alt="" />
            <div>
              <h4>Administração</h4>
              <p>Aplicamos nossa expertise e visão analítica para você tomar decisões mais lucrativas. Organizamos seu financeiro. Analisamos seus números. Melhoramos seus resultados.</p>
            </div>
          </div>
          <div className='areas-card areas-card5'>
            <img src={webdesignIcon} alt="" />
            <div>
              <h4>Web Desing</h4>
              <p>Aumente seus resultados, vendendo mais no mundo digital. Agência de resultados digitais. Especialistas em estratégias digitais, tecnologia criativa e projetos de branding.</p>
            </div>
          </div>
          <div className='areas-card areas-card6'>
            <img src={uiuxIcon} alt="" />
            <div>
              <h4>UX/UI</h4>
              <p>Alta qualidade em projetos de UX Design e User Interface. Prepare-se para o futuro com um novo produto digital. Queremos conhecer sua empresa.</p>
            </div>
          </div>
          
        </div>
      </div>

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
      <div className='line'></div>
      <span className='direitos'>© 2022 PNG - Todos os direitos reservados</span>
    </div>
  )
}

export default Landing;