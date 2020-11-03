import React from 'react';

const ProgressBar = (props) => {
console.log(props)

    return (
        <div className={props.className}>
            <h3>{props.title}</h3> 
            <div className="years">
                <span>Année d'experience</span>
                <span> 1 an</span>
                <span> 2 ans</span>
            </div>


            {/* <div>
                {
                    props.languages.mapp((item) => {
                        let xpYears = 1; 
                        let progressBar = item.xp / xpYears * 100 + '%'
                       
                    })
                }
            </div> */}
        </div>
    );
};

export default ProgressBar;