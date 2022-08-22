import React from 'react'
import LandingImage from '../../assets/landing-image.png'

export default function Landingcomponent() {
    return (
        <div className='landing__container'>
            <div className="row">
                <div className="landing__image">
                    <img src={LandingImage} alt="Landing Image" />
                </div>
                <div className="landing__countdown">

                </div>
                <div className="landing__content">
                    <h1 className="landing__title">cooming soon</h1>
                    <p className="p1">We are currently making some</p>
                    <p className="p2">improvements to our website!</p>

                    <div className="landing__link">
                        <a href="#" className="landing-btn">get updates</a>
                    </div>

                    <div className="landing__social">
                        <ul>
                            <li><i>facebook</i></li>
                            <li><i>twitter</i></li>
                            <li><i>linkdin</i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
