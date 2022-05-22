import React from 'react';
import './style.css';
function Widget({ handleWidgetClick }) {
    return (
        <>
            <div className="crypto-widget__body-icon" onClick={handleWidgetClick}>
                <img
                    src="https://media.taringa.net/knn/fit:550/Z3M6Ly9rbjMvM2Y3M2MyMTM2NjkxMjI4NWJkYWI5YzQ0YTQ5M2U2NTUuZ2lm"
                    alt="Bitcoin"
                />
            </div>
        </>
    );
}

export default Widget;
