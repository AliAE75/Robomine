import React from 'react'
import Howitworkimg1 from '../../assets/howitworkStep1.png'
import Howitworkimg2 from '../../assets/howitworkStep2.png'
import Howitworkimg3 from '../../assets/howitworkStep3.png'
import Howitworkimg4 from '../../assets/howitworkStep4.png'

export default function Howitwork() {
    return (
        <div className='howitwork__container'>
            <h2 className='howitwork__title title'>How it work</h2>
            <div className='howitwork__images'>
                <img src={Howitworkimg1} alt="about Us Image" />
                <div><span className='circle'></span><span className='dash-1'></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span className='dash-1'></span><span className='circle'></span></div>
                <img src={Howitworkimg2} alt="about Us Image" />
                <div><span className='circle'></span><span className='dash-1'></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span className='dash-1'></span><span className='circle'></span></div>
                <img src={Howitworkimg3} alt="about Us Image" />
                <div><span className='circle'></span><span className='dash-1'></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span className='dash-1'></span><span className='circle'></span></div>
                <img src={Howitworkimg4} alt="about Us Image" />
            </div>
            <div className='howitwork__content'>
                <div className="steps">
                    <h4 className="step-num">Step 1</h4>
                    <h3 className="step-title">Download</h3>
                    <p className="p1">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
                <div className="steps">
                    <h4 className="step-num">Step 2</h4>
                    <h3 className="step-title">Connect wallet</h3>
                    <p className="p1">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
                <div className="steps">
                    <h4 className="step-num">Step 3</h4>
                    <h3 className="step-title">Start trading</h3>
                    <p className="p1">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
                <div className="steps">
                    <h4 className="step-num">Step 4</h4>
                    <h3 className="step-title">Earn money</h3>
                    <p className="p1">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
            </div>
        </div>
    )
}
