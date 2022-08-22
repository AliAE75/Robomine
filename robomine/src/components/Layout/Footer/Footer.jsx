import React from 'react'
import { TbBrandTwitter } from 'react-icons/tb'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { RiInstagramLine } from 'react-icons/ri'
import { BiBasketball } from 'react-icons/bi'
import { TbLanguage } from 'react-icons/tb'
import { AiOutlineRight } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer__container'>
      <div className="row">
        <div className="top">
          <div className="footer-nav">
            <div className="footer-inner-container">
              <a href="#">about</a>
              <a href="#">projects</a>
              <a href="#">what we do</a>
              <a href="#">press</a>
              <a href="#">jobs</a>
            </div>
          </div>
          <div className="hr"></div>
          <div className="footer-contact">
            <div className="footer-inner-container">
              <p className='footer-title'>contact</p>
              <p className='footer-address'>43252 borer mountains</p>
              <p className='footer-address'>zackerychester</p>
              <p className='footer-address'>bathamas</p>
              <p className='footer-address'>732-528-4945</p>
            </div>
          </div>
          <div className="hr"></div>
          <div className="footer-newsletter">
            <div className="footer-inner-container">
              <p className='footer-title'>newsletter</p>
              <p>Subscribe our newsletter to get more free design course and resource</p>
              <form>
                <input type="email" name="email" id="footer-email" />
                <input id='submit-footer-email' type="submit" value='&gt;' />
              </form>
            </div>
          </div>
        </div>
        <div className="hr-2"></div>
        <div className="bottom">
          <p>Copyright &copy; 2021 UIB LLC. All rights reserved</p>
          <div className="social-icons-footer">
            <a href="#"><RiFacebookCircleLine className='qqs' /></a>
            <a href="#"><TbBrandTwitter /></a>
            <a href="#"><RiInstagramLine /></a>
            <a href="#"><BiBasketball /></a>
            <a href="#"><TbLanguage /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
