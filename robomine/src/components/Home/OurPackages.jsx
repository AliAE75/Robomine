import React from 'react'
import PackageImage1 from '../../assets/howitworkStep3.png'
import PackageImage2 from '../../assets/howitworkStep1.png'
import PackageImage3 from '../../assets/howitworkStep2.png'

export default function OurPackages() {
  return (
    <div className='ourpackages__container'>
      <h2 className='ourpackages__title title'>Our Packages</h2>
      <div className="row">
        <div className="package package-1">
            <div className="package__image">
                <img src={PackageImage1} alt="Package Image 1" />
            </div>
            <h4 className="package__title">Buy & Sell Crypto</h4>
            <p className="package__info">
                We realize ideas from simple to complex,
                everything becomes easy to use and reach the most potencial customers.
            </p>
        </div>
        <div className="package package-2">
            <div className="package__image">
            <img src={PackageImage2} alt="Package Image 2" />
            </div>
            <h4 className="package__title">Trade Assets</h4>
            <p className="package__info">
                We realize ideas from simple to complex,
                everything becomes easy to use and reach the most potencial customers.
            </p>
        </div>
        <div className="package package-3">
            <div className="package__image">
            <img src={PackageImage3} alt="Package Image 3" />
            </div>
            <h4 className="package__title">Earn Rewards for Trading</h4>
            <p className="package__info">
                We realize ideas from simple to complex,
                everything becomes easy to use and reach the most potencial customers.
            </p>
        </div>
      </div>
    </div>
  )
}
