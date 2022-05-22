import './style.css';
import React from 'react';
function CoinDetail({ setcoinSelected, coinSelected }) {
    return (
        <div className="crypto-details">
            <div className="crypto-details-back" onClick={() => setcoinSelected(null)}>
                Back
            </div>

            <div className="crypto-details-header">
                <div className="crypto-details-title">{coinSelected.name}</div>
            </div>
            <div className="crypto-details-body">
                <div className="crypto-details-body-icon">
                    <img src={coinSelected.image} alt={coinSelected.name} />
                </div>
                <div className="crypto-details-body-description">
                    <div className="crypto-details-body-section">
                        <div className="name">current_price :</div>
                        <div className="value">{coinSelected.current_price}</div>
                    </div>
                    <div className="crypto-details-body-section">
                        <div className="name">price_change_24h :</div>
                        <div className="value">{coinSelected.price_change_24h}</div>
                    </div>
                    <div className="crypto-details-body-section">
                        <div className="name">change_percent_24h :</div>
                        <div className="value">{coinSelected.price_change_percentage_24h}</div>{' '}
                    </div>
                    <div className="crypto-details-body-section">
                        <div className="name">low_24h :</div>
                        <div className="value">{coinSelected.low_24h}</div>
                    </div>
                    <div className="crypto-details-body-section">
                        <div className="name">circulating_supply</div>
                        <div className="value">{coinSelected.circulating_supply}</div>
                    </div>
                    <div className="crypto-details-body-section">
                        <div className="name">total_volume :</div>
                        <div className="value">{coinSelected.total_volume}</div>
                    </div>
                    <div className="crypto-details-body-section">
                        <div className="name">total_supply :</div>
                        <div className="value">{coinSelected.total_supply}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinDetail;
