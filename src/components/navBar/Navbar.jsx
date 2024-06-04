import React from 'react'
import cryptoLogo from '../../assets/cryptosphere.png'
import { Button, Row, Col } from 'react-bootstrap';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <div className='navBar pb-0'>
                <Row className='navBarcontent'>
                    <Col lg={4} md={12} sm={12} className='logoCol'>
                        <img src={cryptoLogo} alt="img" className='logoIcon' />
                    </Col>
                    <Col lg={4} md={12} sm={12} className='my-auto'>
                        <ul className='list-unstyled d-flex justify-content-evenly'>
                            <li className='text-capitalize'><NavLink className="nav-link">home</NavLink></li>
                            <li className='text-capitalize'><NavLink className='nav-link'>features</NavLink></li>
                            <li className='text-capitalize'><NavLink className='nav-link'>pricing</NavLink></li>
                            <li className='text-capitalize'><NavLink className='nav-link'>blog</NavLink></li>
                        </ul>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='my-auto'>
                        <div className="navRightFlex d-flex justity-content-end flex-column">
                            <div className="navRight">
                                <select className=' me-2'>
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
            <hr className='mt-2'/>
        </>
    )
}
