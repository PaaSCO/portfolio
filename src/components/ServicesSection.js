import React from 'react';
import styled from 'styled-components';

function ServicesSection({image, title, text}) {
    return (
        <ServiceStyled>
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} alt=""/>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
        </ServiceStyled>
    )
}

const ServiceStyled = styled.div`
.ServicesSection{
 
    .service{
        margin-top: 3rem;
        width: 95%;
        background-color: #191D2B;
        border-left: 1px solid #2e344e;
        border-right: 1px solid #2e344e;
        border-bottom: 1px solid #2e344e;
        border-top: 8px solid #2e344e;
        transition: all .4s ease-in-out;
        @media screen and (max-width:1400px){
            width: 100%;
            margin-bottom: 1rem;
        }
        &:hover{
            border-top: 8px solid #037FFF;
        }
        
        .service-content{
            padding: 1rem;
            .s-title{
                font-size: 1.6rem;
                font-weight: 500;
                position: relative;
                padding-bottom: 1rem;
                margin: 1rem 0;
                &::after{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 30%;
                    height: 1px;
                    background-color: #2e344e;
                }
            }
        }
    }
}

.servives-container{
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    @media screen and (max-width:1400px){
        flex-direction: column;
        margin-bottom: 2rem;
    }
}


`;

export default ServicesSection;
