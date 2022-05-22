import React from 'react';
import { useState, useEffect } from 'react';
import FullScreenWidget from '../FullScreenWidget';
import axios from 'axios';
import Widget from '../Widget';
import './style.css';
function MainLayout() {
    const [fullScreen, setfullScreen] = useState(false);
    const [coins, setcoins] = useState([]);
    const [coinSelected, setcoinSelected] = useState(null);
    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            )
            .then((response) => {
                setcoins(response.data);
            });
    }, []);
    const handleWidgetClick = () => {
        setfullScreen(true);
    };

    const handleCloseClick = () => {
        setfullScreen(false);
    };

    return (
        <div className={`${fullScreen ? 'crypto-widget-fullScreen' : 'crypto-widget'}`}>
            {!fullScreen ? (
                <Widget handleWidgetClick={handleWidgetClick} />
            ) : (
                <FullScreenWidget
                    coins={coins}
                    handleCloseClick={handleCloseClick}
                    coinSelected={coinSelected}
                    setcoinSelected={setcoinSelected}
                />
            )}
        </div>
    );
}

export default MainLayout;
