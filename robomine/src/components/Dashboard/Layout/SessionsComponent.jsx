import React from 'react'

export default function SessionsComponent() {
  return (
    <div id='sessions_layout' className='sessions_layout'>
      <div className="sessions_section">
        <h2>Active sessions</h2>
        <div className="active-sessions-table">
          <div className='table-row header-table'>
            <p className='s-1'>Data / time</p>
            <p className='s-2'>Device</p>
            <p className='s-3'>Location</p>
          </div>
          <div className='table-row'>
            <p className='s-1'>2021-06-16 <span>10:46:09</span></p>
            <p className='s-2'>Macbook Pro <span>Mac OS Bigsur</span></p>
            <p className='s-3'><span><i>US</i>USA</span></p>
          </div>
          <div className='table-row'>
            <p className='s-1'>2021-06-16 <span>10:45:08</span></p>
            <p className='s-2'>iMac Pro <span>Mac OS Bigsur</span></p>
            <p className='s-3'><span><i>US</i>USA</span></p>
          </div>
        </div>
        <a href="#" className="btn-referral">Log out all other devices</a>
        <h2>Login history</h2>
        <div className="active-sessions-table">
          <div className='table-row header-table'>
            <p className='s-1'>Data / time</p>
            <p className='s-2'>IP address</p>
            <p className='s-3'>Used 2FA</p>
          </div>
          <div className='table-row'>
            <p className='s-1'>2021-06-16 <span>10:46:09</span></p>
            <p className='s-2'><span>1.53.208.186</span></p>
            <p className='s-3'><span>YES</span></p>
          </div>
          <div className='table-row'>
            <p className='s-1'>2021-06-16 <span>10:46:09</span></p>
            <p className='s-2'><span>1.53.208.186</span></p>
            <p className='s-3'><span>NO</span></p>
          </div>
          <div className='table-row'>
            <p className='s-1'>2021-06-16 <span>10:46:09</span></p>
            <p className='s-2'><span>1.53.208.186</span></p>
            <p className='s-3'><span>YES</span></p>
          </div>
        </div>
        <a href="#" className="btn-referral">Contact us</a>
      </div>
    </div>
  )
}
