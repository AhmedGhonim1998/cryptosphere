import React, { useContext, useEffect, useState } from 'react'
import { Button, InputGroup, Container, Table } from 'react-bootstrap'
import { CoinContext } from '../../assets/context/CoinContext';
export default function Home() {

    const { allcoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(() => {
        setDisplayCoin(allcoin)
    }, [allcoin])
    return (
        <>
            <section className='home'>
                <Container>
                    <div className="hero d-flex flex-column justify-content-center align-items-center">
                        <h1 className='text-capitalize text-center mb-0'>largest <br /> crypto marketplace</h1>
                        <p className='text-center w-75 my-4'>welcome to the world's largest cryptocurrrency marketplace. Sign up to explore more about cryptos</p>
                        <form className='d-flex justify-content-between align-items-center'>
                            <input type="text" placeholder='search crypto' />
                            <Button variant='secondary' className='searchBtn'>search</Button>
                        </form>
                    </div>
                    <div className="cryptoTable mt-4">
                        <div className="tableLayout">
                            <p>#</p>
                            <p className='text-capitalize'>coins</p>
                            <p className='text-capitalize'>price</p>
                            <p className='text-capitalize text-center'>24H change</p>
                            <p className='text-capitalize marketCap text-end'>market cap</p>
                        </div>
                        {
                            displayCoin.slice(0, 10).map((item, index) => (
                                <div className="tableLayout" key={index}>
                                    <p>{item.market_cap_rank}</p>
                                    <div className='currencyDataImg d-flex justify-content-start align-items-center'>
                                        <img src={item.image} alt="image" className='currencyImage' />
                                        <p className='my-auto'>{item.name + " - " + item.symbol}</p>
                                    </div>
                                    <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                                    <p>{Math.floor(item.price_change_percentage_24h * 10) / 100}</p>
                                    <p className='text-end'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}
