import React, { useContext, useState, useRef,useEffect } from 'react';
import cryptoLogo from '../../assets/cryptosphere.png';
import { Button, Row, Col } from 'react-bootstrap';
import { MdOutlineArrowOutward } from "react-icons/md";
import { NavLink ,Link} from 'react-router-dom';
import { CoinContext } from '../../assets/context/CoinContext'; // Ensure the path is correct
import { GiHamburgerMenu } from "react-icons/gi";
import * as AiIcons from 'react-icons/ai';
import { SideNavData } from './SideBar';
export default function Navbar() {
    const { setCurrency } = useContext(CoinContext);
    const [sidebar, setSidebar] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let sidebarHandler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setSidebar(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", sidebarHandler);


        return () => {
            document.removeEventListener("mousedown", sidebarHandler);
        }

    });
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
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
                        <Row>
                            <Col lg={12} md={10} sm={10} xs={10}>
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
                            <Col lg={0} md={2} sm={2} xs={2} className='mnu'>
                                <div className="navContiner my-auto" ref={menuRef}>
                                    <GiHamburgerMenu className='mx-auto burgerMenu' onClick={() => { setSidebar(!sidebar) }} />
                                    <nav className={sidebar ? 'sideMenu active' : 'sideMenu'}>
                                        <ul className='sideMenuItems'>
                                            <li className='sideMenuToggle list-unstyled mb-4 mt-3' onClick={() => { setSidebar(!sidebar) }}>
                                                <Link to='#' className='sideBars'>
                                                    <AiIcons.AiOutlineClose />
                                                </Link>
                                            </li>
                                            {SideNavData.map((item, index) =>
                                            (
                                                <li key={index} className={item.cName}>
                                                    <Link to={item.path} className='nav-link linkSidePar'>{item.title}</Link>
                                                    <hr className='me-3'/>
                                                </li>
                                            )

                                            )}
                                        </ul>
                                    </nav>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
            <hr className='mt-2' />
        </>
    );
}
