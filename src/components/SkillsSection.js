import React from 'react'
import styled from 'styled-components'







function SkillsSection({ skill, progress, width}) {   

       return (
         <SkillStyled>
        <div className='SkillsSection'>
            <div className='skill-container'>
                <h5 className='skill-title'>{skill}</h5>
                <div className='skill-bar'>
                    <p className='skill-text'>{progress}</p>
                    <div className='skill-progress'>
                    <progress max='100' value={width} />
                                

                      
                       
                    </div>

                </div>


            </div>
            
        </div>
       </SkillStyled>
    )
}

const SkillStyled = styled.div`
.SkillsSection{
   
}

.skills-container{
    .skill-title{
        font-size: 1.4rem;
        font-weight: 400;
    }

    .skill-bar{
        display: flex;
        align-items: center;
        .skill-text{
        }
       

       .skill-progress{
           progress{

           }
           progress[value]{
               width:2rem;
               height:3rem;
           }
       }
    }
}
`;
export default SkillsSection
