import React from 'react';

const OtherSkills = () => {
    return (
        <div className = "otherSkills">
            <h3>Autre Competences</h3>
            <div className ="list">
                <ul>
                    <li><i className="fas fa-check-square"></i>
                    Anglais courant</li>
                    {/* <li><i className="fas fa-check-square"></i>
                    Github</li> */}
                    <li><i className="fas fa-check-square"></i>
                    Opquast</li>
                    <li><i className="fas fa-check-square"></i>
                    Methode Agiles</li>
                </ul>

                <ul>
                    <li><i className="fas fa-check-square"></i>
                    Swift</li>
                    {/* <li><i className="fas fa-check-square"></i>
                    </li> */}
                    <li><i className="fas fa-check-square"></i>
                    Marvel</li>
                    <li><i className="fas fa-check-square"></i>
                    Figma</li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;