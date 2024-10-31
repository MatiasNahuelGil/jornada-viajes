import './Header.css';
import Menu from "../Menu/Menu";
import { useState, useEffect } from 'react';
import logoJornada from '../../assets/logo/jornadaLogo.png';

export default function Header() {
    const [activeLink, setActiveLink] = useState("/");
    const [isOpen, setIsOpen] = useState(false);

    const handleClickMenu = () => {
        setIsOpen(prevState => !prevState);
        console.log("haz abierto el menu");
    };

    const handleScroll = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="header__navBar">
                <img src={logoJornada} alt="logo de jornada viajes" />
                <ul className={`header__container__menu ${isOpen ? 'open' : ''}`}>
                    <Menu activeLink={activeLink} setActiveLink={setActiveLink} />
                </ul>
                <div className='nav__icons'>
                    <i 
                        onClick={handleClickMenu} 
                        className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`} 
                        id="menu-icon">
                    </i>
                </div>
            </nav>
        </header>
    );
}
