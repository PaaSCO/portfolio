
import React from 'react'
import ImageSection from '../components/ImageSection'
import ServicesSection from '../components/ServicesSection'
import SkillsSection from '../components/SkillsSection'
import Title from '../components/Title'
import design from '../img/design.svg'
import ITSolve from '../img/intelligence.svg'
import appDev from '../img/game-dev.svg'
import styled from 'styled-components'

function About() {
    return (
        <AboutStyled>
        <div className="About">
            <h1>
               <Title title={"about me"} span={"About Me"} />
               <ImageSection/>
               <Title title={"My Skills"} span={"My Skills"} />
               <div className='skillsConatainer'>
               <SkillsSection skill={'Flutter'}  progress={'70%'} width={'70'}/>
               <SkillsSection skill={'React JS'}  progress={'75%'} width={'75'}/>
               <SkillsSection skill={'C++'}  progress={'60%'} width={'60'}/>
               <SkillsSection skill={'Graphic Design'}  progress={'80%'} width={'80'}/>
               <SkillsSection skill={'Database Design'}  progress={'56%'} width={'56'}/>
               <SkillsSection skill={'Presentation Skills'}  progress={'90%'} width={'90'}/>

               </div>
               <br/>
               <Title title={"Services"} span={"Services"} />
                <div className='services-container'>
                      <ServicesSection image={design} title={'Web Design'} text={'Web offer responsive web designs'}/>
                      <ServicesSection image={appDev} title={'Mobile Development'} text={'Apps ranging from chats, maps, games'}/>
                      <ServicesSection image={design} title={'Graphic Design'} text={'Elegant Graphics for special communications'}/>
                      <ServicesSection image={ITSolve} title={'IT Solutions'} text={'Finding solutions to your IT problems is our hobby'}/>
                </div>
            </h1>
            
            </div>
            </AboutStyled>
    )
}

const AboutStyled = styled.div`
.ImageSection{
    display: flex;
    margin-top: 4rem;
    margin-bottom: 4rem;
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    letter-spacing: .1rem;
    .img{
        width: 100%;
        height: 60vh;
        
        img{
            width: 100%;
            object-fit: cover;
            height: 100%;
        }
    }

    .about-info{
        
        margin-left: 2rem;
        h4{
            font-size: 2rem;
        }
        .about-text{
            padding: 1rem 0;
        }
    }
    @media screen and (max-width: 1400px){
        flex-direction: column;
        .about-info{
            margin-left: 0;
            margin-top: 1.2rem;
        }
    }
    
}

.about-details{
    display: flex;
    
    p{
        padding: .3rem 0;
    }
    .right-section{
        margin-left: 2.3rem;
    }
}

.btn{
    padding: 1rem 2rem;
    background-color:rgb(179, 11, 11);
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 2px;
    margin-top: 1rem;
    position: relative;
    &::after{
        position: absolute;
        content: "";
        width: 0;
        height: .3rem;
        left: 0;
        bottom: 0;
        background-color: #a4acc4;;
        transition: all 0.4s ease-in-out;
    }
    &:hover::after{
        width: 100%;
    }
}

.skillsConatainer{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    row-gap: 3rem;
    margin: 3rem 0;
   
    @media screen and (max-width: 1100px){
        grid-template-columns: repeat(1, 1fr);
    }
}

.btn-port{
    padding: .6rem 2rem;
    background-color: #0381ff5b;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    color: white;
    margin-bottom: 1rem;
    transition: all .3s ease-in-out;
    &:not(:last-child){
        margin-right: 1rem;
    }
    &:hover{
        background-color: #037FFF;
    }
    &:active{
        background-color: #037FFF;
    }
    &:focus{
        background-color: #037FFF;
    }
    

}

.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 10rem;
    flex-wrap: wrap;
    @media screen and (max-width: 1270px){
        margin: 2rem 5rem;
    }
    @media screen and (max-width: 1100px){
        margin: 2rem 2rem;
    }
}




`;

export default About
