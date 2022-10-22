import {React, useState, useEffect} from "react";
import Footer from "../../components/footer";
import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/icons/Freela.svg';
import PageHeader from "../../components/pageHeader";
import FreelaItem, { Freela } from "../../components/freelaItem";
import api from '../../services/api'
import './styles.css';
import { FileWatcherEventKind } from "typescript";


function FreelaList(){

  const [freela, setFreela] = useState([]);

  useEffect(() => {api.get("/project")
    .then((response) => setFreela(response.data))
    .catch((error) => console.log(error));
    },[]);

    console.log(freela);
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
                    {freela.map((freela: Freela) => {
                    return <FreelaItem key={freela.id} freela={freela} />;
                    })}
                </div>
              
            </div>
            <Footer></Footer>
        </div>
    )
}
export default FreelaList;