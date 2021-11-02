import React from 'react'
import favicon from '../images/favicon.svg'
import logo from '../images/GitHub.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="footer-left-image">
                    <img className="footer-left-image__img" src={favicon} alt="Favicon" />
                </div>
            </div>
            <div className="footer-mid">
                <span>&copy; 2021</span>
                <span>GitHub All rights reserved</span>
                <span>Made By: <a href="https://github.com/akshatmittal61">Akshat Mittal</a></span>
            </div>
            <div className="footer-right">
                <div className="footer-right-image">
                    <img className="footer-right-image__img" src={logo} alt="GitHub" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
