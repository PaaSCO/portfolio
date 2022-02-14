import React from 'react'
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../components/Title';
import styled from 'styled-components';

function Contact() {
    return (
        <ContactStyled>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe
                
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+223246375763'} text2={'+233501654252'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'arthersolo2016@gmail.com'} text2={'kwakutimeay@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Knust,Kumasi'} text2={'Ghana'} title={'Address'}/>
                </div>
            </div>
        </ContactStyled>
    )
}
const ContactStyled = styled.div`

.ContactItem{
    width: 100%;
    &:not(:last-child){
        margin-bottom: 1rem;
    }
    .contact{
        display: flex;
        align-items: center;
        background-color:#191D2B ;
        padding: 3rem 0;
        .right-items{
            margin-left: 2rem;
        }
        img{
            padding: 1rem;
            border: 1px solid #2e344e;
            margin-left: 2rem;
            width: 16%;
        }
        .right-items{
            h6{
                font-size: 1.4rem;
                font-weight: 500;
            }
        }
    }
}

.ContactPage{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 6rem;
    @media screen and (max-width: 1270px){
        grid-template-columns: repeat(1, 1fr);
        .map-sect{
            width: 100%;
            height: 50vh;
            margin-bottom: 1rem;
        }
    }
    .contact-sect{
        width: 100%;
    }
}
.map-sect{
    width: 97%;
    padding: 1rem;
    background-color:#191D2B;
    iframe{
        width: 100%;
        height: 100%;
    }
}

.contact-sect{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.title{
    margin-bottom: 5rem;
}
`;

export default Contact;
