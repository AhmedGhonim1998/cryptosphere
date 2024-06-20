import React, { useContext, useEffect, useState } from 'react'
import { Button, InputGroup, Container, Table } from 'react-bootstrap'
import { CoinContext } from '../../assets/context/CoinContext';
import { Link } from 'react-router-dom';
export default function Home() {

    const { allcoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input , setInput] = useState('');

    const inputHandler = (event)=>{
        setInput(event.target.value)
        if(event.target.value===""){
            setDisplayCoin(allcoin);
        }
    }
    const searchHandler = async(event)=>{
        event.preventDefault();
        const coins = await allcoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins);
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
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
                        <form className='d-flex justify-content-around align-items-center' onSubmit={searchHandler}>
                            <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder='search crypto' required/>
                            <datalist id='coinlist'>
                                {allcoin.map((item , index)=>(<option key={index} value={item.name}/>))}
                            </datalist>
                            <Button variant='secondary' className='searchBtn' type='submit'>search</Button>
                        </form>
                    </div>
                    <div className="cryptoTable mt-4">
                        <div className="tableLayout">
                            <p>#</p>
                            <p className='text-capitalize'>coins</p>
                            <p className='text-capitalize'>price</p>
                            <p className='text-capitalize'>24H change</p>
                            <p className='text-capitalize marketCap text-end'>market cap</p>
                        </div>
                        {
                            displayCoin.slice(0, 10).map((item, index) => (
                                <Link to={`/coin/${item.id}`} className="tableLayout nav-link" key={index} onClick={scrollToTop}>
                                    <p>{item.market_cap_rank}</p>
                                    <div className='currencyDataImg d-flex justify-content-start align-items-center'>
                                        <img src={item.image} alt="image" className='currencyImage' />
                                        <p className='my-auto'>{item.name + " - " + item.symbol}</p>
                                    </div>
                                    <p className='my-auto'>{currency.symbol} {item.current_price.toLocaleString()}</p>
                                    <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>{Math.floor(item.price_change_percentage_24h * 10) / 100}</p>
                                    <p className='text-end  my-auto'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                                </Link>
                            ))
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}
