import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className = "content">
                    <h1>Farima DOUMBIA</h1>
                    <h2>Hello!! Moi c'est Farima, j'ai 23 ans et je suis 
                        en reconversion professionnelle depuis 2019. 
                        En route pour decouvrir mon parcours!
                    </h2>
                    <div className="pdf">
                        <a href="../media/CV Farima DOUMBIA DEV.WEB.pdf" target="_blank">Telecharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;