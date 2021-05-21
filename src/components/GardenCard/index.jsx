import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

GardenCard.propTypes = {
    
};

function GardenCard({url}) {
    return (
        <div className="garden">
            <div className="garden-header">
                <div className="garden-special">
            <img src={url}
            alt="" className="garden-image" />
            </div>
            <div className="garden-info">
                <h3 className="garden-name">Garden 1</h3>
                <span className="garden-area">Area: 100m</span>
            </div>
            </div>
            <p className="garden-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt iure adipisci eveniet? Ipsam iusto accusamus, pariatur sed nisi aspernatur repudiandae itaque consequatur? Possimus debitis saepe dignissimos eveniet voluptas, excepturi velit?</p>
            <h1>
                <Link to="/" className="garden-button">#   Into garden</Link>
            </h1>
        </div>
    );
}

export default GardenCard;