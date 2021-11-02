import React from 'react'
import favicon from '../images/favicon.svg'
import logo from '../images/GitHub.svg'
import Theme from './theme'

const Header = ({ open }) => {
    return (
        <header className="header">
            <div className="header-left">
                <div className="header-left-toggle" onClick={open}>
                    <span className="material-icons">menu</span>
                </div>
                <a href="https://github.com" className="header-left-image">
                    <img className="header-left-image__img" src={favicon} alt="Favicon" />
                    <img className="header-left-image__img" src={logo} alt="GitHub" />
                </a>
            </div>
            <div className="header-right">
                <Theme />
            </div>
        </header>
    )
}

export default Header
