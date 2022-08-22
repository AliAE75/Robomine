import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderBackground from '../../assets/slider-background.mp4'
import 'animate.css'
import { ImFacebook } from 'react-icons/im'
import { IoLogoTwitter } from 'react-icons/io'
import { TbBrandTelegram } from 'react-icons/tb'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

export default function Slider2() {
  const settingsslider = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Set the date we're counting down to
var countDownDate1 = new Date("june 30, 2022 15:37:25").getTime();
var countDownDate2 = new Date("july 30, 2022 15:37:25").getTime();
var countDownDate3 = new Date("august 26, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days-1").innerHTML = days;
  document.getElementById("hours-1").innerHTML = hours;
  document.getElementById("minutes-1").innerHTML = minutes;
  document.getElementById("seconds-1").innerHTML = seconds;
}, 1000);

// Update the count down every 1 second
var y = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days-2").innerHTML = days;
  document.getElementById("hours-2").innerHTML = hours;
  document.getElementById("minutes-2").innerHTML = minutes;
  document.getElementById("seconds-2").innerHTML = seconds;
}, 1000);
// Update the count down every 1 second
var z = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days-3").innerHTML = days;
  document.getElementById("hours-3").innerHTML = hours;
  document.getElementById("minutes-3").innerHTML = minutes;
  document.getElementById("seconds-3").innerHTML = seconds;
}, 1000);


  return (
    <section className='slider'>
      <Slider className='main-slider' {...settingsslider}>
        <div className="item">
          <div className="item-container">
            <div className="item-row">
              <div className="item-slider-container">
                <div className="item-slider-content">
                  <ul>
                    <li class="slider_social_icon1 animate__animated animate__slow	animate__bounceInDown"><a href="#"><ImFacebook className='social-icon' /></a></li>
                    <li class="slider_social_icon2 animate__animated animate__slow	animate__bounceInDown"><a href="#"><IoLogoTwitter className='social-icon' /></a></li>
                    <li class="slider_social_icon3 animate__animated animate__slow	animate__bounceInDown"><a href="#"><TbBrandTelegram className='social-icon' /></a></li>
                    <li class="slider_social_icon4 animate__animated animate__slow	animate__bounceInDown"><a href="#"><BsCurrencyBitcoin className='social-icon' /></a></li>
                    <li class="slider_social_icon5 animate__animated animate__slow	animate__bounceInDown"><a href="#"><HiMail className='social-icon' /></a></li>
                  </ul>
                  <h2 data-animation="animated bounceInLeft">Robomine - Mining &<br />Investment Platform</h2>
                  <div class="buttons">
                    <a href="#" class="btn btn1" data-animation="animated bounceInUp">TRY MINING</a>
                    <a href="#" class="btn btn1" data-animation="animated bounceInUp">Buy Package</a>
                  </div>
                </div>
              </div>
              <div className="item-slider-container">
                <div className="slider-timer">
                  <div id="clock-div1">
                    <div>
                      <span id="days-1"></span>
                      <div className="smalltext">Days</div>
                    </div>
                    <div>
                      <span id="hours-1"></span>
                      <div className="smalltext">Hours</div>
                    </div>
                    <div>
                      <span id="minutes-1"></span>
                      <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                      <span id="seconds-1"></span>
                      <div className="smalltext">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-container">
            <div className="item-row">
              <div className="item-slider-container">
                <div className="item-slider-content">
                  <ul>
                    <li class="slider_social_icon1 animate__animated animate__slow	animate__bounceInDown"><a href="#"><ImFacebook className='social-icon' /></a></li>
                    <li class="slider_social_icon2 animate__animated animate__slow	animate__bounceInDown"><a href="#"><IoLogoTwitter className='social-icon' /></a></li>
                    <li class="slider_social_icon3 animate__animated animate__slow	animate__bounceInDown"><a href="#"><TbBrandTelegram className='social-icon' /></a></li>
                    <li class="slider_social_icon4 animate__animated animate__slow	animate__bounceInDown"><a href="#"><BsCurrencyBitcoin className='social-icon' /></a></li>
                    <li class="slider_social_icon5 animate__animated animate__slow	animate__bounceInDown"><a href="#"><HiMail className='social-icon' /></a></li>
                  </ul>
                  <h2 data-animation="animated bounceInLeft">Robomine - Mining &<br />Investment Platform</h2>
                  <div class="buttons">
                    <a href="#" class="btn btn1" data-animation="animated bounceInUp">TRY MINING</a>
                    <a href="#" class="btn btn1" data-animation="animated bounceInUp">Buy Package</a>
                  </div>
                </div>
              </div>
              <div className="item-slider-container">
                <div className="slider-timer">
                  <div id="clock-div2">
                    <div>
                      <span id="days-2"></span>
                      <div className="smalltext">Days</div>
                    </div>
                    <div>
                      <span id="hours-2"></span>
                      <div className="smalltext">Hours</div>
                    </div>
                    <div>
                      <span id="minutes-2"></span>
                      <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                      <span id="seconds-2"></span>
                      <div className="smalltext">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-container">
            <div className="item-row">
              <div className="item-slider-container">
                <div className="item-slider-content">
                  <ul>
                    <li class="slider_social_icon1 animate__animated animate__slow	animate__bounceInDown"><a href="#"><ImFacebook className='social-icon' /></a></li>
                    <li class="slider_social_icon2 animate__animated animate__slow	animate__bounceInDown"><a href="#"><IoLogoTwitter className='social-icon' /></a></li>
                    <li class="slider_social_icon3 animate__animated animate__slow	animate__bounceInDown"><a href="#"><TbBrandTelegram className='social-icon' /></a></li>
                    <li class="slider_social_icon4 animate__animated animate__slow	animate__bounceInDown"><a href="#"><BsCurrencyBitcoin className='social-icon' /></a></li>
                    <li class="slider_social_icon5 animate__animated animate__slow	animate__bounceInDown"><a href="#"><HiMail className='social-icon' /></a></li>
                  </ul>
                  <h2 data-animation="animated bounceInLeft">Robomine - Mining &<br />Investment Platform</h2>
                  <div class="buttons">
                    <a href="#" class="btn btn1" data-animation="animated bounceInUp">TRY MINING</a>
                    <a href="#" class="btn btn1" data-animation="animated bounceInUp">Buy Package</a>
                  </div>
                </div>
              </div>
              <div className="item-slider-container">
                <div className="slider-timer">
                  <div id="clock-div3">
                    <div>
                      <span id="days-3"></span>
                      <div className="smalltext">Days</div>
                    </div>
                    <div>
                      <span id="hours-3"></span>
                      <div className="smalltext">Hours</div>
                    </div>
                    <div>
                      <span id="minutes-3"></span>
                      <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                      <span id="seconds-3"></span>
                      <div className="smalltext">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-container">
            <div className="item-row">
              <div className="item-slider-container">
                <div className="item-slider-content">
                  <ul>
                    <li class="slider_social_icon1 animate__animated animate__slow	animate__bounceInDown"><a href="#"><ImFacebook className='social-icon' /></a></li>
                    <li class="slider_social_icon2 animate__animated animate__slow	animate__bounceInDown"><a href="#"><IoLogoTwitter className='social-icon' /></a></li>
                    <li class="slider_social_icon3 animate__animated animate__slow	animate__bounceInDown"><a href="#"><TbBrandTelegram className='social-icon' /></a></li>
                    <li class="slider_social_icon4 animate__animated animate__slow	animate__bounceInDown"><a href="#"><BsCurrencyBitcoin className='social-icon' /></a></li>
                    <li class="slider_social_icon5 animate__animated animate__slow	animate__bounceInDown"><a href="#"><HiMail className='social-icon' /></a></li>
                  </ul>
                  <h2 data-animation="animated bounceInLeft">Robomine - Mining &<br />Investment Platform</h2>
                  <div class="buttons">
                    <a href="#" class="btn btn1" data-animation="animated bounceInUp">TRY MINING</a>
                    <a href="#" class="btn btn1" data-animation="animated bounceInUp">Buy Package</a>
                  </div>
                </div>
              </div>
              <div className="item-slider-container">
                <div className="slider-timer">
                  <div id="clock-div4">
                    <div>
                      <span id="days-4">24</span>
                      <div className="smalltext">Days</div>
                    </div>
                    <div>
                      <span id="hours-4">05</span>
                      <div className="smalltext">Hours</div>
                    </div>
                    <div>
                      <span id="minutes-4">42</span>
                      <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                      <span id="seconds-4">39</span>
                      <div className="smalltext">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className='slider-background'>
        <video className='slider-background-vid' src={SliderBackground} autoPlay loop></video>
      </div>
    </section>
  )
}
