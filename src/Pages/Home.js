import React from 'react';

import {faFacebook, faGithub, faYoutube, faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Home() {
    return (
        <HomeStyled>
        <div className="Home">
            <header className="hero">
                <h1 className="hero-text"> 
                Ya! Meet <span> Paa Solo </span> The Genius
                </h1>
                <p className="hero-sub-text" >
                Enthusiastic college student working towards degree in Computer Science. Experience across 
business communication channels including social media, email blasts, digital and public 
relations. Quick-learner with positive attitude ready to make immediate impact.
                </p>
                <div className="social-icons">
                    <Link className='holder'>
                    <FontAwesomeIcon icon={faFacebook} className="social-icon facebook "></FontAwesomeIcon>
                    </Link>

                    <Link className='holder'>
                    <FontAwesomeIcon icon={faGithub} className="social-icon github "></FontAwesomeIcon>
                    </Link>

                    <Link className='holder'>
                    <FontAwesomeIcon icon={faYoutube} className="social-icon youtube "></FontAwesomeIcon>
                    </Link>

                    <Link className='holder'>
                    <FontAwesomeIcon icon={faStackOverflow} className="social-icon stackoverflow "></FontAwesomeIcon>
                    </Link>
                
          
           </div>
            </header>
            
            </div>
            </HomeStyled>
    )
}

const HomeStyled = styled.div`
.Home{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
}

.hero-text{
    color: white;
    font-size: 3.8rem;
    text-align: center;
    span{
        color: darkred;
        font-family: 'M PLUS Rounded 1c', sans-serif;
    }
}
.hero-sub-text{
    text-align: center;
}

.social-icons{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    .holder{
        margin-right: 1rem;
        .social-icon{
           color: #a4acc4;
font-size: 2.8rem;
transition: all .4s ease-in-out
        }
        .facebook:hover{
            color:blue;
        }
        .youtube:hover{
            color: rgb(173, 10, 10);
        }
        .github:hover{
            color: rgb(192, 11, 147);
        }
        .stackoverflow:hover{
            color: rgb(185, 80, 10);
        }

    }
}

`;
export default Home
