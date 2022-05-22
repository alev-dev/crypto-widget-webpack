import React from 'react';
import './style.css';
import CoinCard from './CoinCard';
function SectionsCryptos({ coins, setcoinSelected }) {
    return (
        <>
            <div className="cryto-widget-landing">
                {coins.map((coin) => (
                    <CoinCard key={coin.id} coin={coin} setcoinSelected={setcoinSelected} />
                ))}
            </div>
        </>
    );
}

export default SectionsCryptos;
