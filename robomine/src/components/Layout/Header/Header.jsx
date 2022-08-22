import React from 'react'
import SiteCharacter from '../../../assets/site-character.png'
import { BsChevronDown } from 'react-icons/bs'

export default function Header() {

  // /* ----------------------------------------- sticky header ----------------------------------------- */
  window.addEventListener("scroll", function () {
    if (this.pageYOffset > 60) {
        this.document.querySelector(".header__container").classList.add("sticky");
    }
    else {
        this.document.querySelector(".header__container").classList.remove("sticky");
    }
})

  return (
    <div className='header__container'>
      <div className="row">
        <div className="header__logo">
          <img src={SiteCharacter} alt="Site Character" />
        </div>
        <div className="header__menu">
          <ul>
            <li><a class="nav-item active" href="#home">Home</a></li>
            <li><a class="nav-item" href="#plans">Plans</a></li>
            <li><a class="nav-item" href="#about">About Us</a></li>
            <li><a class="nav-item" href="#fq">F&Q</a></li>
            <li><a class="nav-item" href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="header__buttons-language">
          <div class="header__language">
            <span class="language-in"><i class="fi fi-gb"></i>&nbsp;&nbsp;EN&nbsp;&nbsp;<i><BsChevronDown className='bs-chevron-down'/></i></span>
            <ul class="language-out">
              <li><i class="fi fi-es"></i>&nbsp;&nbsp;SP</li>
              <li><i class="fi fi-ae"></i>&nbsp;&nbsp;AR</li>
              <li><i class="fi fi-it"></i>&nbsp;&nbsp;IT</li>
              <li><i class="fi fi-de"></i>&nbsp;&nbsp;GR</li>
              <li><i class="fi fi-fr"></i>&nbsp;&nbsp;FR</li>
            </ul>
          </div>
          <div className="header__buttons">
            <a href="#" className='btn btn1 btn-login'>log in</a>
            <a href="#" className='btn btn1 btn-signup'>sign up</a>
          </div>
        </div>
      </div>
    </div>
  )
}