import './header.scss'
import logo from '../../assets/shared/logo.svg'
import iconMenu from '../../assets/shared/icon-hamburger.svg'
import iconClose from '../../assets/shared/icon-close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [menu, setMenu] = useState(false)
    const showMenu = () => {
        setMenu(true);
    }
    const closeMenu = () => {
        setMenu(false)
    }

    return(
        <header className='header'>
            <Link to='/'><img className='header__logo' src={logo} alt="Spacetourism Logo" /></Link>
            <button className='header__button' onClick={showMenu}>
                <img className='header__button-icon' src={iconMenu} alt="icon menu"/>
            </button>
            {menu && 
                <nav className='header__nav'>
                    <ul className='header__list'>
                        <li className='header__li'><Link to='/' className='header__li-link' onClick={closeMenu}>HOME</Link></li>
                        <li className='header__li'><Link to='/destinations' className='header__li-link' onClick={closeMenu}><b>01</b> DESTINATION</Link></li>
                        <li className='header__li'><Link to='/crew' className='header__li-link' onClick={closeMenu}><b>02</b> CREW</Link></li>
                        <li className='header__li'><Link className='header__li-link' onClick={closeMenu}><b>03</b> TECHNOLOGY</Link></li>
                    </ul>                
                    <button className='header__nav-button' onClick={closeMenu}><img src={iconClose} alt="" /></button>
                </nav>

            }
        </header>
    )
}