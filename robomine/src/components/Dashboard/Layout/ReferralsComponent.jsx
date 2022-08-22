import React from 'react'

export default function ReferralsComponent() {
    return (
        <div id='referrals_layout' className='referrals_layout'>
            <div className="referrals_section">
                <h5>Total referrals</h5>
                <div className="box-1">
                    <div className="up">
                        <span>1,056.00</span>
                        <p>USDT</p>
                    </div>
                    <div className="bottom">
                        <p>You're earning 20% of the trading fees your referrals pay. Learn more</p>
                    </div>
                </div>
                <div className="box-2">
                    <h3>Invite friends to earn 20%</h3>
                    <div className="descripton-referral">
                        <div className="referral-link-box">
                            <p className='title-referral-link'>referral link</p>
                            <p className='address-referral-link'><span>https://ui8.net/bitcloud509</span></p>
                        </div>
                        <div className="referral-code-box">
                        <p className='title-referral-link'>referral code</p>
                            <p className='address-referral-link'><span>N84CRDKK</span></p>
                        </div>
                    </div>
                </div>
                <a href="#" className='btn-referral'>My wallet</a>
            </div>
        </div>
    )
}
