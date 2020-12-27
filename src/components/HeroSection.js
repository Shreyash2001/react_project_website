import React from 'react';
import Button from './Button';
import "./HeroSection.css";

function HeroSection() {
    return (
        
            <div className='hero-container'>
                <h1>Welcome Travellers to the destination of your desire!!</h1>
                <p>What is stopping you from travelling?</p>
                <div className="hero-btns">
                    <Button className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    >
                        Get Started
                    </Button>
                    <Button className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    >
                        Watch Trailer <i className="far fa-play-circle"></i>
                    </Button>
                </div>
            </div>
        
    )
}

export default HeroSection
