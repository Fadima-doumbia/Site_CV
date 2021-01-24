// import React, { Component } from 'react';
// import ProgressBar from './ProgressBar';

// class Languages extends Component {
//     state = {
//         languages: [
//             {id: 1, value: "HTML", xp: 0.8},
//             {id: 2, value: "CSS", xp: 0.8},
//             {id: 3, value: "JavaScript", xp: 0.7},
//             {id: 5, value: "Express", xp: 0.6},
//             {id: 6, value: "SQL", xp: 0.5}
//         ],

//         frameworks: [
//             {id: 1, value: "Sass", xp: 0.1},
//             {id: 2, value: "Bootstrap", xp: 0.7},
//             {id: 3, value: "React", xp: 0.6},

//         ]
//     }



//     render() {
//         let {languages, frameworks} = this.state;
//         return (
//             <div className="languagesFrameworks">
//                <ProgressBar 
//                     languages={languages}
//                     className="languagesDisplay"
//                     title="languages"
//                />
//                <ProgressBar 
//               frameworks={frameworks}
//                title="frameworks & bibliothèque"
//                className="frameworksDisplay"
//                />
//             </div>
//         );
//     }
// }

// export default Languages;

import React from 'react';

const Languages = () => {
    return (
        <div className="formations">
            <h3>formations</h3>
            <div className= "exp-D">
                <h4>Developpeuse Web - Web mobile</h4>
                <h5>Simplon.co Aulnay-sous-Bois Juillet - Décembre 2020</h5>
                <p>
                <h5>Frameworks</h5>
                <div className = "frameworks">

                <li> • ExpressJs</li>
                        <li> • ReactJs </li>
                        <li> • NodeJs </li>
                        <li> • Bootstrap </li>
                        </div>
                <h5>Languages</h5>

                <div className = "langages">

                <li> • HTML </li>
                        <li> • CSS </li>
                        <li> • JavaScript </li>
                        <li> • SQL </li>
                </div>
                <h5>Outils</h5>

                <div className = "outils">
                    <li> • Visual Studio Code </li>
                        <li> • Git </li>
                        <li> • Postman </li>
                        <li> • WAMP</li>
                        </div>
                    {/* <ul className = "langage">Langages Informatiques : 
                        <li>HTML</li>
                        <li>css</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                    </ul>
                    <ul className = "frameworks"> Frameworks : 
                        <li>ExpressJs</li>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>Bootstrap</li>
                    </ul>
                    <ul className = "outils">Outils : 
                        <li>Visual Studio Code</li>
                        <li>Git</li>
                        <li>Postman</li>
                        <li>WAMP</li>
                    </ul> */}
                </p>
            </div>

            <div className= "exp-H">
                <h4>Hackeuse</h4>
                <h5>Simplon.co Aulnay-Sous-Bois Fev.2020</h5>
                <p>
                <h5>Frameworks</h5>
                <div className = "frameworks">
                        <li> • Bootstrap </li>
                        </div>
                <h5>Languages</h5>

                <div className = "langages">

                <li> • HTML </li>
                        <li> • CSS </li>
                        <li> • JavaScript </li>
                </div>
                <h5>Outils</h5>

                <div className = "outils">
                    <li> • Bracket </li>
                        <li> • Photoshop </li>
                        <li> • Illustrator </li>
                        </div>                
                    </p>
            </div>
        </div>

    );
};

export default Languages;