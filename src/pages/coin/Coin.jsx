import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../assets/context/CoinContext';
import { Spinner } from 'react-bootstrap';

export default function Coin() {

    const { coinId } = useParams();
    const [coinData, setCoinData] = useState();
    const { currency } = useContext(CoinContext);
    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-FyLGhYwKB7QSoQcXW7GCKjb4' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(response => response.json())
            .then(response => setCoinData(response))
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchCoinData();
    }, [currency])

    if (coinData) {
        return (
            <>
                <div className='coin'>
                    <div className="coinName">
                        <img src={coinData.image.large} alt="img" />
                        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
            <div className="spinContent d-flex flex-column justify-content-center align-items-center m-auto">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            </>
        )
    }
}
