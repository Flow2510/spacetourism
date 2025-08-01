import './header.scss'
import logo from '../../assets/shared/logo.svg'
import iconMenu from '../../assets/shared/icon-hamburger.svg'
import iconClose from '../../assets/shared/icon-close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [menu, setMenu] = useState(false);
    const [selectedPage, setSelectedPage] = useState(0)
    const menuList = ["HOME", "DESTINATIONS", "CREW", "TECHNOLOGY"];

    const showMenu = () => {
        setMenu(true);
    }
    const closeMenu = () => {
        setMenu(false)
    }

    return(
        <header className='header'>
            <Link to='/home'><img className='header__logo' src={logo} alt="Spacetourism Logo" /></Link>
            <button className='header__button' onClick={showMenu}>
                <img className='header__button-icon' src={iconMenu} alt="icon menu"/>
            </button>
            {menu && 
                <nav className='header__nav'>
                    <ul className='header__list'>
                        {menuList.map((item, index) => (
                            <li key={item.toLowerCase()} className='header__li'><Link to={item} className={selectedPage === index ? 'header__li-link--selected' : "header__li-link"} onClick={ () => {closeMenu(); setSelectedPage(index)}}>{item}</Link></li>
                        ))}
                    </ul>                
                    <button className='header__nav-button' onClick={closeMenu}><img src={iconClose} alt="" /></button>
                </nav>

            }
        </header>
    )
}


