import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventImage1 from '../../assets/event01.png'

export default function Events() {
    const settingsEventsSlider = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='events__container'>
            <div className="events__title">
                <h2 className='event-title'>Stay in the know crypto <br /> with Robomine</h2>
                <p>A creative agency that lead and inspire</p>
            </div>
            <Slider  {...settingsEventsSlider}>
                <div>
                    <div className='event__slide'>
                        <div className="content">
                            <p className='info-head'>crypto news</p>
                            <h4>be part of our global community</h4>
                            <p className='info-content'>
                                Let's stay in touch. Join our communities to keep up with the BitCloud team and our traders from across the world.
                            </p>
                            <a href="#" className="btn btn-event-slide">Join now</a>
                        </div>
                        <div className="image">
                            <img src={EventImage1} alt="Event Image" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='event__slide'>
                        <div className="content">
                            <p className='info-head'>crypto news</p>
                            <h4>be part of our global community</h4>
                            <p className='info-content'>
                                Let's stay in touch. Join our communities to keep up with the BitCloud team and our traders from across the world.
                            </p>
                            <a href="#" className="btn btn-event-slide">Join now</a>
                        </div>
                        <div className="image">
                            <img src={EventImage1} alt="Event Image" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='event__slide'>
                        <div className="content">
                            <p className='info-head'>crypto news</p>
                            <h4>be part of our global community</h4>
                            <p className='info-content'>
                                Let's stay in touch. Join our communities to keep up with the BitCloud team and our traders from across the world.
                            </p>
                            <a href="#" className="btn btn-event-slide">Join now</a>
                        </div>
                        <div className="image">
                            <img src={EventImage1} alt="Event Image" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
