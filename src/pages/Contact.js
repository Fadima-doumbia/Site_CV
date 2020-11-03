import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className = "contact">
            <Navigation/>

            <div className = "contactContent">
                <div className = "header"></div>
                <div className = "contactBox">
                    <h1>Contactez-moi</h1>
                    <ul className = "">
                        <li>
                            <i className = "fas fa-map-market-alt"></i>
                            <span>Tremblay En France</span>
                        </li>
                        <li>
                            <i className = "fas fa-mobile-alt"></i>
                            <CopyToClipboard text = "07 69 32 49 45">
                            <span
                            className = "clickInput"
                            onClick = {() => { alert('Telephone copié')}}>
                                07 69 32 49 45
                            </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className = "fas fa-envelope"></i>
                            <CopyToClipboard text = "fadimadoumbia1@gmail.com">
                            <span
                            className = "clickInput"
                            onClick = {() => { alert('Email copié')}}>
                                fadimadoumbia1@gmail.com
                            </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className = "socialNetwork">
                    <ul>
                        <a href = "https://www.linkedin.com/in/farimadoumbia" target = "_blank" rel = "noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className = "fab fa-linkedin"></i>
                        </a>
                        <a href = "https://github.com/Fadima-doumbia" target = "_blank" rel = "noopener noreferrer">
                            <h4>Github</h4>
                            <i className = "fab fa-github"> </i>
                        </a>
                        <a href = "" target = "_blank" rel = "noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className = "fab fa-twitter"> </i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;