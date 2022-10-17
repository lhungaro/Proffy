import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/icons/Freela.svg';
import './styles.css';

interface PageHeaderProps{
    title:string;
}

const PageHeader : React.FC<PageHeaderProps> = (props) => {

return(
    <div className='page-header-component' >
         <header className="page-header">
                    <div className="top-bar-container">
                        <Link to="/">
                            <img src={backIcon} alt="" />
                        </Link>
                        <img src={logoImg} alt="" />
                    </div>

                    <div className="header-content">
                        <div className='title'>
                            <h2>{props.title}</h2>
                        </div>
                    </div>
                </header>
    </div>
    )
}

export default PageHeader;