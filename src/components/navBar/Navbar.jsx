import React, { useContext } from 'react';
import cryptoLogo from '../../assets/cryptosphere.png';
import { Button, Row, Col } from 'react-bootstrap';
import { MdOutlineArrowOutward } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { CoinContext } from '../../assets/context/CoinContext'; // Ensure the path is correct

export default function Navbar() {
    const { setCurrency } = useContext(CoinContext);

    const currencyHandler = (e) => {
        switch (e.target.value) {
            case "usd":
                setCurrency({ name: "usd", symbol: "$" });
                break;
            case "eur":
                setCurrency({ name: "eur", symbol: "€" });
                break;
            case "inr":
                setCurrency({ name: "inr", symbol: "₹" });
                break;
            default:
                setCurrency({ name: "usd", symbol: "$" });
                break;
        }
    }

    return (
        <>
            <div className='navBar pb-0'>
                <Row className='navBarcontent'>
                    <Col lg={4} md={4} sm={4} xs={4} className='logoCol'>
                        <NavLink to='/'>
                            <img src={cryptoLogo} alt="img" className='logoIcon' />
                        </NavLink>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='my-auto ListColumn'>
                        <ul className='list-unstyled d-flex justify-content-evenly'>
                            <li className='text-capitalize'><NavLink className="nav-link" to="/">home</NavLink></li>
                            <li className='text-capitalize'><NavLink className='nav-link' to="/features">features</NavLink></li>
                            <li className='text-capitalize'><NavLink className='nav-link' to="/pricing">pricing</NavLink></li>
                            <li className='text-capitalize'><NavLink className='nav-link' to="/blog">blog</NavLink></li>
                        </ul>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='my-auto'>
                        <div className="navRightFlex d-flex justify-content-end flex-column">
                            <div className="navRight">
                                <select className='me-2' onChange={currencyHandler}>
                                    <option value="usd" className='text-uppercase'>usd</option>
                                    <option value="eur" className='text-uppercase'>eur</option>
                                    <option value="inr" className='text-uppercase'>inr</option>
                                </select>
                                <Button variant="primary" className='text-capitalize signUp'>sign up <MdOutlineArrowOutward />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <hr className='mt-2' />
        </>
    );
}
