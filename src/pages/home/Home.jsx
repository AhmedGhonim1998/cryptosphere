import React from 'react'
import { Button, InputGroup, Container, Table } from 'react-bootstrap'
export default function Home() {
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
                    </div>
                </Container>
            </section>
        </>
    )
}
