import React, { useState, useEffect } from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"
import './styles.css';


function FreelaItem() {

return(
    <div className="freela-item">
    <header>
        <img src="https://img.freepik.com/fotos-gratis/empresario-de-baixo-angulo_23-2148825893.jpg?w=1380&t=st=1666002190~exp=1666002790~hmac=0ea6c49f5bd6ef23faf3a3401f84a6b42efd3a5d3e11b01fd0f5ceb567cd9363" alt="" />
            <div>
                <strong>Mauro Dias</strong>
                <span>Designer</span>
            </div>
        </header>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat culpa cum odit totam, nostrum quas omnis, eaque eos vel unde vitae tenetur laboriosam quibusdam accusantium facere. Placeat, maiores fugiat!</p>
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