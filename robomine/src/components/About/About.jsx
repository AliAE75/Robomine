import React from 'react'
import AboutImage from '../../assets/aboutimage.png'

export default function About() {
  return (
    <section id='About'>
      <div className="About__container">
        <div className="row">
          <div className="About__content">
            <h2 className='title section-title'>About Us</h2>
            <p className='section-info'>
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. In,
              deserunt sapiente pariatur quisquam
              veniam quo. Saepe dolorum,
              fugit adipisci maiores beatae
              vero! Natus ratione dolorum
              voluptatum dicta atque distinctio aliquid.
            </p>
          </div>
          <div className="About__image">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
      </div>
    </section>
  )
}
