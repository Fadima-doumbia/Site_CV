import React from 'react';

const Experiences = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>
            <div className= "exp-1">
                <h4>Préparation de commande</h4>
                <h5>Janv.2019– Mai.2019</h5>
                <p>
                    DRAEGER - Marly la ville
                    {/* Préparer les commandes : conditionnement de cartons, de colis, préparation de palettes, …
                    Assurer la sécurité des produits jusqu'à leur réception par le client */}
                </p>
            </div>

            <div className= "exp-2">
                <h4>Agent intérimaire des impôts</h4>
                <h5>Nov.2018– Dec.2018</h5>
                <p>
                    DRFIP - Paris
                </p>
            </div>,
            <div className= "exp-3">
                <h4>Stage AIDE COMPTABLE</h4>
                <h5>Mai.2017 – Juil.2017</h5>
                <p>
                    Semipfa - Tremblay En France
                </p>
            </div>
        </div>

    );
};

export default Experiences;