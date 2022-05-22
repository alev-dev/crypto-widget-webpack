import React from 'react';
import './style.css';
export default function CoinRow({ coin, setcoinSelected }) {
    return (
        <div className="crypto-widget-card">
            <div className="cryto-widget-card-header">
                <div className="crypto-widget-card-header-title">{coin.name}</div>
            </div>

            <div className="crypto-widget-card-body">
                <div className="crypto-widget-card-icon">
                    <img src={coin.image} alt={coin.name} />
                </div>
                <div className="crypto-widget-card-body-price">{coin.current_price}</div>
                <div className="crypto-widget-card-body-percentage">{coin.percentage}</div>
            </div>
            <div className="crypto-widget-card-footer">
                <button className="crypto-widget-card-footer__btn" onClick={() => setcoinSelected(coin)}>
                    See More
                </button>
            </div>
        </div>
    );
}
