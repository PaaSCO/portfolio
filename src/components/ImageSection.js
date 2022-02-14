import React from 'react';
import about from '../img/paa_solo_best.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>Hello I am<span> Paa Solo</span></h4>
                <p className="about-text">
                Enthusiastic college student working towards degree in Computer Science. Experience across 
business communication channels including social media, email blasts, digital and public 
relations. Quick-learner with positive attitude ready to make immediate impact.
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
                        <p>: Paa Solo</p>
                        <p>: 22</p>
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
