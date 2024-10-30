//Componente Header, contiene la barra de navegación y el banner 
import './Header.css'
import Menu from "../Menu/Menu";
import { useState } from 'react';
import logoJornada from '../../assets/logo/jornadaLogo.png'


export default function Header (){

    const [activeLink, setActiveLink] = useState("/")

    return(
       <header className="header">
           
           <nav className="header__navBar">
               <img src={logoJornada} alt="logo de jornada viajes" />
               <ul className="header__container__menu">
                  <Menu activeLink={activeLink} setActiveLink={setActiveLink}/>
               </ul>
           </nav>
           
      </header> 
    )
      
}