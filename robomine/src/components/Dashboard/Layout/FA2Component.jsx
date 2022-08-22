import React from 'react'

export default function FA2Component() {
    return (
        <div id='fa2_layout' className='fa2_layout'>
            <div className="fa2_section">
                <h1>2FA <span>Enabled</span></h1>
                <p>If you want to turn off 2FA, input your account password and the six-digital code provided by the Google Authenticator app below, then click "<a href="#">Disable 2FA</a>".</p>
                <h2>Disable 2FA</h2>
                <p className='p-2'>Enter your password and the six-digital code provided by the Google Authenticator app to Disable the 2FA verification.</p>
                <p className='user-email-address'><i>mail-icon</i> <span className='user-email'>schinner@ui8.net</span></p>
                <form action="" method="get">
                    <div className="pass">
                        <label htmlFor="">PASSWORD</label>
                        <input type="password" name="password" id="disable-2fa-password" className="disable-2fa-password" placeholder='Password' />
                    </div>
                    <div className="fa2">
                        <label htmlFor="">2FA CODE</label>
                        <input type="text" name="text" id="disable-2fa-code" className="disable-2fa-code" />
                    </div>
                    <input className='btn-disable-2fa' type="submit" value="Disable 2FA" />
                </form>
            </div>
        </div>
    )
}
