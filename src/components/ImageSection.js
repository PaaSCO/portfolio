import React from 'react';
import about from '../img/paa_solo_best.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>Meet<span> Solomon Arthur</span></h4>
                <p className="about-text">
               A hardworking young man with a genuine passion for technology and leadership. 
Experienced across public speaking, administration and mentoring young people. 
Quick-learner with positive attitude ready to make impact. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Solomon Arthur</p>
                        <p>: 23</p>
                        <p>: Ghanaian</p>
                        <p>: Engllish, Twi</p>
                        <p>: KNUST,Kumasi</p>
                        <p>: Ghana</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>


    )
}

export default ImageSection;
