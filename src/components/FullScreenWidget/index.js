import React from 'react';
import CoinDetail from './CoinDetail';
import SectionsCryptos from './SectionsCryptos';
import './style.css';

function FullScreenWidget({ handleCloseClick, coins, coinSelected, setcoinSelected }) {
    return (
        <>
            <div className="crypto-widget__header__closeBtn" onClick={handleCloseClick}>
                X
            </div>
            {coinSelected ? (
                <CoinDetail setcoinSelected={setcoinSelected} coinSelected={coinSelected}></CoinDetail>
            ) : (
                <>
                    <div className="crypto-widget__header">
                        <div className="crypto-widget__header-title__fullScreen">Crypto Widget App</div>
                    </div>
                    <SectionsCryptos coins={coins} setcoinSelected={setcoinSelected} />
                </>
            )}
        </>
    );
}

export default FullScreenWidget;
