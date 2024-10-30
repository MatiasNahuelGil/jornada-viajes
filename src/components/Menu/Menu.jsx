import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu({activeLink,setActiveLink}){

     const handleClick = (link) =>{
        setActiveLink(link)
     }

    return (
        <>
          <li className="header__list"  >
              <Link onClick={()=> handleClick('/')} className={activeLink === '/' ? 'active' : ''} to="/">Inicio</Link>
          </li>
          <li className="header__list">
              <Link onClick={()=> handleClick('/blog')} className={activeLink === '/blog' ? 'active' : ''} to="/blog">Blog</Link>
          </li>
          <li className="header__list">
              <Link onClick={()=> handleClick('/paquetes')} className={activeLink === '/paquetes' ? 'active' : ''} to="/paquetes">Paquetes de viaje</Link>
          </li>
          <li className="header__list">
               <Link onClick={()=> handleClick('/contacto')} className={activeLink === '/contacto' ? 'active' : ''} to="/contacto">Contacto</Link>
          </li>
        </>
    )
}