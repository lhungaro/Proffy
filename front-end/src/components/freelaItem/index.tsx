import React, { useState, useEffect } from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"
import './styles.css'
import api from '../../services/api'


export interface Freela {
    id: number;
    name: string;
    description: string;
    status: number;
    area: string;
    ranking: string;
  }
  
  interface FreelaItemProps {
    freela: Freela;
  }
  

  const FreelaItem: React.FC<FreelaItemProps> = ({ freela }) => {

return(
    <div className="freela-item">
    <header>
        <img src="https://img.freepik.com/fotos-gratis/empresario-de-baixo-angulo_23-2148825893.jpg?w=1380&t=st=1666002190~exp=1666002790~hmac=0ea6c49f5bd6ef23faf3a3401f84a6b42efd3a5d3e11b01fd0f5ceb567cd9363" alt="" />
            <div>
                <strong className='strong'>{freela.name}</strong>
                <span>{freela.area}</span>
            </div>
        </header>

        <p>{freela.description}</p>
        <footer>
            <p>Preço/hora
               <strong>R$ 40,00</strong> 
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="" />
                Entrar em contato
            </button>
        </footer>
</div>
    )
}

export default FreelaItem;