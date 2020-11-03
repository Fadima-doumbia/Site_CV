import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <div className = "hobbies">
                <h3>Intéret</h3>
                <ul>
                    <li className = "hobbies">
                        <i className = "fas fa-running"></i>
                        <span>Marche</span>
                    </li>
                   
                    <li className = "hobbies">
                        <i className = "fas fa-seedling"></i>
                        <span>Permaculture</span>
                    </li>
                    <li className = "hobbies">
                        <i className = "fas fa-images"></i>
                        <span>Théatre</span>
                    </li>
                    <li className = "hobbies">
                        <i className = "fas fa-cut"></i>
                        <span>Coiffure</span>
                    </li><li className = "hobbies">
                        <i className = "fas fa-play"></i>
                        <span>Musique</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hobbies;