import React from "react";
import Footer from "../../components/footer";
import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/icons/Freela.svg';
import PageHeader from "../../components/pageHeader";
import FreelaItem from "../../components/freelaItem";

import './styles.css';

function FreelaList(){
    return (
        <div id="page-freela-list">
            <div id="freela-list" className="container">
                <PageHeader title="Estes são os Freelas disponíveis."/>
                <div className="form-container">
                    <form id="search-freelas" className="container">
                        <div className="input-block">
                            <label htmlFor="subject">Area</label>
                            <input type="text" id="subject" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="hour">Valor Hora</label>
                            <input type="text" id="hour" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="time">Dias disponíveis</label>
                            <input type="text" id="time" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="page-content">
                <div className="list">
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                    <FreelaItem/>
                </div>
              
            </div>
            <Footer></Footer>
        </div>
    )
}
export default FreelaList;