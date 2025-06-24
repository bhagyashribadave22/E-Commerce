import React from 'react';
import './Hero.css';
import hand_icon from '../../assets/hand_icon.png';
import arrow_icon from '../../assets/arrow_icon.png';
import men from '../../assets/men.webp';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>Best deals! Best Prices</h2>

                <div className="hand-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" style={{ height: "60px" }} />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" height="30px"/>
            </div>
            <div className="hero-right">
                <img src={men} alt="" />
            </div>
        </div>
    );
};

export default Hero;