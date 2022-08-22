import React from 'react'
import AboutusImg from '../../assets/aboutusimg.png'

export default function Aboutus() {
    return (
        <div className='about-home__container'>
            <div className='about-home__content'>
                <h2 className='title'>About Us</h2>
                <p className='about-home__p'>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Maxime temporibus alias ullam
                    natus harum, magni laborum animi
                    pariatur consequatur esse molestias
                    sunt blanditiis porro amet veniam
                    perferendis, sint sed itaque.
                </p>
                <a href="#" className='btn btn2'>Read More</a>
            </div>
            <div className='about-home__image'>
                <img src={AboutusImg} alt="about us image" />
            </div>
        </div>
    )
}