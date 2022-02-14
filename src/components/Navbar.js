import React from 'react'
import avatar from '../img/paa_solo_best.jpg';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
    return (
        <NavbarStyled>
        <div className="Navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Paa Solo
                    </p>
            </footer>
            </nav>
            
            </div>
            </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
.Navbar{
    height: 100vh;
    height: 100vh;
    .nav{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .profile{
            width: 100%;
            text-align: center;
            margin-top: 1rem;
            border-bottom: 1px solid #2e344e;
            img{
                width: 70%;
                border-radius: 100%;
                border: 5px solid #2e344e;
                margin-bottom: 1rem;
            }
        }
        .nav-items{
            width: 100%;
            .nav-item{
                list-style: none;
                text-align: center;
                a{
                    text-decoration: none;
                    font-size: inherit;
                    color: inherit;
                    display: block;
                    padding: .5rem 0;
                    position: relative;
                    &::before{
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: .4rem;
                        height: 100%;
                        background-color: rgb(59, 4, 4);
                        transform-origin: bottom;
                        opacity:0.6;
                        transform: scale(0);
                        overflow-x: hidden;
                        transition: transform .6s .2s, width .5s cubic-bezier(1,-0.16,.6,1.35) ;


                    }
                    &:hover::before{
                        width: 100%;
                        transform: scale(1);
                    }
                }
            }
        }
        .footer{
            width: 100%;
            border-top: 1px solid #2e344e;

            p{
                text-align: center;
                padding: 1rem 0;
            }
        }
    }
}
.active{
    background-color: darkred;
}

`;

export default Navbar;
