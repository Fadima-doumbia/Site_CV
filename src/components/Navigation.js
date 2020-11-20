import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className = "sidebar">
            <div className = "id">
                <div className = "idContent">
                    <img src = "../media/profil_picture.jpg" alt="profil-pic" height= "180" width="140"/>
                    <h3>Farima DOUMBIA</h3>
                </div>
            </div>
            <div className = "navigation">
                <ul>
                    <li>
                        <NavLink exact to = "/" activeClassName = "navActive" className = "navLink">
                            {/* avec avtiveClasseName je mets une class que quand le lien est active elle met une couleur sur l'element cliqué pour le differencier des autres */}
                            <i className = "fas fa-home"></i>
                            <span className = "span">Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to = "/Compétences" activeClassName = "navActive" className = "navLink">

                            {/* avec avtiveClasseName je mets une class que quand le lien est active elle met une couleur sur l'element cliqué pour le differencier des autres */}
                            <i className = "fas fa-mountain">
                            </i>
                            <span className = "span">Compétences</span>
                            </NavLink>

                    </li>
                    <li>
                        <NavLink to = "/Portfolio" activeClassName = "navActive" className = "navLink">
                            {/* avec avtiveClasseName je mets une class que quand le lien est active elle met une couleur sur l'element cliqué pour le differencier des autres */}
                            <i className = "fas fa-images"></i>
                            <span className = "span">Portfolio</span>
                        </NavLink>
                    </li>
                    <li> 
                        <NavLink to = "/Contact" activeClassName = "navActive" className = "navLink">
                            {/* avec avtiveClasseName je mets une class que quand le lien est active elle met une couleur sur l'element cliqué pour le differencier des autres */}
                            <i className = "fas fa-address-book"> </i>
                            <span className = "span">Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className = "socialNetwork">
                <ul>
                    <li>
                        <a href = "https://www.linkedin.com/in/farimadoumbia" target = "_blank" rel = "noopener noreferrer">
                            <i className = "fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href = "https://github.com/Fadima-doumbia" target = "_blank" rel = "noopener noreferrer">
                            <i className = "fab fa-github"> </i>
                        </a>
                    </li>
                    {/* <li>
                        <a href = "" target = "_blank" rel = "noopener noreferrer">
                            <i className = "fab fa-google"> </i>
                        </a>
                    </li> */}
                </ul>
            </div>
            <div className = "signature">
                <p>From Fadima_Doumbia -2020</p>
            </div>
        </div>
    );
};

export default Navigation;