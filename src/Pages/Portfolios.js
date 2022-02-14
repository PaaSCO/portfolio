import React from 'react';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import Tittle from '../components/Title';
import portfolios from '../components/allportfolios';
import { useState } from 'react';
import styled from 'styled-components';


const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <PortfolioStyled>
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
            </div>
            </PortfolioStyled>
    )
}

const PortfolioStyled = styled.div`
.PortfolioPage{

}

.portfolis{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2rem;
    column-gap: 1rem;
    @media screen and (max-width: 1600px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 900px){
        grid-template-columns: repeat(1, 1fr);
    }
    .portfolio{
        .image-data{
            position: relative;
            &::before{
                content: "";
                position: absolute;
                top: 12px;
                left: 15px;
                height: calc(100% - 30px);
                width: calc(100% - 30px);
                background-color: rgba(255, 255, 255, 0.925);
                transform-origin: center;
                transform: scale(0);
                transition: all .4s ease-in-out;

            }
            &:hover::before{
                transform: scale(1);
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }

            .hover-items{
                list-style: none;
                position: absolute;
                top: 70%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 1rem 2rem;
                visibility: hidden;
                li{
                    a{
                        padding: 1rem;
                        text-decoration: none;
                        font-family: inherit;
                        border-radius: 10px;
                        background-color: #037FFF;
                        color: white;
                        &:not(:last-child){
                            margin-right: 2rem;
                        }
                    }
                }
            }

            &:hover{
                .hover-items{
                    transition: all .5s ease-in-out .2s;
                    visibility: visible;
                    top: 50%;
                }
            }
        }
        
        h5{
            font-size: 1.7rem;
            font-weight: 400;
            color: white;
            transition: all .3s ease-in-out;
            &:hover{
                color:  #037FFF;
                cursor: pointer;
            }
        }
    }
}

`;

export default PortfoliosPage;
